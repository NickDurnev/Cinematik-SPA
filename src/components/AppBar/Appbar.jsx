import Navigation from 'components/Navigation';
import ThemeSwitcher from '../ThemeSwitcher';
import Header from './Appbar.styled';

const Appbar = ({ theme, changeTheme }) => (
  <Header>
    <Navigation />
    <ThemeSwitcher theme={theme} changeTheme={changeTheme} />
  </Header>
);

export default Appbar;
