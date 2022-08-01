import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { fetchTrendmovies } from 'services/moviesApi';
import Loader from '../Loaders/Loader';
import Swiper from '../Swiper';
import { Wrap, Title } from './TrendingMovies.styled';

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
    return toast.error(`Ошибка: ${error.message}`);
  }

  console.log(data);

  if (isSuccess && data) {
    return (
      <>
        <Wrap>
          <Title>Trending movies</Title>
          <Swiper movies={data} onAutoPlay />
        </Wrap>
      </>
    );
  }
};

export default TrendingMovies;
