import PropTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import { Wrap, AvatarWrap, InfoWrap, Text } from './ReviewCard.styled';

const ReviewCard = ({ data }) => {
  const { id, formattedPath, avatar_path, author, content, created_at } = data;
  return (
    <Wrap
      key={id}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <AvatarWrap>
        {avatar_path && formattedPath.includes('www.gravatar.com') ? (
          <img src={formattedPath} alt="User avatar" />
        ) : (
          <FaUserCircle size="90"></FaUserCircle>
        )}
      </AvatarWrap>
      <InfoWrap>
        <Text>{content}</Text>
        <div>
          <p>{author}</p>
          <p>{created_at.substr(0, 10)}</p>
        </div>
      </InfoWrap>
    </Wrap>
  );
};

ReviewCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    formattedPath: PropTypes.oneOfType([null, PropTypes.string]),
    avatar_path: PropTypes.oneOfType([null, PropTypes.string]),
  }).isRequired,
};

export default ReviewCard;
