import { useQuery } from 'react-query';
import { useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import ThreeDots from 'components/Loaders/Loader';
import { fetchSimilarMovies } from 'services/moviesApi';
import Swiper from 'components/Swiper';

const SimilarMovies = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const { data, error, isLoading, isError, isSuccess } = useQuery(
    ['similarMovies', { movieId }],
    fetchSimilarMovies,
    { staleTime: 60000, cacheTime: 60000 }
  );

  if (isLoading) {
    return <ThreeDots />;
  }

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }

  console.log(data);

  const { results } = data;

  if (isSuccess && data) {
    if (results.length === 0) {
      return <h2>We don't have similar movies for this movie</h2>;
    }
    return <Swiper movies={results} location={location} onAutoPlay />;
  }
};

export default SimilarMovies;
