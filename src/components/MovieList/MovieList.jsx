import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { List } from './MovieList.styled';

const MovieList = ({ children }) => (
  <List>
    <AnimatePresence>{children}</AnimatePresence>
  </List>
);

MovieList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MovieList;
