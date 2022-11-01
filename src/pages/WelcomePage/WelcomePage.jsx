import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { fetchUser } from '../../services/userAPI';
import { pageVariants } from 'animations';
import Notify from 'components/Notify';
import { Background } from './WelcomePgae.styled';

const WelcomePage = ({ setIsWelcomePage }) => {
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();
  const { data, isError, isSuccess, error } = useQuery('getUser', fetchUser, {
    refetchInterval: 5000,
  });

  useEffect(() => {
    if (isSuccess) {
      console.log('DATA:', data);
      setUserName(data.name);
      setTimeout(() => {
        setIsWelcomePage(false);
        navigate(`/home`);
      }, 2000);
    }
  }, [data, isSuccess]);

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }

  return (
    <motion.div
      initial={'closed'}
      animate={'open'}
      exit={'exit'}
      variants={pageVariants}
    >
      <Background>
        <Notify>Hi, {userName}</Notify>
      </Background>
    </motion.div>
  );
};

WelcomePage.propTypes = {
  setIsWelcomePage: PropTypes.func.isRequired,
};

export default WelcomePage;
