import PropTypes from 'prop-types';
import { getGenreName } from 'services/getGenre';
import { Container, Card, InfoWrap, Rate, Genre } from './MovieCard.styled';
import imageNotFound from '../../images/Error 404 Wallpaper.jpg';

const MovieCard = ({ movie }) => {
  const { poster_path, title, vote_average, genre_ids } = movie;
  const name = getGenreName(genre_ids);
  return (
    <Card>
      <Container>
        <Genre>{name}</Genre>
        <img
          src={
            poster_path !== null
              ? `https://image.tmdb.org/t/p/w400${poster_path}`
              : imageNotFound
          }
          alt={title}
        />
        <InfoWrap>
          {vote_average > 0 && (
            <Rate
              name="read-only"
              value={vote_average.toFixed(1) / 2}
              readOnly
              precision={0.5}
            />
          )}
        </InfoWrap>
      </Container>
      <p>{title}</p>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
};

export default MovieCard;
