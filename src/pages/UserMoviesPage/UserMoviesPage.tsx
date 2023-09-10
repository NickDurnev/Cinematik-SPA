import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import { useInfiniteQuery, useMutation } from 'react-query';
import { Link, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
//#Services
import { IMovie, IError } from 'services/interfaces';
import { fetchMovies, deleteMovie } from '../../services/moviesAPI';
import useLocalStorage from 'hooks/useLocalStorage';
//#Components
import CardList from 'components/MovieList';
import MovieCard from 'components/MovieCard';
import Notify from 'components/Notify';
import GallerySkeleton from 'components/Loaders/GallerySkeleton';
import QueryTrigger from 'components/QueryTrigger';
//#Styles
import { ListItem, Button } from './UserMoviesPage.styled';
import { pageVariants, itemVariants } from 'helpers/animations';

const UserMoviesPage = ({ category }: { category: string }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [userID] = useLocalStorage('userID');
  const limitRef = useRef(10);
  const limit = limitRef.current;

  const location = useLocation();

  const { ref: ListRef, inView } = useInView({
    threshold: 0.1,
  });

  const { data, isError, isSuccess, isLoading, error, fetchNextPage } =
    useInfiniteQuery(['getMovies', { userID, limit, category }], fetchMovies, {
      enabled: true,
      staleTime: 60000,
      cacheTime: 0,
      getNextPageParam: ({ movies, nextPage }) => {
        if (!movies) {
          return;
        }
        if (movies.length < 10) {
          return;
        }
        return nextPage;
      },
    });

  const useDeleteMovie = () => useMutation((data: [string, IMovie['id']]) => deleteMovie(data));
  const { mutate } = useDeleteMovie();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    if (movies.length !== 0 && inView) {
      fetchNextPage();
    }
  }, [inView]);

  useEffect(() => {
    if (isSuccess) {
      setMovies([...movies, ...data.pages[pageIndex].movies]);
      setPageIndex(pageIndex + 1);
    }
    if (isError) {
      toast.error(`Error: ${(error as IError).response.data.message}`);
    }
  }, [data, isError, isSuccess]);

  const deleteByID = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: IMovie['id']) => {
    if (e.currentTarget.nodeName !== 'BUTTON') {
      return;
    }
    mutate([userID, id], {
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
                variants={itemVariants()}
                key={movie._id}
              >
                <Button onClick={e => deleteByID(e, movie._id)}>
                  <DeleteIcon />
                </Button>
                <Link
                  to={`/movies/${movie.idbID}`}
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
      <QueryTrigger ref={ListRef}></QueryTrigger>
    </>
  );
};

UserMoviesPage.propTypes = {
  category: PropTypes.string.isRequired,
};

export default UserMoviesPage;
