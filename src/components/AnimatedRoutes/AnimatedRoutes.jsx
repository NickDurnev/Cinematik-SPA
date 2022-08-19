import { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
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
const ActorsMovies = lazy(() =>
  import('../ActorsMovies' /* webpackChunkName: "ActorsMovies" */)
);
const UpcomingMoviesPage = lazy(() =>
  import(
    '../../pages/UpcomingMoviesPage' /* webpackChunkName: "UpcomingMoviesPage" */
  )
);
const TopRatedMoviesPage = lazy(() =>
  import(
    '../../pages/TopRatedMoviesPage' /* webpackChunkName: "TopRatedMoviesPage" */
  )
);

const FavoriteMoviesPage = lazy(() =>
  import(
    '../../pages/FavoriteMoviesPage' /* webpackChunkName: "FavoriteMoviesPage" */
  )
);

const WatchedMoviesPage = lazy(() =>
  import(
    '../../pages/WatchedMoviesPage' /* webpackChunkName: "WatchedMoviesPage" */
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

function AnimatedRoutes() {
  const location = useLocation();
  const [query, setQuery] = useState('');

  function saveMovieGenres(data) {
    window.localStorage.setItem('moviesGenres', JSON.stringify(data));
  }

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          exact
          element={
            <HomePage
              setGenres={data => saveMovieGenres(data)}
              onChange={value => setQuery(value)}
            />
          }
        />
        <Route
          path="/movies"
          element={
            <MoviesPage onChange={value => setQuery(value)} query={query} />
          }
        />
        <Route
          path="/movies/upcoming"
          element={
            <Suspense fallback={<GallerySceleton />}>
              <UpcomingMoviesPage />
            </Suspense>
          }
        />
        <Route
          path="/movies/top_rated"
          element={
            <Suspense fallback={<GallerySceleton />}>
              <TopRatedMoviesPage />
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
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="similar_movies" element={<SimilarMovies />} />
        </Route>
        <Route
          path="/movies/:movieId/cast/actor/:actorId/*"
          element={<ActorDetailsPage />}
        />
        <Route path="/moviesbyactor/:actorId/*" element={<ActorsMovies />} />
        <Route
          path="/favorites"
          element={
            <Suspense fallback={<GallerySceleton />}>
              <FavoriteMoviesPage />
            </Suspense>
          }
        />
        <Route
          path="/watched"
          element={
            <Suspense fallback={<GallerySceleton />}>
              <WatchedMoviesPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
