import PropTypes from 'prop-types';
import Wrap from './Button.styled';

const Button = ({ children, padding = '5px' }) => (
  <Wrap type="button" padding={padding}>
    {children}
  </Wrap>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.string,
};

export default Button;
