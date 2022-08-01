import PropTypes from 'prop-types';
import { useState } from 'react';
import { SearchForm, Bar } from './Searchbar.styled';
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({ onSubmit, onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit();
  };

  const handleChange = e => {
    const input = e.target.value.trim();
    setInputValue(input);
    onChange(input);
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
        />
      </SearchForm>
    </Bar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Searchbar;
