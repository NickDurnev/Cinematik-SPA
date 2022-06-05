import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchTrendmovies } from 'services/api';
import MovieCard from 'components/MovieCard';
import CardList from 'components/CardList';
import ThreeDots from 'components/MovieCardSkeleton';

const HomePage = () => {
  const { data, isError, isLoading, isSuccess, error } = useQuery(
    'topMovies',
    fetchTrendmovies,
    {
      staleTime: 60000,
      cacheTime: 60000,
    }
  );

  if (isLoading) {
    return <ThreeDots />;
  }

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }

  if (isSuccess) {
    return (
      <CardList>
        {data.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <MovieCard movie={movie}></MovieCard>
            </Link>
          </li>
        ))}
      </CardList>
    );
  }
};

export default HomePage;
