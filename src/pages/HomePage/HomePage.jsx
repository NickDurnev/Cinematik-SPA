import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
//#Services
import { fetchMoviesGenres } from 'services/moviesIDBService';
//#Components
import TrendingMovies from 'components/TrendingMovies';
import TopCategoryMovies from 'components/TopCategoryMovies';
//#Styles
import { pageVariants } from 'helpers/animations';

const HomePage = ({ setGenres }) => {
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
};

export default HomePage;
