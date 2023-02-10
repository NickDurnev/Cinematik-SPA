import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
//#Services
import { fetchMoviesGenres } from 'services/moviesIDBService';
import useLocalStorage from '../../hooks/useLocalStorage';
//#Components
import TrendingMovies from 'components/TrendingMovies';
import TopCategoryMovies from 'components/TopCategoryMovies';
import SearchInput from 'components/SearchInput';
import ThemeSwitcher from 'components/ThemeSwitcher';
import UserAvatar from 'components/UserAvatar';
//#Styles
import { pageVariants } from 'helpers/animations';
import { Wrap } from './HomePage.styled';

const HomePage = ({ setGenres, onChange, theme, changeTheme }) => {
  // eslint-disable-next-line no-unused-vars
  const [userName, setUserName] = useLocalStorage('userName');
  console.log('userName', userName);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data, isError, isSuccess, error } = useQuery(
    'moviesGenres',
    fetchMoviesGenres,
    {
      staleTime: 864 * Math.pow(10, 5),
      cacheTime: 864 * Math.pow(10, 5),
    }
  );

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }

  if (isSuccess) {
    setGenres([...data]);
  }

  return (
    <motion.div
      initial={'closed'}
      animate={'open'}
      exit={'exit'}
      variants={pageVariants}
    >
      <Wrap>
        <SearchInput onChange={onChange} />
        <ThemeSwitcher theme={theme} changeTheme={changeTheme} />
        <UserAvatar name={userName} />
      </Wrap>
      <TrendingMovies />
      <TopCategoryMovies category={'top_rated'} title={'Top rated movies'} />
      <TopCategoryMovies
        category={'upcoming'}
        title={'Upcoming rated movies'}
      />
    </motion.div>
  );
};

HomePage.propTypes = {
  setGenres: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

export default HomePage;
