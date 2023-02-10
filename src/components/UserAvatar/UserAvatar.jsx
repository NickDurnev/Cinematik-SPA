import { PropTypes } from 'prop-types';
import stringAvatar from 'helpers/avatarFormatter';
import Wrap from './UserAvatar.styled';

const UserAvatar = ({ name }) => {
  return <Wrap {...stringAvatar(`${name}`)} />;
};

UserAvatar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserAvatar;
