import axios from 'axios';

const baseURL = process.env.REACT_APP_WEB_SERVER_URL;

export async function fetchFavoriteMovies({ queryKey }) {
  // eslint-disable-next-line no-unused-vars
  const [_key, { userId }] = queryKey;
  const response = await axios.get(`${baseURL}movies/favorites/${userId}`);
  return response.data;
}

export async function deleteFavoriteMovie(movieID) {
  const response = await axios.delete(`${baseURL}movies/favorites/${movieID}`);
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
