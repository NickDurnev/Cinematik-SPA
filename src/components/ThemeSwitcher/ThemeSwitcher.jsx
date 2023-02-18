import PropTypes from 'prop-types';
import { BsSun, BsMoonStars } from 'react-icons/bs';
import { ThemeToggler } from './ThemeSwitcher.styled';

const ThemeSwitcher = ({ theme, setTheme }) => {
  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <ThemeToggler whileTap={{ scale: 1.3 }} onClick={() => changeTheme()}>
      {theme === 'dark' ? <BsMoonStars size={20} /> : <BsSun size={20} />}
    </ThemeToggler>
  );
};

ThemeSwitcher.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default ThemeSwitcher;
