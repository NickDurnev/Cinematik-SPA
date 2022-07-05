import { useState, useRef, useEffect } from 'react';
import { useParams, Route, Routes, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { lazy, Suspense } from 'react';
import { toast } from 'react-toastify';
import ThreeDots from 'components/Loaders/Loader';
import { movieDetails } from 'services/api';
import MovieInfo from 'components/MovieInfo';
import TrailerModal from 'components/Modal/Modal';
import { fetchMovieTrailers } from '../../services/api';

const Cast = lazy(() =>
  import('components/Cast' /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import('components/Reviews' /* webpackChunkName: "reviews" */)
);

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
      <>
        <MovieInfo
          movieData={data}
          handleModalToggle={bool => handleModalToggle(bool)}
        />
        <Suspense fallback={<ThreeDots />}>
          <Routes>
            <Route path="/cast" element={<Cast />}></Route>
            <Route path="/reviews" element={<Reviews />}></Route>
          </Routes>
        </Suspense>
        {isModalOpen && (
          <TrailerModal onModal={bool => handleModalToggle(bool)}>
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
          </TrailerModal>
        )}
      </>
    );
  }
};

export default MovieDetailsPage;
