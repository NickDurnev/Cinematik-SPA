import { useQuery } from 'react-query';
import { useParams, Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ThreeDots from 'components/Loaders/Loader';
import { movieCast } from 'services/moviesApi';
import CastCard from 'components/CastCard';
import Notify from 'components/Notify';
import CastList from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const { pathname } = location;

  const { data, error, isLoading, isError, isSuccess } = useQuery(
    ['movieCast', { movieId }],
    movieCast,
    { staleTime: 60000, cacheTime: 60000 }
  );

  if (isLoading) {
    return <ThreeDots />;
  }

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }

  if (isSuccess) {
    console.log(data.cast);
    if (data.cast.length === 0) {
      return (
        <Notify>
          <h2>We don't have info about cast for this movie</h2>
          <SentimentVeryDissatisfiedIcon sx={{ fontSize: 70, mt: 1 }} />
        </Notify>
      );
    }
    return (
      <CastList>
        {data.cast.map(actor => {
          const { id, cast_id } = actor;
          return (
            <li key={cast_id}>
              <Link
                to={`${pathname}/actor/${id}`}
                state={{
                  from: {
                    location,
                    label: 'Go back to movie',
                  },
                }}
              >
                <CastCard data={actor} />
              </Link>
            </li>
          );
        })}
      </CastList>
    );
  }
};

export default Cast;
