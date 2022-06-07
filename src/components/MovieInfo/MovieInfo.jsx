import PropTypes from 'prop-types';
import {
  InfoWrap,
  Container,
  MainInfo,
  MovieGenresList,
} from './MovieInfo.styled';

const Movieinfo = ({ movieData }) => {
  const {
    poster_path,
    release_date,
    title,
    tagline,
    runtime,
    overview,
    budget,
    genres,
  } = movieData;
  return (
    <Container>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        ></img>
      </div>
      <InfoWrap>
        <h1>{title}</h1>
        {tagline !== '' && <h2>"{tagline}"</h2>}
        <p>{overview}</p>
        <MainInfo>
          <li>
            <p>Release date:</p>
            <p>Runtime:</p>
            {budget !== 0 && <p>Budget:</p>}
          </li>
          <li>
            <p> {release_date}</p>
            <p>{runtime} minutes </p>
            {budget !== 0 && <p>{budget} $</p>}
          </li>
        </MainInfo>
        <MovieGenresList>
          {genres.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </MovieGenresList>
      </InfoWrap>
    </Container>
  );
};

Movieinfo.propTypes = {
  movieData: PropTypes.shape({
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    budget: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Movieinfo;
