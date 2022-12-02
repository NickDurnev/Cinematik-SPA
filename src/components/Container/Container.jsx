import PropTypes from 'prop-types';
import Wrap from './Container.styled';

const Container = ({ children, isNone }) => (
  <Wrap isNone={isNone}>{children}</Wrap>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  isNone: PropTypes.bool.isRequired,
};

export default Container;
