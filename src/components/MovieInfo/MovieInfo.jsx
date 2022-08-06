import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import GoBackButton from '../GoBackButton/GoBackButton';
import {
  InfoWrap,
  Container,
  MainInfo,
  MovieGenresList,
  AddInfo,
  StyledLink,
  LinkWrap,
  Button,
} from './MovieInfo.styled';
import imageNotFound from '../../images/Error 404 Wallpaper.jpg';

const Movieinfo = ({ movieData, handleModalToggle }) => {
  const [prevLocationState, setPrevLocationState] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    setPrevLocationState(location.state);
  }, [location.state]);

  console.log(movieData);

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
    <div>
      <GoBackButton
        path={
          prevLocationState?.from?.location ??
          prevLocationState?.from?.prevLocation ??
          '/'
        }
        state={{
          from: {
            location,
          },
        }}
      />
      <Container>
        <div>
          <img
            src={
              poster_path !== null
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : imageNotFound
            }
            alt={title}
          />
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
                <Link
                  to={`/movies/by_genre=${id}`}
                  state={{
                    from: {
                      location,
                    },
                  }}
                >
                  {name}
                </Link>
              </li>
            ))}
          </MovieGenresList>
          <Button type="button" padding="10px" onClick={handleModalToggle}>
            Watch Trailer
          </Button>
          <AddInfo>
            <LinkWrap>
              <StyledLink
                to={`/movies/${movieId}/cast`}
                state={{
                  ...prevLocationState,
                }}
              >
                Cast
              </StyledLink>
              <StyledLink
                to={`/movies/${movieId}/reviews`}
                state={{
                  ...prevLocationState,
                }}
              >
                Reviews
              </StyledLink>
              <StyledLink
                to={`/movies/${movieId}/similar_movies`}
                state={{
                  ...prevLocationState,
                }}
              >
                Similar Movies
              </StyledLink>
            </LinkWrap>
          </AddInfo>
        </InfoWrap>
      </Container>
    </div>
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
  handleModalToggle: PropTypes.func.isRequired,
};

export default Movieinfo;
