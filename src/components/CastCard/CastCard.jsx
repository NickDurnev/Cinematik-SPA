import PropTypes from 'prop-types';
import imageNotFound from '../../images/Error 404 Wallpaper.jpg';
import CardWrap from './CastCard.styled';

const CastCard = ({ data }) => {
  const { character, name, profile_path } = data;
  return (
    <CardWrap>
      <img
        src={
          profile_path !== null
            ? `https://image.tmdb.org/t/p/w200${profile_path}`
            : imageNotFound
        }
        alt={name}
      ></img>
      <p>{character}</p>
      <p>{name}</p>
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
