import { ReactComponent as HomeIcon } from '../../images/icons/Home.svg';
import { ReactComponent as MovieIcon } from '../../images/icons/Movie.svg';
import { ReactComponent as TelIcon } from '../../images/icons/Telev.svg';
import { ReactComponent as StarIcon } from '../../images/icons/Star.svg';

import { Container, NavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <Container>
      <NavLink whileTap={{ scale: 1.3 }} to="/">
        <HomeIcon />
      </NavLink>
      <NavLink whileTap={{ scale: 1.3 }} to="/movies">
        <MovieIcon />
      </NavLink>
      <NavLink whileTap={{ scale: 1.3 }} to="/favorites">
        <StarIcon />
      </NavLink>
      <NavLink whileTap={{ scale: 1.3 }} to="/watched">
        <TelIcon />
      </NavLink>
    </Container>
  );
};

export default Navigation;
