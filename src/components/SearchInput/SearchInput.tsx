import { useState, FC, ChangeEvent,FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
//#MUI
import { InputBase, IconButton } from '@mui/material';
import { ReactComponent as SearchIcon} from 'icons/SearchIcon.svg';
//#Styles
import InputWrap from './SearchInput.styled';

interface IProps {
  onChange: (value: string) => void;
  isLoading?: boolean;
  width?: string;
}

const SearchInput: FC<IProps> = ({ onChange, isLoading, width = '250px' }) => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!inputValue) {
      return;
    }
    onChange(inputValue);
    navigate(`/movies?query=${inputValue}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <SearchIcon />
        </svg>
      </IconButton>
    </InputWrap>
  );
};

export default SearchInput;
