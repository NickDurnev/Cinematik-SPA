import PropTypes from 'prop-types';
import { useState } from 'react';
import { SearchForm, Bar } from './Searchbar.styled';
import { FiSearch } from 'react-icons/fi';

const Searchbar = ({ onSubmit, onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit();
  };

  const handleChange = e => {
    setInputValue(e.target.value);
    onChange(inputValue);
  };

  return (
    <Bar>
      <SearchForm onSubmit={handleSubmit}>
        <button type="submit">
          <FiSearch size="24"></FiSearch>
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
};

export default Searchbar;
