import PropTypes from 'prop-types';
import {ReactNode} from 'react';
import { AnimatePresence } from 'framer-motion';
import { List } from './MovieList.styled';

interface IProps {
  children: ReactNode;
}

const MovieList = ({ children } : IProps) => (
  <List>
    <AnimatePresence>{children}</AnimatePresence>
  </List>
);

MovieList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MovieList;
