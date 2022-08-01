import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { fetchTopRatedMovies } from 'services/moviesApi';
import Loader from '../Loaders/Loader';
import Swiper from '../Swiper';
import { Wrap, Title } from './TopRatedMovies.styled';

const UpComingMovies = () => {
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

  if (isSuccess && data) {
    return (
      <>
        <Wrap>
          <Title to="/movies/top_rated">Top rated movies</Title>
          <Swiper movies={data.results} />
        </Wrap>
      </>
    );
  }
};

export default UpComingMovies;
