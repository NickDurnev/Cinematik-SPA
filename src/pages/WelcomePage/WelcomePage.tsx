import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
//#Services
import { IError } from 'services/interfaces';
import { fetchUser } from '../../services/userAPI';
import useLocalStorage from '../../hooks/useLocalStorage';
//#LocalStyles
import { Background } from './WelcomePage.styled';
import { pageVariants } from 'helpers/animations';
//#Componets
import Notify from 'components/Notify';
import ThreeDots from 'components/Loaders/Loader';

const WelcomePage = () => {
  const [, setUserID] = useLocalStorage('userID', null);
  const [userName, setUserName] = useLocalStorage('userName', null);

  const { dbUserID } = useParams();

  const { data, isError, isSuccess, isLoading, error } = useQuery(
    ['getUser', { dbUserID }],
    fetchUser,
    {
      refetchInterval: 10000,
    }
  );

  useEffect(() => {
    if (isSuccess) {
      setUserID(data.data.user._id);
      setUserName(data.data.user.name);
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    }
    if (isError) {
      toast.error(`Error: ${(error as IError).response.data.message}`);
    }
  }, [data, isError, isSuccess]);

  return (
    <>
      <motion.div
        initial={'closed'}
        animate={'open'}
        exit={'exit'}
        variants={pageVariants}
      >
        <Background>
          {isLoading && <ThreeDots />}
          {isSuccess && userName && (
            <div>
              <Notify>
                <h2>Welcome, {userName}</h2>
              </Notify>
              <Notify delay={1}>
                <h2>You look lonely</h2>
              </Notify>
              <Notify delay={2}>
                <h2>Enjoy your cinema journey</h2>
              </Notify>
            </div>
          )}
        </Background>
      </motion.div>
    </>
  );
};

export default WelcomePage;
