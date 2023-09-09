import { FaUserCircle } from 'react-icons/fa';
import { IReview } from 'services/interfaces';
import { Wrap, AvatarWrap, InfoWrap, Text } from './ReviewCard.styled';

const ReviewCard = ({ data }: { data: IReview }) => {
  const { id, formattedPath, avatar_path, author, content, created_at } = data;
  return (
    <Wrap
      key={id}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <AvatarWrap>
        {avatar_path && formattedPath?.includes('www.gravatar.com') ? (
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

export default ReviewCard;
