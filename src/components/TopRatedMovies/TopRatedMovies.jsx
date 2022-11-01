import { useQuery } from 'react-query';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchTopRatedMovies } from 'services/moviesIDBService';
import Loader from '../Loaders/Loader';
import CardList from 'components/CardList';
import MovieCard from 'components/MovieCard';
import { Wrap, Title } from './TopRatedMovies.styled';

const UpComingMovies = () => {
  const location = useLocation();
  const { data, isError, isLoading, isSuccess, error } = useQuery(
    'topRatedMoviesSwiper',
    fetchTopRatedMovies,
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

  console.log(location);

  if (isSuccess) {
    return (
      <>
        <Wrap>
          <Title to="/movies/top_rated">Top rated movies</Title>
          <CardList>
            {data.results.map((movie, index) => {
              if (index > 4) {
                // eslint-disable-next-line array-callback-return
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
