import PropTypes from 'prop-types';
import { Card } from './MovieCard.styled';
import { BsFillStarFill } from 'react-icons/bs';

const MovieCard = ({ movie }) => {
  const { poster_path, original_title, vote_average } = movie;

  return (
    <Card>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
      ></img>
      <p>{original_title}</p>
      <div>
        <BsFillStarFill size="20px" color="gold" />
        <p>{vote_average.toFixed(1)}</p>
      </div>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }),
};

export default MovieCard;
