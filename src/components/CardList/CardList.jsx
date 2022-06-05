import PropTypes from 'prop-types';
import { List } from './CardList.styled';

const CardList = ({ children }) => <List>{children}</List>;

CardList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardList;
