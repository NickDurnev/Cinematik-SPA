import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Container } from './App.styled';
import HomePage from './HomePage';
import AppBar from './AppBar';
import MoviePage from './MoviesPage';
import MovieDetailsPage from './MovieDetailsPage';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <AppBar />
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviePage />}></Route>
          <Route
            path="/movies/:movieId/*"
            element={<MovieDetailsPage />}
          ></Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
