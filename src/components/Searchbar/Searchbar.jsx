import PropTypes from 'prop-types';
import { useState } from 'react';
import { SearchForm, Bar } from './Searchbar.styled';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({ onChange, isLoading }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onChange(inputValue);
  };

  const handleChange = e => {
    const input = e.target.value.trim();
    setInputValue(input);
  };

  return (
    <Bar>
      <SearchForm onSubmit={handleSubmit}>
        <button type="submit">
          <SearchIcon />
          <span>Search</span>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={inputValue}
          onChange={handleChange}
          disabled={isLoading}
        />
      </SearchForm>
    </Bar>
  );
};

Searchbar.propTypes = {
  onChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default Searchbar;
