import PropTypes from 'prop-types';
//#Components
import SearchInput from '../SearchInput';
import ThemeSwitcher from '../ThemeSwitcher';
import UserMenu from '../UserMenu';
//#Services
import useLocalStorage from '../../hooks/useLocalStorage';
//#Styles
import { Wrap } from './Header.styled';

const Header = ({ onChange, theme, setTheme }) => {
  // eslint-disable-next-line no-unused-vars
  const [userName, setUserName] = useLocalStorage('userName');

  return (
    <Wrap>
      <SearchInput onChange={onChange} />
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <UserMenu name={userName} />
    </Wrap>
  );
};

Header.propTypes = {
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Header;
