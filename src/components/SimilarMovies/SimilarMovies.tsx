import { useQuery } from 'react-query';
import { useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
//#Services
import { IMovie } from 'services/interfaces';
import { fetchSimilarMovies } from 'services/moviesIDBService';
//#Components
import ThreeDots from 'components/Loaders/Loader';
import Notify from 'components/Notify';
import Swiper from 'components/Swiper';

const SimilarMovies = () => {
  const { movieID } = useParams();
  const location = useLocation();

  const { data, error, isLoading, isError, isSuccess } = useQuery(
    ['similarMovies', { movieID }],
    fetchSimilarMovies,
    { staleTime: 60000, cacheTime: 60000 }
  );

  if (isLoading) {
    return <ThreeDots />;
  }

  if (isError) {
    return toast.error(`Error: ${(error as Error).message}`);
  }

  const { results } = data as { results: IMovie[] };

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
