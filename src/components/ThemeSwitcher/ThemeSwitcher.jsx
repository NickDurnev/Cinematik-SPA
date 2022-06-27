import PropTypes from 'prop-types';
import { BsSun, BsMoonStars } from 'react-icons/bs';
import { ThemeToggler } from './ThemeSwitcher.styled';

const ThemeSwitcher = ({ theme, changeTheme }) => {
  const icon =
    theme.name === 'light' ? <BsSun size={40} /> : <BsMoonStars size={40} />;

  return (
    <>
      <ThemeToggler onClick={() => changeTheme()}>{icon}</ThemeToggler>
    </>
  );
};

ThemeSwitcher.propTypes = {
  theme: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  changeTheme: PropTypes.func.isRequired,
};

export default ThemeSwitcher;
