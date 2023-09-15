import { AxiosError } from 'axios';
import { useState, useEffect, MouseEventHandler } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
//#Services
import { IMovie } from 'services/interfaces';
import useLocalStorage from 'hooks/useLocalStorage';
import {
  addToFavoriteMovies,
  addToWatchedMovies,
  checkCategoryById,
} from '../../services/moviesAPI';
//#Components
import { ReactComponent as TelIcon } from '../../images/icons/Telev.svg';
import { ReactComponent as StarIcon } from '../../images/icons/Star.svg';
import DefaultMovieImage from 'components/StandartImages/DefaultMovieImage';
//#Styles
import {
  Container,
  InfoWrap,
  ImageWrap,
  MainInfo,
  MovieGenresList,
  ButtonWrap,
  Button,
  IconButton,
} from './MovieInfo.styled';

interface IProps {
  movieData: IMovie;
  handleTrailerToggle: MouseEventHandler<HTMLButtonElement>;
}

const Movieinfo = ({ movieData, handleTrailerToggle }: IProps) => {
  const [enableFavoriteCheck, setEnableFavoriteCheck] = useState(true);
  const [movieCategory, setMovieCategory] = useState<null | string>(null);
  const [userID] = useLocalStorage('userID', null);
  const location = useLocation();

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
    ['addFavoriteMovie', { userID, dataToFetch }],
    addToFavoriteMovies,
    { refetchOnWindowFocus: false, enabled: false, retry: false }
  );

  const addToWatchedQuery = useQuery(
    ['addWatchedMovie', { userID, dataToFetch }],
    addToWatchedMovies,
    { refetchOnWindowFocus: false, enabled: false, retry: false }
  );

  const checkCategoryByIDQuery = useQuery(
    ['checkCategoryById', { userID, id }],
    checkCategoryById,
    {
      retry: false,
      enabled: enableFavoriteCheck,
    }
  );

  useEffect(() => {
    if (checkCategoryByIDQuery.isSuccess) {
      const { category } = checkCategoryByIDQuery.data.data;
      setEnableFavoriteCheck(false);
      if (category) {
        setMovieCategory(category);
      }
    }
  }, [checkCategoryByIDQuery]);

  useEffect(() => {
    if (addToFavoriteQuery.isSuccess) {
      const { category } = addToFavoriteQuery.data.data.movie;
      if (category) {
        setMovieCategory(category);
      }
    }
    if (addToFavoriteQuery.isError) {
      const errorMessage = (addToFavoriteQuery.error as AxiosError).response?.data as { message?: string };
      if (errorMessage) {
        toast.error(errorMessage.message);
      }
    }
  }, [addToFavoriteQuery.isSuccess, addToFavoriteQuery.isError]);

  useEffect(() => {
    if (addToWatchedQuery.isSuccess && movieCategory !== 'watched') {
      const { category } = addToWatchedQuery.data.data.movie;
      if (category) {
        setMovieCategory(category);
      }
    }
    if (addToWatchedQuery.isError) {
      const errorMessage = (addToWatchedQuery.error as AxiosError).response?.data as { message?: string };
      if (errorMessage) {
        toast.error(errorMessage.message);
      }
    }
  }, [addToWatchedQuery.isSuccess, addToWatchedQuery.isError]);

  return (
    <Container>
      <ImageWrap poster_path={poster_path}>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w400${poster_path}`}
            alt={title}
          />
        ) : (
          <DefaultMovieImage />
        )}
      </ImageWrap>
      <InfoWrap>
        <h2>{title}</h2>
        {tagline ? <h3>"{tagline}"</h3> : ''}
        <p>{overview}</p>
        <MainInfo>
          <li>
            <p>Release date:</p>
            {runtime ? <p>Runtime:</p> : ''}
            {budget ? <p>Budget:</p> : ''}
          </li>
          <li>
            <p> {release_date}</p>
            {runtime ? <p>{runtime} minutes </p> : ''}
            {budget ? <p>{budget} $</p> : ''}
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
        <ButtonWrap>
          <Button type="button" padding="10px" onClick={handleTrailerToggle}>
            Watch Trailer
          </Button>
          {movieCategory ? (
            <IconButton
              onClick={() => addToWatchedQuery.refetch()}
              type="button"
              disabled={movieCategory === 'watched'}
            >
              Add to watched
              <TelIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => addToFavoriteQuery.refetch()}
              type="button"
              disabled={movieCategory === 'watched'}
            >
              Add to favorites
              <StarIcon />
            </IconButton>
          )}
        </ButtonWrap>
      </InfoWrap>
    </Container>
  );
};

export default Movieinfo;
