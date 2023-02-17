import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
//#Services
import { actorDetails } from 'services/moviesIDBService';
import { pageVariants } from 'helpers/animations';
//#Components
import ThreeDots from 'components/loaders/Loader';
import GoBackButton from 'components/GoBackButton';
import ActorInfo from 'components/ActorInfo';

const ActorDetailsPage = () => {
  const [prevLocationState, setPrevLocationState] = useState(null);

  const { actorId } = useParams();
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    setPrevLocationState(location.state);
  }, [location.state]);

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
        <GoBackButton
          path={
            prevLocationState?.from?.location ??
            prevLocationState?.from?.prevLocation ??
            '/'
          }
          state={{
            from: {
              location,
            },
          }}
        />
        <ActorInfo data={data} />
      </motion.div>
    );
  }
};

export default ActorDetailsPage;
