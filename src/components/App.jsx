import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
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

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Appbar />
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
  );
}
