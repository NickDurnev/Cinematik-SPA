import PropTypes from 'prop-types';
import Navigation from 'components/Navigation';
import ThemeSwitcher from '../ThemeSwitcher';
import Header from './Appbar.styled';

const Appbar = ({ theme, changeTheme }) => (
  <Header>
    <Navigation />
    <ThemeSwitcher theme={theme} changeTheme={changeTheme} />
  </Header>
);

Appbar.propTypes = {
  theme: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

export default Appbar;
