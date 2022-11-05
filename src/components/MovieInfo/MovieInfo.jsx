import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import DoneIcon from '@mui/icons-material/Done';
import useLocalStorage from 'hooks/useLocalStorage';
import {
  addToFavoriteMovies,
  addToWatchedMovies,
  checkFavoriteById,
} from '../../services/moviesAPI';
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
  IconButton,
} from './MovieInfo.styled';
import { ReactComponent as TelIcon } from '../../images/icons/Telev.svg';
import { ReactComponent as StarIcon } from '../../images/icons/Star.svg';
import imageNotFound from '../../images/Error 404 Wallpaper.jpg';

const Movieinfo = ({ movieData, handleModalToggle }) => {
  const [prevLocationState, setPrevLocationState] = useState(null);
  const [addedToFavorites, setAddedToFavorites] = useState(null);
  const [enableFavoriteCheck, setEnableFavoriteCheck] = useState(true);
  const [userId] = useLocalStorage('userID');
  const location = useLocation();
  const { movieId } = useParams();
  const {
    id,
    poster_path,
    release_date,
    vote_average,
    title,
    tagline,
    runtime,
    overview,
    budget,
    genres,
  } = movieData;
  const dataToFetch = {
    userId,
    idbId: id,
    poster_path,
    title,
    vote_average,
    genres,
    release_date,
    tagline,
    runtime,
    overview,
    budget,
  };

  useEffect(() => {
    setPrevLocationState(location.state);
  }, [location.state]);

  const addToFavoriteQuery = useQuery(
    ['addFavoriteMovie', { userId, dataToFetch }],
    addToFavoriteMovies,
    { refetchOnWindowFocus: false, enabled: false }
  );

  const checkFavoriteByIDQuery = useQuery(
    ['checkFavoriteMovie', { userId, id }],
    checkFavoriteById,
    { refetchOnWindowFocus: false, enabled: enableFavoriteCheck }
  );

  useEffect(() => {
    if (checkFavoriteByIDQuery.data?.status === 200) {
      setEnableFavoriteCheck(false);
      setAddedToFavorites(true);
    }
  }, [checkFavoriteByIDQuery.data]);

  useEffect(() => {
    if (addToFavoriteQuery.isSuccess) {
      setAddedToFavorites(true);
    }
  }, [addToFavoriteQuery.isSuccess]);

  // const addToWatchedQuery = useQuery(
  //   ['addWatchedMovie', { userId, dataToFetch }],
  //   addToWatchedMovies,
  //   { refetchOnWindowFocus: false, enabled: false }
  // );

  if (addToFavoriteMovies.isError) {
    toast.error(`Error: ${addToFavoriteMovies.error.response.data.message}`);
  }

  // if (addToWatchedQuery.isError) {
  //   toast.error(`Error: ${addToWatchedQuery.error.response.data.message}`);
  // }

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
          {addedToFavorites ? (
            <IconButton>
              Added to favorites
              <DoneIcon />
            </IconButton>
          ) : (
            <IconButton onClick={() => addToFavoriteQuery.refetch()}>
              Add to favorites
              <StarIcon />
            </IconButton>
          )}
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
