import { LinkWrap, StyledLink } from './MovieCategories.styled';

interface IProps {
  movieID?: string;
  prevLocationState: object | null;
}

const MovieCategories = ({ movieID, prevLocationState }: IProps) => {
  return (
    <LinkWrap>
      <StyledLink
        to={`/movies/${movieID}/cast`}
        state={{
          ...prevLocationState,
        }}
      >
        Cast
      </StyledLink>
      <StyledLink
        to={`/movies/${movieID}/reviews`}
        state={{
          ...prevLocationState,
        }}
      >
        Reviews
      </StyledLink>
      <StyledLink
        to={`/movies/${movieID}/similar_movies`}
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
