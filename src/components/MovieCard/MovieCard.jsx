import PropTypes from 'prop-types';
//#MUI
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
//#Services
import { getGenreName } from 'services/getGenre';
//#Styles
import { Container, Card, InfoWrap, Genre } from './MovieCard.styled';
import imageNotFound from '../../images/Error 404 Wallpaper.jpg';

const MovieCard = ({ movie }) => {
  const { poster_path, title, vote_average, genre_ids } = movie;
  let genreNames = null;
  if (genre_ids) {
    genreNames = getGenreName(genre_ids);
  }
  return (
    <Card>
      <Container>
        {genreNames && <Genre>{genreNames}</Genre>}
        <img
          src={
            poster_path !== null
              ? `https://image.tmdb.org/t/p/w400${poster_path}`
              : imageNotFound
          }
          alt={title}
        />
        <InfoWrap>
          <p>{title}</p>
          {vote_average > 0 && (
            <Rating
              name="read-only"
              value={vote_average.toFixed(1) / 2}
              readOnly
              precision={0.5}
              icon={
                <StarIcon
                  fontSize="inherit"
                  style={{
                    width: '18px',
                    height: '18px',
                    stroke: '#FFDF37',
                  }}
                />
              }
              emptyIcon={
                <StarIcon
                  fontSize="inherit"
                  style={{
                    width: '18px',
                    height: '18px',
                    stroke: '#FFDF37',
                  }}
                />
              }
            />
          )}
        </InfoWrap>
      </Container>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
  }),
};

export default MovieCard;
