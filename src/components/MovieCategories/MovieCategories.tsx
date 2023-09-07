import { FC } from 'react';
import { LinkWrap, StyledLink } from './MovieCategories.styled';

interface Iprops {
  movieId: string;
  prevLocationState: object;
}

const MovieCategories: FC<Iprops> = ({ movieId, prevLocationState }) => {
  return (
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
  );
};

export default MovieCategories;
