import PropTypes from 'prop-types';
import Wrap from './Container.styled';

const Container = ({ children, userID }) => (
  <Wrap userID={userID}>{children}</Wrap>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
