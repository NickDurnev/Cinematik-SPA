import { useQuery } from 'react-query';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchUpcomingMovies } from 'services/moviesApi';
import Loader from '../Loaders/Loader';
import CardList from 'components/CardList';
import MovieCard from 'components/MovieCard';
import { Wrap, Title } from './UpComingMovies.styled';

const UpComingMovies = () => {
  const location = useLocation();
  const { data, isError, isLoading, isSuccess, error } = useQuery(
    'upComingMoviesSwiper',
    fetchUpcomingMovies,
    {
      staleTime: 60000,
      cacheTime: 60000,
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }

  console.log(data.results);

  if (isSuccess) {
    return (
      <>
        <Wrap>
          <Title to="/movies/upcoming">Upcoming movies</Title>
          <CardList>
            {data.results.map((movie, index) => {
              if (index > 4) {
                return;
              }
              return (
                <li key={movie.id}>
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
                </li>
              );
            })}
          </CardList>
        </Wrap>
      </>
    );
  }
};

export default UpComingMovies;
