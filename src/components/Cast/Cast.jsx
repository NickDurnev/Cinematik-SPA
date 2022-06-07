import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ThreeDots from 'components/Loaders/Loader';
import { movieCast } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();

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
    return (
      <ul>
        {data.cast.map(actor => (
          <p key={actor.id}>{actor.name}</p>
        ))}
      </ul>
    );
  }
};

export default Cast;
