import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { fetchMoviesGenres } from 'services/moviesApi';
import TrendingMovies from 'components/TrendingMovies';
import UpComingMovies from 'components/UpComingMovies';
import TopRatedMovies from 'components/TopRatedMovies';
import { InputWrap } from './HomePage.styled';
import { pageVariants } from 'animations';

const HomePage = ({ setGenres, onChange }) => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
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
    console.log('DATA:', data);
    setGenres([...data]);
  }

  const handleSubmit = e => {
    e.preventDefault();
    onChange(inputValue);
    navigate(`/movies?query=${inputValue}`);
  };

  const handleChange = e => {
    const input = e.target.value.trim();
    setInputValue(input);
  };

  return (
    <motion.div
      initial={'closed'}
      animate={'open'}
      exit={'exit'}
      variants={pageVariants}
    >
      <InputWrap
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        onSubmit={handleSubmit}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleChange}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </InputWrap>
      <TrendingMovies />
      <UpComingMovies />
      <TopRatedMovies />
    </motion.div>
  );
};

export default HomePage;
