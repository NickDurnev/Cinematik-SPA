import PropTypes from 'prop-types';
import { CardWrap, InfoWrap, RoleName, ActorName } from './CastCard.styled';
import DefaultActorImage from '../StandartImages/DefaultActorImage';

const CastCard = ({ data }) => {
  const { character, name, profile_path } = data;
  return (
    <CardWrap
      profile_path={profile_path}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      {profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w300${profile_path}`}
          alt={name}
        />
      ) : (
        <DefaultActorImage />
      )}
      <InfoWrap>
        <ActorName>{name}</ActorName>
        <RoleName>{character}</RoleName>
      </InfoWrap>
    </CardWrap>
  );
};

CastCard.propTypes = {
  data: PropTypes.shape({
    character: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }),
};

export default CastCard;
