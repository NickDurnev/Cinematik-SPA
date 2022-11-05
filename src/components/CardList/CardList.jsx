import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { List } from './CardList.styled';

const CardList = ({ children }) => (
  <List>
    <AnimatePresence>{children}</AnimatePresence>
  </List>
);

CardList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardList;
