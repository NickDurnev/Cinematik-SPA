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
  const [, setUserID] = useLocalStorage('userID', null);
  const navigate = useNavigate();
  const { userID } = useParams();

  const { data, isError, isSuccess, error } = useQuery(
    ['getUser', { userID }],
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
        navigate(`/`);
      }, 2000);
    }
    if (isError) {
      toast.error(`Error: ${error.response.data.message}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isError, isSuccess]);

  return (
    <motion.div
      initial={'closed'}
      animate={'open'}
      exit={'exit'}
      variants={pageVariants}
    >
      <Background>
        <Notify>Welcome, {userName} Enjoy your cinema journey</Notify>
      </Background>
    </motion.div>
  );
};

export default WelcomePage;
