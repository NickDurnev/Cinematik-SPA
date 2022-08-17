import PropTypes from 'prop-types';
import { BsSun, BsMoonStars } from 'react-icons/bs';
import { ThemeToggler } from './ThemeSwitcher.styled';

const ThemeSwitcher = ({ theme, changeTheme }) => {
  const icon =
    theme.name === 'light' ? <BsSun size={20} /> : <BsMoonStars size={20} />;

  return (
    <ThemeToggler whileTap={{ scale: 1.3 }} onClick={() => changeTheme()}>
      {icon}
    </ThemeToggler>
  );
};

ThemeSwitcher.propTypes = {
  theme: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  changeTheme: PropTypes.func.isRequired,
};

export default ThemeSwitcher;
