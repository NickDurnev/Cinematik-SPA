import { useQuery } from 'react-query';
import { useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
//#Services
import { fetchSimilarMovies } from 'services/moviesIDBService';
//#Components
import ThreeDots from 'components/loaders/Loader';
import Notify from 'components/Notify';
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
      return (
        <Notify>
          <h2>We don't have similar movies for this movie</h2>
          <SentimentVeryDissatisfiedIcon sx={{ fontSize: 70, mt: 1 }} />
        </Notify>
      );
    }

    return <Swiper movies={results} location={location} onAutoPlay />;
  }
};

export default SimilarMovies;
