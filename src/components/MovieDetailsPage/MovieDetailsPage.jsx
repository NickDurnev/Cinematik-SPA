import { useParams, Route, Routes } from 'react-router-dom';
import { useQuery } from 'react-query';
import { lazy, Suspense } from 'react';
import { toast } from 'react-toastify';
import ThreeDots from 'components/Loaders/Loader';
import { movieDetails } from 'services/api';
import MovieInfo from 'components/MovieInfo';
import { Container, AddInfo, StyledLink } from './MovieDetailsPage.styled';
const Cast = lazy(() =>
  import('components/Cast' /* webpackChunkName: "cast" */)
);
const Reviews = lazy(() =>
  import('components/Reviews' /* webpackChunkName: "reviews" */)
);

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const { data, error, isLoading, isError, isSuccess } = useQuery(
    ['movieDetails', { movieId }],
    movieDetails,
    { staleTime: 60000, cacheTime: 60000 }
  );

  if (isLoading) {
    return <ThreeDots />;
  }

  if (isError) {
    return toast.error(`Ошибка: ${error.message}`);
  }

  if (isSuccess) {
    return (
      <>
        <Container>
          <MovieInfo movieData={data} />
          <AddInfo>
            <p>Additional imformation</p>
            <StyledLink to={`/movies/${movieId}/cast`}>Cast</StyledLink>
            <StyledLink to={`/movies/${movieId}/reviews`}>Reviews</StyledLink>
            <Suspense fallback={<ThreeDots />}>
              <Routes>
                <Route path="/cast" element={<Cast />}></Route>
                <Route path="/reviews" element={<Reviews />}></Route>
              </Routes>
            </Suspense>
          </AddInfo>
        </Container>
      </>
    );
  }
};

export default MovieDetailsPage;
