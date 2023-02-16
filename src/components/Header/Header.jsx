import PropTypes from 'prop-types';
//#Components
import SearchInput from '../SearchInput';
import ThemeSwitcher from '../ThemeSwitcher';
import UserAvatar from '../UserAvatar';
//#Services
import useLocalStorage from '../../hooks/useLocalStorage';
//#Styles
import { Wrap } from './Header.styled';

const Header = ({ onChange, theme, changeTheme }) => {
  // eslint-disable-next-line no-unused-vars
  const [userName, setUserName] = useLocalStorage('userName');

  return (
    <Wrap>
      <SearchInput onChange={onChange} />
      <ThemeSwitcher theme={theme} changeTheme={changeTheme} />
      <UserAvatar name={userName} />
    </Wrap>
  );
};

Header.propTypes = {
  onChange: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

export default Header;
