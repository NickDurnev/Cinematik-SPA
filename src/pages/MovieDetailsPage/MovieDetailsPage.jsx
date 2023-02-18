import { useState, useRef, useEffect } from 'react';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
//#Services
import { movieDetails } from 'services/moviesIDBService';
import { fetchMovieTrailers } from '../../services/moviesIDBService';
//#MUI
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
//#Components
import ThreeDots from 'components/Loaders';
import GoBackButton from 'components/GoBackButton';
import MovieInfo from 'components/MovieInfo';
import MovieCategories from 'components/MovieCategories';
import Modal from 'components/Modal/Modal';
import Notify from 'components/Notify';
import Frame from 'components/Frame';
//#Styles
import { pageInfoVariants } from 'helpers/animations';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  let navigate = useNavigate();
  const location = useLocation();
  const youtubeURL = useRef('https://www.youtube.com/embed/');

  const [prevLocationState, setPrevLocationState] = useState(null);
  const [isTrailerModalOpen, setisTrailerModalOpen] = useState(false);
  const [movieTrailer, setMovieTrailer] = useState(null);

  useEffect(() => {
    setPrevLocationState(location.state);
  }, [location.state]);

  const handleTrailerToggle = async bool => {
    if (!bool) {
      setisTrailerModalOpen(false);
      return;
    }
    setisTrailerModalOpen(true);
    if (!movieTrailer) {
      const trailer = await addMovieTrailer();
      sessionStorage.setItem('trailer', JSON.stringify(trailer));
      setMovieTrailer(trailer);
    }
  };

  const addMovieTrailer = async () => {
    const trailers = await fetchMovieTrailers(movieId);
    const officicalTrailer = trailers.find(({ name }) =>
      name.includes('Official' || '')
    );
    return officicalTrailer;
  };

  const { data, error, isLoading, isError, isSuccess } = useQuery(
    ['movieDetails', { movieId }],
    movieDetails,
    { refetchOnWindowFocus: false, staleTime: 60000, cacheTime: 60000 }
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
        <GoBackButton
          path={
            prevLocationState?.from?.location ??
            prevLocationState?.from?.prevLocation ??
            '/'
          }
          state={{
            from: {
              location,
            },
          }}
        />
        <MovieInfo
          movieData={data}
          handleTrailerToggle={bool => handleTrailerToggle(bool)}
          prevLocationState={prevLocationState}
          location={location}
        />
        <MovieCategories
          movieId={movieId}
          prevLocationState={prevLocationState}
        />
        <AnimatePresence>
          {isTrailerModalOpen && (
            <Modal onModal={bool => handleTrailerToggle(bool)}>
              {movieTrailer && (
                <Frame
                  youtubeURL={youtubeURL.current}
                  movieTrailer={movieTrailer.key}
                />
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
