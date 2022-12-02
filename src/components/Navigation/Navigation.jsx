import { ReactComponent as HomeIcon } from '../../images/icons/Home.svg';
import { ReactComponent as MovieIcon } from '../../images/icons/Movie.svg';
import { ReactComponent as TelIcon } from '../../images/icons/Telev.svg';
import { ReactComponent as StarIcon } from '../../images/icons/Star.svg';

import { NavLink } from './Navigation.styled';

const Navigation = ({ handleVerifyToggle }) => {
  const handleClick = () => {
    handleVerifyToggle(true);
  };
  return (
    <nav>
      <NavLink whileTap={{ scale: 1.3 }} to="/">
        <HomeIcon />
      </NavLink>
      <NavLink whileTap={{ scale: 1.3 }} to="/movies">
        <MovieIcon />
      </NavLink>
      <NavLink whileTap={{ scale: 1.3 }} to="/favorites">
        <StarIcon onClick={() => handleClick()} />
      </NavLink>
      <NavLink whileTap={{ scale: 1.3 }} to="/watched">
        <TelIcon onClick={() => handleClick()} />
      </NavLink>
    </nav>
  );
};

export default Navigation;
