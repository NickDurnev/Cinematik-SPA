import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { deleteFromWatchedMovies } from 'services/watchedMoviesStorageActions';
import DeleteIcon from '@mui/icons-material/Delete';
import CardList from 'components/CardList';
import MovieCard from 'components/MovieCard';
import Notify from 'components/Notify';
import { ListItem, Button } from './WatchedMoviesPage.styled';
import { pageVariants } from 'animations';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMovies();
  }, [movies]);

  const getMovies = () => {
    const savedMovies = localStorage.getItem('watchedMovies');
    let parsedMovies = JSON.parse(savedMovies);
    setMovies(parsedMovies);
  };

  const deleteMovie = (e, id) => {
    console.log(e.currentTarget.nodeName);
    if (e.currentTarget.nodeName !== 'BUTTON') {
      return;
    }
    const filteredMovies = deleteFromWatchedMovies(movies, id);
    setMovies(filteredMovies);
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
            <ListItem key={movie.id}>
              <Button onClick={e => deleteMovie(e, movie.id)}>
                <DeleteIcon />
              </Button>
              <Link
                to={`/movies/${movie.id}`}
                state={{
                  from: {
                    location,
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
  );
};

export default MoviesPage;
