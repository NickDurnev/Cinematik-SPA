import axios from 'axios';
import { toast } from 'react-toastify';

const baseURL = 'https://api.themoviedb.org/3/';
const key = '105ba628fde77462ee84526f3393a31c';

export async function fetchTrendmovies() {
  const response = await axios.get(
    `${baseURL}trending/movie/day?api_key=${key}`
  );
  return response.data.results;
}

export async function fetchMoviesGenres() {
  const response = await axios.get(
    `${baseURL}genre/movie/list?api_key=${key}&language=en-US`
  );
  return response.data.genres;
}

export async function fetchMoviesByGenre({ pageParam = 1, queryKey }) {
  const [_key, { genreId }] = queryKey;
  console.log(_key);
  const response = await axios.get(
    `${baseURL}discover/movie?api_key=${key}&with_genres=${genreId}&page=${pageParam}`
  );
  const results = response.data.results;
  const totalPages = response.data.total_pages;
  return { results, nextPage: pageParam + 1, totalPages: totalPages };
}

export async function fetchSimilarMovies() {
  const pageNumber = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
  const response = await axios.get(
    `${baseURL}movie/725201/similar?api_key=${key}&language=en-US&page=${pageNumber}`
  );
  const results = response.data.results;
  return { results };
}

export async function fetchCategoryMovies({ pageParam = 1, queryKey }) {
  // eslint-disable-next-line no-unused-vars
  const [_key, { category }] = queryKey;
  const response = await axios.get(
    `${baseURL}movie/${category}?api_key=${key}&language=en-US&page=${pageParam}`
  );
  const results = response.data.results;
  const totalPages = response.data.total_pages;
  return { results, nextPage: pageParam + 1, totalPages: totalPages };
}

export async function searchMovie({ pageParam = 1, queryKey }) {
  const [_key, { query }] = queryKey;
  console.log(`${_key}`);
  if (!query) {
    return;
  }
  const response = await axios.get(
    `${baseURL}search/movie?api_key=${key}&language=en-US&query=${query}&page=${pageParam}&include_adult=false`
  );
  const results = response.data.results;
  const totalPages = response.data.total_pages;
  if (!results.length) {
    toast.info('Movies were not found');
  }
  return { results, nextPage: pageParam + 1, totalPages: totalPages };
}

export async function movieDetails({ queryKey }) {
  const [_key, { movieId }] = queryKey;
  console.log(`${_key}`);
  try {
    const response = await axios.get(
      `${baseURL}movie/${movieId}?api_key=${key}&language=en-US`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    return error.response.status;
  }
}

export async function similarMovies({ pageParam = 1, queryKey }) {
  const [_key, { movieId }] = queryKey;
  console.log(`${_key}`);
  try {
    const response = await axios.get(
      `${baseURL}movie/${movieId}/similar?api_key=${key}&language=en-US&page=${pageParam}`
    );
    const results = response.data.results;
    const totalPages = response.data.total_pages;
    return { results, nextPage: pageParam + 1, totalPages: totalPages };
  } catch (error) {
    return error.response.status;
  }
}

export async function actorDetails({ queryKey }) {
  const [_key, { actorId }] = queryKey;
  console.log(`${_key}`);
  try {
    const response = await axios.get(
      `${baseURL}person/${actorId}?api_key=${key}&language=en-US`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    return error.response.status;
  }
}

export async function filmsByActor({ queryKey }) {
  const [_key, { actorId }] = queryKey;
  console.log(`${_key}`);
  const { data } = await axios.get(
    `${baseURL}person/${actorId}/movie_credits?api_key=${key}&language=en-US`
  );
  return data;
}

export async function movieCast({ queryKey }) {
  const [_key, { movieId }] = queryKey;
  console.log(`${_key}`);
  const response = await axios.get(
    `${baseURL}movie/${movieId}/credits?api_key=${key}&language=en-US`
  );
  return response.data;
}

export async function movieReviews({ pageParam = 1, queryKey }) {
  const [_key, { movieId }] = queryKey;
  console.log(`${_key}`);
  const response = await axios.get(
    `${baseURL}movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`
  );
  const results = response.data.results;
  const totalPages = response.data.total_pages;
  return { results, nextPage: pageParam + 1, totalPages: totalPages };
}

export async function fetchMovieTrailers(movieId) {
  const response = await axios.get(
    `${baseURL}movie/${movieId}/videos?api_key=${key}&language=en-US`
  );
  return response.data.results;
}
