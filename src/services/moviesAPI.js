import axios from 'axios';

const baseURL = process.env.REACT_APP_WEB_SERVER_URL;

export async function fetchFavoriteMovies({ pageParam = 1, queryKey }) {
  // eslint-disable-next-line no-unused-vars
  const [_key, { userId }] = queryKey;
  const { data } = await axios.get(
    `${baseURL}movies/favorites/${userId}?page=${pageParam}`
  );
  const movies = data.data.movies;
  return { movies, nextPage: pageParam + 1 };
}

export async function deleteFavoriteMovie({ queryKey }) {
  // eslint-disable-next-line no-unused-vars
  const [_key, { userId, selectedMovieID }] = queryKey;
  const response = await axios.delete(
    `${baseURL}movies/favorites/${userId}/${selectedMovieID}`
  );
  return response.data;
}

export async function checkFavoriteById({ queryKey }) {
  // eslint-disable-next-line no-unused-vars
  const [_key, { userId, id }] = queryKey;
  const response = await axios.get(
    `${baseURL}movies/favorites/${userId}/${id}`
  );
  return response;
}

export async function addToFavoriteMovies({ queryKey }) {
  // eslint-disable-next-line no-unused-vars
  const [_key, { userId, dataToFetch }] = queryKey;
  const response = await axios.post(
    `${baseURL}movies/favorites/${userId}`,
    dataToFetch
  );
  return response.data;
}

export async function fetchWatchedMovies({ queryKey }) {
  // eslint-disable-next-line no-unused-vars
  const [_key, { userId }] = queryKey;
  const response = await axios.get(`${baseURL}movies/watched/${userId}`);
  return response.data;
}

export async function deleteWatchedMovie(movieID) {
  const response = await axios.delete(`${baseURL}movies/watched/${movieID}`);
  return response.data;
}

export async function addToWatchedMovies({ queryKey }) {
  // eslint-disable-next-line no-unused-vars
  const [_key, { userId, dataToFetch }] = queryKey;
  const response = await axios.post(`${baseURL}movies/watched/${userId}`);
  return response.data;
}
