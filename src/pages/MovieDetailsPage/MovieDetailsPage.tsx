import { useState, useRef, useEffect, MouseEvent } from 'react';
import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';
//#Services
import { movieDetails } from 'services/moviesIDBService';
import { fetchMovieTrailers } from '../../services/moviesIDBService';
import { ILocation } from 'services/interfaces';
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
  const { movieID } = useParams();
  let navigate = useNavigate();
  const location = useLocation();
  const youtubeURL = useRef('https://www.youtube.com/embed/');

  const [prevLocationState, setPrevLocationState] = useState<null | ILocation>(null);
  const [isTrailerModalOpen, setisTrailerModalOpen] = useState(false);
  const [movieTrailer, setMovieTrailer] = useState<null | { key: string }>(null);

  useEffect(() => {
    if (location.state) {
      setPrevLocationState(location.state as ILocation);
    } else {
      setPrevLocationState(null);
    }
  }, [location.state]);

  const handleTrailerToggle = async (bool: boolean | MouseEvent<HTMLButtonElement>) => {
    if (!bool) {
      setisTrailerModalOpen(false);
      return;
    }
    setisTrailerModalOpen(true);
    if (!movieTrailer) {
      try {
        const trailer = await addMovieTrailer();
        sessionStorage.setItem('trailer', JSON.stringify(trailer));
        if (trailer) {
          setMovieTrailer({ key: trailer });
        }
      } catch (error) {
        return toast.error(`Error: ${(error as Error).message}`);
      }
    }
  };

  const addMovieTrailer = async () => {
    if (!movieID) {
      return;
    }
    try {
      const trailers = await fetchMovieTrailers(movieID);
      const officicalTrailer = trailers.find(({ name }) =>
        name.includes('Official')
      );
      return officicalTrailer ?? trailers[0];
    } catch (error) {
      return toast.error(`Error: ${(error as Error).message}`);
    }
  };

  const { data, error, isLoading, isError, isSuccess } = useQuery(
    ['movieDetails', { movieID }],
    movieDetails,
    { refetchOnWindowFocus: false, staleTime: 60000, cacheTime: 60000 }
  );

  useEffect(() => {
    if (data === 404) {
      const prevmovieID = localStorage.getItem('movieID');
      navigate(`/movies/${prevmovieID}`);
    }
  }, [data, navigate]);

  if (isLoading) {
    return <ThreeDots />;
  }

  if (isError) {
    return toast.error(`Error: ${(error as Error).message}`);
  }

  if (isSuccess && data !== 404) {
    localStorage.setItem('movieID', JSON.stringify(+movieID!));
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
        />
        <MovieCategories
          movieID={movieID}
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
