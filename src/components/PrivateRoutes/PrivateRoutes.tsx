import PropTypes from 'prop-types';
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
//#Services
import useLocalStorage from 'hooks/useLocalStorage';
//#Componets
import GallerySceleton from '../Loaders/GallerySkeleton';

const HomePage = lazy(() =>
  import('../../pages/HomePage' /* webpackChunkName: "home-page" */)
);

const MoviesPage = lazy(() =>
  import('../../pages/MoviesPage' /* webpackChunkName: "moviePage" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    '../../pages/MovieDetailsPage' /* webpackChunkName: "movieDetailsPage" */
  )
);

const ActorDetailsPage = lazy(() =>
  import(
    '../../pages/ActorDetailsPage' /* webpackChunkName: "actorDetailsPage" */
  )
);

const ActorsMoviesPage = lazy(() =>
  import(
    '../../pages/ActorsMoviesPage' /* webpackChunkName: "ActorsMoviesPage" */
  )
);

const CategoryMoviesPage = lazy(() =>
  import(
    '../../pages/CategoryMoviesPage' /* webpackChunkName: "CategoryMoviesPage" */
  )
);

const UserMoviesPage = lazy(() =>
  import(
    '../../pages/UserMoviesPage' /* webpackChunkName: "CategoryMoviesPage" */
  )
);

const MoviesByGenre = lazy(() =>
  import('../../pages/MoviesByGenre' /* webpackChunkName: "MoviesByGenre" */)
);

const Cast = lazy(() =>
  import('components/Cast' /* webpackChunkName: "cast" */)
);
const ReviewList = lazy(() =>
  import('components/ReviewList' /* webpackChunkName: "reviews" */)
);

const SimilarMovies = lazy(() =>
  import('components/SimilarMovies' /* webpackChunkName: "similarMovies" */)
);

const PrivateRoutes = ({ query }: { query: string }) => {
  const location = useLocation();
  const [userId] = useLocalStorage('userID', null);

  const saveMovieGenres = (data: object) => {
    window.localStorage.setItem('moviesGenres', JSON.stringify(data));
  };

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            caseSensitive={true}
            element={<HomePage setGenres={(data: object) => saveMovieGenres(data)} />}
          />
          <Route path="/movies" element={<MoviesPage query={query} />} />
          <Route path="/movies/:movieID/*" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<ReviewList />} />
            <Route path="similar_movies" element={<SimilarMovies />} />
          </Route>
          <Route
            path="/movies/upcoming"
            element={
              <Suspense fallback={<GallerySceleton />}>
                <CategoryMoviesPage category={'upcoming'} />
              </Suspense>
            }
          />
          <Route
            path="/movies/top_rated"
            element={
              <Suspense fallback={<GallerySceleton />}>
                <CategoryMoviesPage category={'top_rated'} />
              </Suspense>
            }
          />
          <Route
            path="/movies/by_genre=:genreId/*"
            element={
              <Suspense fallback={<GallerySceleton />}>
                <MoviesByGenre />
              </Suspense>
            }
          />
          <Route
            path="/movies/:movieID/cast/actor/:actorID/*"
            element={<ActorDetailsPage />}
          />
          <Route
            path="/moviesbyactor/:actorID/*"
            element={<ActorsMoviesPage />}
          />
          <Route
            path="/favorites"
            element={
              <Suspense fallback={<GallerySceleton />}>
                {userId && <UserMoviesPage category={'favorites'} />}
              </Suspense>
            }
          />
          <Route
            path="/watched"
            element={
              <Suspense fallback={<GallerySceleton />}>
                {userId && <UserMoviesPage category={'watched'} />}
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

PrivateRoutes.propTypes = {
  query: PropTypes.string.isRequired,
};

export default PrivateRoutes;
