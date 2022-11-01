import { useState, useRef, useEffect } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ThreeDots from 'components/Loaders/Loader';
import { movieDetails } from 'services/moviesIDBService';
import MovieInfo from 'components/MovieInfo';
import Modal from 'components/Modal/Modal';
import Notify from 'components/Notify';
import { fetchMovieTrailers } from '../../services/moviesIDBService';
import { Frame } from './MovieDetailsPage.styled';
import { pageInfoVariants } from 'animations';

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
      <motion.div
        initial={'closed'}
        animate={'open'}
        exit={'exit'}
        variants={pageInfoVariants}
      >
        <MovieInfo
          movieData={data}
          handleModalToggle={bool => handleModalToggle(bool)}
        />
        <AnimatePresence>
          {isModalOpen && (
            <Modal onModal={bool => handleModalToggle(bool)}>
              {movieTrailer && (
                <Frame
                  src={`${youtubeURL.current}${movieTrailer.key}?autoplay=0&mute=0&controls=1`}
                  title="video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></Frame>
              )}
              {!movieTrailer && (
                <Notify>
                  <h2>We don't have trailer for this movie</h2>
                  <SentimentVeryDissatisfiedIcon sx={{ fontSize: 70, mt: 1 }} />
                </Notify>
              )}
            </Modal>
          )}
        </AnimatePresence>
        <Outlet />
      </motion.div>
    );
  }
};

export default MovieDetailsPage;
