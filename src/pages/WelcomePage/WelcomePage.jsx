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
  const [name, setName] = useState('User');
  // eslint-disable-next-line no-unused-vars
  const [userID, setUserID] = useLocalStorage('userID', null);
  // eslint-disable-next-line no-unused-vars
  const [userName, setUserName] = useLocalStorage('userName', null);

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
      setName(data.data.user.name);
      setUserID(data.data.user._id);
      setUserName(data.data.user.name);
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
              <h2>Welcome, {name}</h2>
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
