import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { deleteFromFavoritesMovies } from 'services/favoritesMoviesStorageActions';
import DeleteIcon from '@mui/icons-material/Delete';
import CardList from 'components/CardList';
import MovieCard from 'components/MovieCard';
import { ListItem, Button } from './FavoriteMoviesPage.styled';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMovies();
  }, [movies]);

  const getMovies = () => {
    const savedMovies = localStorage.getItem('favoritesMovies');
    let parsedMovies = JSON.parse(savedMovies);
    setMovies(parsedMovies);
  };

  const deleteMovie = (e, id) => {
    console.log(e.currentTarget.nodeName);
    if (e.currentTarget.nodeName !== 'BUTTON') {
      return;
    }
    const filteredMovies = deleteFromFavoritesMovies(movies, id);
    setMovies(filteredMovies);
  };

  return (
    <>
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
                <MovieCard
                  movie={movie}
                  deleteMovie={(e, id) => deleteMovie(e, id)}
                ></MovieCard>
              </Link>
            </ListItem>
          ))}
        </CardList>
      ) : (
        <h2>List is empty</h2>
      )}
    </>
  );
};

export default MoviesPage;
