import { useEffect, useState } from 'react';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  fetchFavoriteMovies,
  deleteFavoriteMovie,
} from '../../services/moviesAPI';
import useLocalStorage from 'hooks/useLocalStorage';
import CardList from 'components/CardList';
import MovieCard from 'components/MovieCard';
import Notify from 'components/Notify';
import { ListItem, Button } from './FavoriteMoviesPage.styled';
import { pageVariants } from 'animations';

const FavoritesPage = () => {
  const [movies, setMovies] = useState([]);
  const [userId] = useLocalStorage('userID');
  const location = useLocation();
  const queryClient = useQueryClient();

  const { data, isError, isSuccess, error } = useQuery(
    ['getFavoriteMovies', { userId }],
    fetchFavoriteMovies
  );

  useEffect(() => {
    if (isSuccess) {
      setMovies(data.data.movies);
    }
    if (isError) {
      toast.error(`Error: ${error.response.data.message}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isError, isSuccess]);

  const useDeleteMovie = () =>
    useMutation({
      mutationFn: deleteFavoriteMovie,
      onSuccess: () => {
        queryClient.invalidateQueries(['getFavoriteMovies']);
      },
    });

  const mutation = useDeleteMovie();

  const deleteMovie = (e, id) => {
    console.log(e.currentTarget.nodeName);
    if (e.currentTarget.nodeName !== 'BUTTON') {
      return;
    }
    mutation.mutate(id);
  };

  return (
    <motion.div
      initial={'closed'}
      animate={'open'}
      exit={'exit'}
      variants={pageVariants}
    >
      {movies ? (
        <CardList>
          {movies.map(movie => (
            <ListItem key={movie._id}>
              <Button onClick={e => deleteMovie(e, movie._id)}>
                <DeleteIcon />
              </Button>
              <Link
                to={`/movies/${movie.idbID}`}
                state={{
                  from: {
                    location,
                  },
                }}
              >
                <MovieCard
                  movie={movie}
                  deleteMovie={(e, id) => deleteMovie(e, id)}
                ></MovieCard>
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
  );
};

export default FavoritesPage;
