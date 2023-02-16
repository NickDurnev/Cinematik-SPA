import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import ThreeDots from 'components/loaders/Loader';
import { actorDetails } from 'services/moviesIDBService';
import ActorInfo from 'components/ActorInfo';
import { PageWrap } from './ActorDetailsPage.styled';
import { pageVariants } from 'helpers/animations';

const ActorDetailsPage = () => {
  const { actorId } = useParams();
  let navigate = useNavigate();

  const { data, error, isLoading, isError, isSuccess } = useQuery(
    ['movieDetails', { actorId }],
    actorDetails,
    { staleTime: 60000, cacheTime: 60000 }
  );

  useEffect(() => {
    if (data === 404) {
      const prevActorId = localStorage.getItem('actorId');
      const prevMovieId = localStorage.getItem('movieId');
      navigate(`/movies/${prevMovieId}/cast/actor/${prevActorId}`);
    }
  }, [data, navigate]);

  if (isLoading) {
    return <ThreeDots />;
  }

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }

  if (isSuccess && data !== 404) {
    localStorage.setItem('actorId', JSON.stringify(+actorId));
    return (
      <motion.div
        initial={'closed'}
        animate={'open'}
        exit={'exit'}
        variants={pageVariants}
      >
        <PageWrap>
          <ActorInfo data={data} />
        </PageWrap>
      </motion.div>
    );
  }
};

export default ActorDetailsPage;
