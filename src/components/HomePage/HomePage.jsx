import { useQuery } from 'react-query';
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
          <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
      </CardList>
    );
  }
};

export default HomePage;
