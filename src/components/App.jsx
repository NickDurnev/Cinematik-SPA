import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { useState, useRef } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { lazy, Suspense } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../themes';
import { Container } from './App.styled';
import Appbar from './AppBar/Appbar';
import ThreeDots from './Loaders/Loader';

const HomePage = lazy(() =>
  import('./HomePage' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('./MoviesPage' /* webpackChunkName: "moviePage" */)
);
const MovieDetailsPage = lazy(() =>
  import('./MovieDetailsPage' /* webpackChunkName: "movieDetailsPage" */)
);

export function App() {
  const queryClient = new QueryClient();
  const [theme, setTheme] = useLocalStorage('theme', light);

  function changeTheme() {
    theme === light ? setTheme(dark) : setTheme(light);
  }

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Container>
          <Appbar theme={theme} changeTheme={changeTheme} />
          <Suspense fallback={<ThreeDots />}>
            <Routes>
              <Route path="/" exact element={<HomePage />}></Route>
              <Route path="/movies" element={<MoviesPage />}></Route>
              <Route
                path="/movies/:movieId/*"
                element={<MovieDetailsPage />}
              ></Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Container>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
