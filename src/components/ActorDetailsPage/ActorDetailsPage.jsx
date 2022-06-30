import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import ThreeDots from 'components/Loaders/Loader';
import { actorDetails } from 'services/api';
import ActorInfo from 'components/ActorInfo';

const ActorDetailsPage = () => {
  const { actorId } = useParams();

  const { data, error, isLoading, isError, isSuccess } = useQuery(
    ['movieDetails', { actorId }],
    actorDetails,
    { staleTime: 60000, cacheTime: 60000 }
  );

  if (isLoading) {
    return <ThreeDots />;
  }

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }
  console.log(data);

  if (isSuccess) {
    return (
      <>
        <ActorInfo data={data} />
      </>
    );
  }
};

export default ActorDetailsPage;
