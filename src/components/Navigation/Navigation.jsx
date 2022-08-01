import React from 'react';
import { ReactComponent as HomeIcon } from '../../images/icons/Home.svg';
import { ReactComponent as MovieIcon } from '../../images/icons/Movie.svg';
// import { ReactComponent as TelIcon } from '../../images/icons/Telev.svg';
// import { ReactComponent as StarIcon } from '../../images/icons/Star.svg';

import { NavLink } from './Navigation.styled';

const Navigation = () => (
  <nav>
    <NavLink to="/">
      <HomeIcon />
    </NavLink>
    <NavLink to="/movies">
      <MovieIcon />
    </NavLink>
  </nav>
);

export default Navigation;
