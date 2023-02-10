import PropTypes from 'prop-types';
import { BsSun, BsMoonStars } from 'react-icons/bs';
import { ThemeToggler } from './ThemeSwitcher.styled';

const ThemeSwitcher = ({ theme, changeTheme }) => {
  const icon =
    theme.name === 'dark' ? (
      <BsMoonStars size={20} color={'#fff'} />
    ) : (
      <BsSun size={20} color={'#fff'} />
    );

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
