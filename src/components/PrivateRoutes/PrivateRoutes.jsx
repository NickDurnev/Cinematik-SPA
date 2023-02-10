import PropTypes from 'prop-types';
import { useState, lazy, Suspense } from 'react';
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
const Reviews = lazy(() =>
  import('components/Reviews' /* webpackChunkName: "reviews" */)
);

const SimilarMovies = lazy(() =>
  import('components/SimilarMovies' /* webpackChunkName: "similarMovies" */)
);

const PrivateRoutes = ({ theme, changeTheme }) => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [userId] = useLocalStorage('userID', null);

  const saveMovieGenres = data => {
    window.localStorage.setItem('moviesGenres', JSON.stringify(data));
  };

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            exact
            element={
              <HomePage
                setGenres={data => saveMovieGenres(data)}
                onChange={value => setQuery(value)}
                theme={theme}
                changeTheme={changeTheme}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <MoviesPage onChange={value => setQuery(value)} query={query} />
            }
          />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
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
            path="/movies/:movieId/cast/actor/:actorId/*"
            element={<ActorDetailsPage />}
          />
          <Route
            path="/moviesbyactor/:actorId/*"
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
  theme: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

export default PrivateRoutes;
