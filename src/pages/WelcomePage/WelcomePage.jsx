import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { fetchUser } from '../../services/userAPI';
import useLocalStorage from '../../hooks/useLocalStorage';
import { pageVariants } from 'animations';
import Notify from 'components/Notify';
import { Background } from './WelcomePgae.styled';

const WelcomePage = () => {
  const [userName, setUserName] = useState('User');
  const [userId, setUserID] = useLocalStorage('userID', null);
  const navigate = useNavigate();
  const { dbUserID } = useParams();

  const { data, isError, isSuccess, error } = useQuery(
    ['getUser', { dbUserID }],
    fetchUser,
    {
      refetchInterval: 10000,
    }
  );

  useEffect(() => {
    if (userId) {
      navigate(`/`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isSuccess) {
      setUserName(data.data.user.name);
      setTimeout(() => {
        navigate(`/`);
      }, 4000);
      setUserID(data.data.user._id);
    }
    if (isError) {
      toast.error(`Error: ${error.response.data.message}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isError, isSuccess]);

  return (
    <>
      {!userId && (
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
      )}
    </>
  );
};

export default WelcomePage;
