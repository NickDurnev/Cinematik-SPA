import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { fetchMoviesGenres } from 'services/moviesApi';
import TrendingMovies from 'components/TrendingMovies';
import UpComingMovies from 'components/UpComingMovies';
import TopRatedMovies from 'components/TopRatedMovies';
import Container from './HomePage.styled';

const HomePage = ({ setGenres }) => {
  const { data, isError, isLoading, isSuccess, error } = useQuery(
    'moviesGenres',
    fetchMoviesGenres,
    {
      staleTime: 864 * Math.pow(10, 5),
      cacheTime: 864 * Math.pow(10, 5),
    }
  );

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }

  if (isSuccess) {
    console.log('DATA:', data);
    setGenres([...data]);
  }

  return (
    <Container>
      <TrendingMovies />
      <UpComingMovies />
      <TopRatedMovies />
    </Container>
  );
};

export default HomePage;
