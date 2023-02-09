import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';
import { toast } from 'react-toastify';
import useLocalStorage from 'hooks/useLocalStorage';
import {
  addToFavoriteMovies,
  addToWatchedMovies,
  checkFavoriteById,
  deleteMovie,
} from '../../services/moviesAPI';
import GoBackButton from '../GoBackButton/GoBackButton';
import {
  PageWrap,
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

const Movieinfo = ({ movieData, handleTrailerToggle }) => {
  const [prevLocationState, setPrevLocationState] = useState(null);
  const [addedToFavorites, setAddedToFavorites] = useState(null);
  const [enableFavoriteCheck, setEnableFavoriteCheck] = useState(true);
  const [userId] = useLocalStorage('userID', null);

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
    idbID: id,
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

  const addToFavoriteQuery = useQuery(
    ['addFavoriteMovie', { userId, dataToFetch }],
    addToFavoriteMovies,
    { refetchOnWindowFocus: false, enabled: false }
  );

  const addToWatchedQuery = useQuery(
    ['addWatchedMovie', { userId, dataToFetch }],
    addToWatchedMovies,
    { refetchOnWindowFocus: false, enabled: false }
  );

  const checkFavoriteByIDQuery = useQuery(
    ['checkFavoriteMovie', { userId, id }],
    checkFavoriteById,
    {
      refetchOnWindowFocus: false,
      enabled: enableFavoriteCheck,
    }
  );

  const useDeleteMovie = () => useMutation(data => deleteMovie(data));
  const { mutate } = useDeleteMovie();

  const addToFavorite = () => {
    addToFavoriteQuery.refetch();
  };

  const addToWatched = () => {
    addToWatched.refetch();
    if (addToWatchedQuery.isSuccess) {
      setAddedToFavorites(true);
    }
    mutate([userId, checkFavoriteByIDQuery.data?.id]);
  };

  useEffect(() => {
    setPrevLocationState(location.state);
  }, [location.state]);

  useEffect(() => {
    if (checkFavoriteByIDQuery.data?.id) {
      setEnableFavoriteCheck(false);
      setAddedToFavorites(true);
      console.log(checkFavoriteByIDQuery.data);
    }
  }, [checkFavoriteByIDQuery.data]);

  useEffect(() => {
    if (addToFavoriteQuery.isSuccess) {
      setAddedToFavorites(true);
    }
    if (addToFavoriteMovies.isError) {
      toast.error(`Error: ${addToFavoriteMovies.error.response.data.message}`);
    }
  }, [addToFavoriteQuery.isSuccess, addToFavoriteQuery.isError]);

  useEffect(() => {
    if (addToWatchedQuery.isError) {
      toast.error(`Error: ${addToWatchedQuery.error.response.data.message}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addToWatchedQuery.isError]);

  return (
    <PageWrap>
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
            <IconButton onClick={() => addToWatched()}>
              Add to watched
              <TelIcon />
            </IconButton>
          ) : (
            <IconButton onClick={() => addToFavorite()}>
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
          <Button type="button" padding="10px" onClick={handleTrailerToggle}>
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
    </PageWrap>
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
  handleTrailerToggle: PropTypes.func.isRequired,
  handleVerifyToggle: PropTypes.func.isRequired,
};

export default Movieinfo;
