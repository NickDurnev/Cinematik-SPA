import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
//#Services
import { fetchTrendmovies } from 'services/moviesIDBService';
//#Componets
import Loader from '../Loaders/Loader';
import Swiper from '../Swiper';
//#Styles
import { Title, Container } from './TrendingMovies.styled';

const TrendingMovies = () => {
  const { data, isError, isLoading, isSuccess, error } = useQuery(
    'trendingMoviesSwiper',
    fetchTrendmovies,
    {
      staleTime: 60000,
      cacheTime: 60000,
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    toast.error(`Error: ${(error as Error).message}`);
    return null;
  }

  if (isSuccess && data) {
    return (
      <Container>
        <Title>Trending movies</Title>
        <Swiper movies={data} onAutoPlay />
      </Container>
    );
  }

  return null;
};

export default TrendingMovies;
