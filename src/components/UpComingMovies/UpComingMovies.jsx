import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { fetchUpcomingMovies } from 'services/moviesApi';
import Loader from '../Loaders/Loader';
import Swiper from '../Swiper';
import { Wrap, Title } from './UpComingMovies.styled';

const UpComingMovies = () => {
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

  if (isSuccess) {
    return (
      <>
        <Wrap>
          <Title to="/movies/upcoming">Upcoming movies</Title>
          <Swiper movies={data.results} />
        </Wrap>
      </>
    );
  }
};

export default UpComingMovies;
