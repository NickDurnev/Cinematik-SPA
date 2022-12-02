import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import { useInfiniteQuery, useMutation } from 'react-query';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchMovies, deleteMovie } from '../../services/moviesAPI';
import useLocalStorage from 'hooks/useLocalStorage';
import CardList from 'components/CardList';
import MovieCard from 'components/MovieCard';
import Notify from 'components/Notify';
import GallerySkeleton from 'components/Loaders/GallerySkeleton';
import { ListItem, Button, FetchMarker } from './UserMoviesPage.styled';
import { pageVariants, textVariants } from 'animations';

const UserMoviesPage = ({ category }) => {
  const [movies, setMovies] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [userId] = useLocalStorage('userID', null);
  const limitRef = useRef(10);
  const limit = limitRef.current;
  const landingURL = process.env.REACT_APP_LANDING_PAGE_URL;

  const navigate = useNavigate();
  const location = useLocation();

  if (!userId) {
    navigate(`${landingURL}`);
  }

  const { ref: ListRef, inView } = useInView({
    threshold: 0.1,
  });

  const { data, isError, isSuccess, isLoading, error, fetchNextPage } =
    useInfiniteQuery(['getMovies', { userId, limit, category }], fetchMovies, {
      enabled: true,
      staleTime: 60000,
      cacheTime: 60000,
      getNextPageParam: ({ movies, nextPage }) => {
        if (!movies) {
          return;
        }
        if (movies.length < 10) {
          return undefined;
        }
        return nextPage;
      },
    });

  const useDeleteMovie = () => useMutation(data => deleteMovie(data));
  const { mutate } = useDeleteMovie();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    if (movies.length !== 0 && inView) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    if (isSuccess) {
      setMovies([...movies, ...data.pages[pageIndex].movies]);
      setPageIndex(pageIndex + 1);
    }
    if (isError) {
      toast.error(`Error: ${error.response.data.message}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isError, isSuccess]);

  const deleteByID = (e, id) => {
    if (e.currentTarget.nodeName !== 'BUTTON') {
      return;
    }
    mutate([userId, id], {
      onSuccess: ({ data }) => {
        const restMovies = movies.filter(({ _id }) => _id !== data.id);
        setMovies([...restMovies]);
      },
    });
  };

  if (isLoading) {
    return <GallerySkeleton />;
  }

  return (
    <>
      <motion.div
        initial={'closed'}
        animate={'open'}
        exit={'exit'}
        variants={pageVariants}
      >
        {movies.length > 0 ? (
          <CardList>
            {movies.map(movie => (
              <ListItem
                initial={'closed'}
                animate={'open'}
                exit={'exit'}
                variants={textVariants}
                key={movie._id}
              >
                <Button onClick={e => deleteByID(e, movie._id)}>
                  <DeleteIcon />
                </Button>
                <Link
                  to={`/movies/${movie.idbId}`}
                  state={{
                    from: {
                      location: location.pathname,
                    },
                  }}
                >
                  <MovieCard movie={movie}></MovieCard>
                </Link>
              </ListItem>
            ))}
          </CardList>
        ) : (
          <Notify>
            <h2 style={{ textTransform: 'uppercase' }}>List is empty</h2>
          </Notify>
        )}
      </motion.div>
      <FetchMarker ref={ListRef}></FetchMarker>
    </>
  );
};

UserMoviesPage.propTypes = {
  category: PropTypes.string.isRequired,
};

export default UserMoviesPage;