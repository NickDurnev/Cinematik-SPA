import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
//#Services
import { fetchUser } from '../../services/userAPI';
import useLocalStorage from '../../hooks/useLocalStorage';
//#LocalStyles
import { Background } from './WelcomePage.styled';
import { pageVariants } from 'helpers/animations';
//#Componets
import Notify from 'components/Notify';

const WelcomePage = () => {
  const [userName, setUserName] = useState('User');
  const [_, setUserID] = useLocalStorage('userID', null);
  const { dbUserID } = useParams();

  const { data, isError, isSuccess, error } = useQuery(
    ['getUser', { dbUserID }],
    fetchUser,
    {
      refetchInterval: 10000,
    }
  );

  useEffect(() => {
    if (isSuccess) {
      setUserName(data.data.user.name);
      setUserID(data.data.user._id);
      setTimeout(() => {
        window.location.reload(false);
      }, 4000);
    }
    if (isError) {
      toast.error(`Error: ${error.response.data.message}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        </Background>
      </motion.div>
    </>
  );
};

export default WelcomePage;
