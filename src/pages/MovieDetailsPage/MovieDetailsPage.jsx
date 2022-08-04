import { useState, useRef, useEffect } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import ThreeDots from 'components/Loaders/Loader';
import { movieDetails } from 'services/moviesApi';
import MovieInfo from 'components/MovieInfo';
import Modal from 'components/Modal/Modal';
import { fetchMovieTrailers } from '../../services/moviesApi';
import { Container } from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  let navigate = useNavigate();
  const youtubeURL = useRef('https://www.youtube.com/embed/');
  const [isModalOpen, setisModalOpen] = useState(false);
  const [movieTrailer, setMovieTrailer] = useState(null);

  const handleModalToggle = async bool => {
    if (!bool) {
      setisModalOpen(false);
      return;
    }
    setisModalOpen(true);
    if (!movieTrailer) {
      const trailer = await addMovieTrailer();
      sessionStorage.setItem('trailer', JSON.stringify(trailer));
      setMovieTrailer(trailer);
    }
  };

  const addMovieTrailer = async () => {
    const trailers = await fetchMovieTrailers(movieId);
    const officicalTrailer = trailers.find(({ name }) =>
      name.includes('Official')
    );
    return officicalTrailer;
  };

  const { data, error, isLoading, isError, isSuccess } = useQuery(
    ['movieDetails', { movieId }],
    movieDetails,
    { staleTime: 60000, cacheTime: 60000 }
  );

  useEffect(() => {
    if (data === 404) {
      const prevMovieId = localStorage.getItem('movieId');
      navigate(`/movies/${prevMovieId}`);
    }
  }, [data, navigate]);

  if (isLoading) {
    return <ThreeDots />;
  }

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }

  if (isSuccess && data !== 404) {
    localStorage.setItem('movieId', JSON.stringify(+movieId));
    return (
      <Container>
        <MovieInfo
          movieData={data}
          handleModalToggle={bool => handleModalToggle(bool)}
        />
        {isModalOpen && (
          <Modal onModal={bool => handleModalToggle(bool)}>
            {movieTrailer ? (
              <iframe
                src={`${youtubeURL.current}${movieTrailer.key}?autoplay=0&mute=0&controls=1`}
                title="video"
                width="600"
                height="400"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <h2>We don't have trailer for this movie</h2>
            )}
          </Modal>
        )}
        <Outlet />
      </Container>
    );
  }
};

export default MovieDetailsPage;
