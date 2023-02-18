import PropTypes from 'prop-types';
//#MUI
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import { getGenreName } from 'services/getGenre';
import DefaultMovieImage from '../../components/DefaultImages/DefaultMovieImage';
import { Container, Card, InfoWrap, Genre } from './MovieCard.styled';

const MovieCard = ({ movie }) => {
  const { poster_path, title, vote_average, genre_ids } = movie;
  let genreNames = null;
  if (genre_ids) {
    genreNames = getGenreName(genre_ids);
  }
  return (
    <Card poster_path={poster_path}>
      <Container>
        {genreNames && <Genre>{genreNames}</Genre>}
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w400${poster_path}`}
            alt={title}
          />
        ) : (
          <DefaultMovieImage />
        )}
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
