import PropTypes from 'prop-types';
import Navigation from 'components/Navigation';
import ThemeSwitcher from '../ThemeSwitcher';
import { StickyWrap, Header } from './Appbar.styled';

const Appbar = ({ theme, changeTheme }) => (
  <Header>
    <StickyWrap>
      <ThemeSwitcher theme={theme} changeTheme={changeTheme} />
      <Navigation />
    </StickyWrap>
  </Header>
);

Appbar.propTypes = {
  theme: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

export default Appbar;
