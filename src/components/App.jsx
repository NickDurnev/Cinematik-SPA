import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { lazy, Suspense } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import useLocalStorage from 'hooks/useLocalStorage';
import { light, dark } from '../themes';
import { Container } from './App.styled';
import Appbar from './AppBar/Appbar';
import ThreeDots from './Loaders/Loader';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('../pages/MoviesPage' /* webpackChunkName: "moviePage" */)
);
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage' /* webpackChunkName: "movieDetailsPage" */)
);
const ActorDetailsPage = lazy(() =>
  import('../pages/ActorDetailsPage' /* webpackChunkName: "actorDetailsPage" */)
);
const ActorsMovies = lazy(() =>
  import('./ActorsMovies' /* webpackChunkName: "ActorsMovies" */)
);
const UpcomingMoviesPage = lazy(() =>
  import(
    '../pages/UpcomingMoviesPage' /* webpackChunkName: "UpcomingMoviesPage" */
  )
);
const TopRatedMoviesPage = lazy(() =>
  import(
    '../pages/TopRatedMoviesPage' /* webpackChunkName: "TopRatedMoviesPage" */
  )
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

export function App() {
  const [query, setQuery] = useState('');
  const queryClient = new QueryClient();
  const [theme, setTheme] = useLocalStorage('theme', light);

  const muiTheme = createTheme({
    ...theme,
  });

  function changeTheme() {
    theme === light ? setTheme(dark) : setTheme(light);
  }

  function saveMovieGenres(data) {
    window.localStorage.setItem('moviesGenres', JSON.stringify(data));
  }

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={muiTheme}>
          <QueryClientProvider client={queryClient}>
            <Container>
              <Appbar theme={theme} changeTheme={changeTheme} />
              <div>
                <Suspense fallback={<ThreeDots />}>
                  <Routes>
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
                        <MoviesPage
                          onChange={value => setQuery(value)}
                          query={query}
                        />
                      }
                    />
                    <Route
                      path="/movies/upcoming"
                      element={<UpcomingMoviesPage />}
                    />
                    <Route
                      path="/movies/top_rated"
                      element={<TopRatedMoviesPage />}
                    />
                    <Route
                      path="/movies/:movieId/*"
                      element={<MovieDetailsPage />}
                    >
                      <Route path="cast" element={<Cast />} />
                      <Route path="reviews" element={<Reviews />} />
                      <Route
                        path="similar_movies"
                        element={<SimilarMovies />}
                      />
                    </Route>
                    <Route
                      path="/movies/:movieId/cast/actor/:actorId/*"
                      element={<ActorDetailsPage />}
                    />
                    <Route
                      path="/moviesbyactor/:actorId/*"
                      element={<ActorsMovies />}
                    />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </Suspense>
              </div>
            </Container>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
          <ToastContainer />
        </ThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}
