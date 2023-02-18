import PropTypes from 'prop-types';
import { Wrap } from './Frame.styled';

const Frame = ({ youtubeURL, movieTrailer }) => {
  return (
    <Wrap
      src={`${youtubeURL}${movieTrailer}?autoplay=0&mute=0&controls=1`}
      title="video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

Frame.propTypes = {
  youtubeURL: PropTypes.string.isRequired,
  movieTrailer: PropTypes.string.isRequired,
};

export default Frame;
