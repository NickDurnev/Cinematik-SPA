import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
//#Services
import { actorDetails } from 'services/moviesIDBService';
import { pageVariants } from 'helpers/animations';
import { ILocation } from 'services/interfaces';
//#Components
import ThreeDots from 'components/Loaders/Loader';
import GoBackButton from 'components/GoBackButton';
import ActorInfo from 'components/ActorInfo';

const ActorDetailsPage = () => {
  const [prevLocationState, setPrevLocationState] = useState<null | ILocation>(null);

  const { actorID } = useParams();
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      setPrevLocationState(location.state as ILocation);
    } else {
      setPrevLocationState(null); // Provide a default value of null
    }
  }, [location.state]);

  const { data, error, isLoading, isError, isSuccess } = useQuery(
    ['movieDetails', { actorID }],
    actorDetails,
    { staleTime: 60000, cacheTime: 60000 }
  );

  useEffect(() => {
    if (data === 404) {
      const prevactorID = localStorage.getItem('actorID');
      const prevMovieID = localStorage.getItem('movieId');
      navigate(`/movies/${prevMovieID}/cast/actor/${prevactorID}`);
    }
  }, [data, navigate]);

  if (isLoading) {
    return <ThreeDots />;
  }

  if (isError) {
    return toast.error(`Error: ${(error as Error).message}`);
  }

  if (isSuccess && data !== 404) {
    localStorage.setItem('actorID', JSON.stringify(+actorID!));
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
        {typeof data === 'object' && <ActorInfo data={data} />
        }
      </motion.div>
    );
  }
};

export default ActorDetailsPage;
