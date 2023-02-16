import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//#MUI
import { InputBase, IconButton } from '@mui/material';
import { ReactComponent as SearchIcon } from '../../images/icons/SearchIcon.svg';
//#Styles
import InputWrap from './SearchInput.styled';

const SearchInput = ({ onChange, isLoading, width = '250px' }) => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    onChange(inputValue);
    // if (isLoading) {
    navigate(`/movies?query=${inputValue}`);
    // }
  };

  const handleChange = e => {
    const input = e.target.value.trim();
    setInputValue(input);
  };

  return (
    <InputWrap component="form" onSubmit={handleSubmit} width={width}>
      <InputBase
        sx={{ flex: 1 }}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'earch' }}
        onChange={handleChange}
        disabled={isLoading}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </InputWrap>
  );
};

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  width: PropTypes.string,
};

export default SearchInput;
