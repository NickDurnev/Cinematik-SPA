import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../../images/icons/BackIcon.svg';
import Wrap from './GoBackButton.styled';

const GoBackButton = ({ path, state }) => (
  <Link to={path} state={{ state }}>
    <Wrap>
      <BackIcon />
    </Wrap>
  </Link>
);

GoBackButton.propTypes = {
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  state: PropTypes.shape({
    from: PropTypes.shape({
      location: PropTypes.object,
    }),
  }),
};

export default GoBackButton;
