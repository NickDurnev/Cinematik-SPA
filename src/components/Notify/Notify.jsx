import PropTypes from 'prop-types';
import Wrap from './Notify.styled';
import { textVariants } from 'animations';

const Notify = ({ children }) => (
  <Wrap initial={'closed'} animate={'open'} variants={textVariants}>
    {children}
  </Wrap>
);

Notify.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.string,
};

export default Notify;
