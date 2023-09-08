//#Components
import SearchInput from '../SearchInput';
import ThemeSwitcher from '../ThemeSwitcher';
import UserMenu from '../UserMenu';
//#Services
import useLocalStorage from '../../hooks/useLocalStorage';
//#Styles
import { Wrap } from './Header.styled';

interface IProps {
  onChange: (value: string) => void;
  theme: string;
  setTheme: (theme: string) => void;
}

const Header = ({ onChange, theme, setTheme } : IProps) => {
  // eslint-disable-next-line no-unused-vars
  const [userName] = useLocalStorage('userName');

  return (
    <Wrap>
      <SearchInput onChange={onChange} />
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <UserMenu name={userName} />
    </Wrap>
  );
};

export default Header;
