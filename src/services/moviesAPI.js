import axios from 'axios';

const baseURL = 'https://nodejs-cinematik-rest-api.onrender.com/';

export async function fetchMovies({ pageParam = 1, queryKey }) {
  // eslint-disable-next-line no-unused-vars
  const [_key, { userId, limit, category }] = queryKey;
  const { data } = await axios.get(
    `${baseURL}movies/${userId}?page=${pageParam}&limit=${limit}&category=${category}`
  );
  const movies = data.data.movies;
  return { movies, nextPage: pageParam + 1 };
}

export async function deleteMovie(data) {
  const [userID, movieID] = data;
  const response = await axios.delete(`${baseURL}movies/${userID}/${movieID}`);
  return response?.data;
}

export async function checkCategoryById({ queryKey }) {
  // eslint-disable-next-line no-unused-vars
  const [_key, { userId, id }] = queryKey;
  const { data } = await axios.get(`${baseURL}movies/${userId}/${id}`);
  return data;
}

export async function addToFavoriteMovies({ queryKey }) {
  // eslint-disable-next-line no-unused-vars
  const [_key, { userId, dataToFetch }] = queryKey;
  const { data } = await axios.post(
    `${baseURL}movies/${userId}?category=favorites`,
    dataToFetch
  );
  return data;
}

export async function addToWatchedMovies({ queryKey }) {
  // eslint-disable-next-line no-unused-vars
  const [_key, { userId, dataToFetch }] = queryKey;
  const response = await axios.post(
    `${baseURL}movies/${userId}?category=watched`,
    dataToFetch
  );
  return response.data;
}
