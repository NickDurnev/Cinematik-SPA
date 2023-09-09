import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import Wrap from './Notify.styled';
import { itemVariants } from 'helpers/animations';

interface IProps {
  children: ReactNode;
  delay?: number;
}

const Notify = ({ children, delay = 0 }: IProps) => (
  <Wrap initial={'closed'} animate={'open'} variants={itemVariants(delay)}>
    {children}
  </Wrap>
);

Notify.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.string,
};

export default Notify;
