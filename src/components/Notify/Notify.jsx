import PropTypes from 'prop-types';
import Wrap from './Notify.styled';
import { textVariants } from 'helpers/animations';

const Notify = ({ children, delay = 0 }) => (
  <Wrap initial={'closed'} animate={'open'} variants={textVariants(delay)}>
    {children}
  </Wrap>
);

Notify.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.string,
};

export default Notify;
