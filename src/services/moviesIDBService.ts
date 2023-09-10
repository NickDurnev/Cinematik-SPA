import axios from 'axios';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { QueryFunctionContext } from 'react-query';
import { IParams, IMovie } from './interfaces';

const baseURL = 'https://api.themoviedb.org/3/';
const key = '105ba628fde77462ee84526f3393a31c';

interface IResult {
  results: IMovie[];
  nextPage?: number;
  totalPages?: number;
}

export const fetchTrendmovies = async () => {
  const response = await axios.get(
    `${baseURL}trending/movie/day?api_key=${key}`
  );
  return response.data.results;
};

export const fetchMoviesGenres = async () => {
  const response = await axios.get(
    `${baseURL}genre/movie/list?api_key=${key}&language=en-US`
  );
  return response.data.genres;
};

export const fetchMoviesByGenre = async (
  params: QueryFunctionContext<IParams['params']>
): Promise<IResult | number> => {
  const { pageParam, queryKey } = params;
  const [, { genreID }] = queryKey;
  try {
    const response = await axios.get(
      `${baseURL}discover/movie?api_key=${key}&with_genres=${genreID}&page=${pageParam}`
    );
    const results = response.data.results;
    const totalPages = response.data.total_pages;
    return { results, nextPage: pageParam + 1, totalPages: totalPages };
  } catch (error) {
    return (error as AxiosError).response?.status ?? 404;
  }
};

export const fetchSimilarMovies = async (): Promise<IResult | number> => {
  const pageNumber = Math.floor(Math.random() * (404 - 1 + 1)) + 1;
  try {
    const response = await axios.get(
      `${baseURL}movie/725201/similar?api_key=${key}&language=en-US&page=${pageNumber}`
    );
    const results = response.data.results;
    return { results };
  } catch (error) {
    return (error as AxiosError).response?.status ?? 404;
  }
};

export const fetchCategoryMovies = async (
  params: QueryFunctionContext<IParams['params']>
): Promise<IResult | number> => {
  const { pageParam, queryKey } = params;
  const [, { category }] = queryKey;
  try {
    const response = await axios.get(
      `${baseURL}movie/${category}?api_key=${key}&language=en-US&page=${pageParam}`
    );
    const results = response.data.results;
    const totalPages = response.data.total_pages;
    return { results, nextPage: pageParam + 1, totalPages: totalPages };
  } catch (error) {
    return (error as AxiosError).response?.status ?? 404;
  }
};

export const searchMovie = async (
  params: QueryFunctionContext<IParams['params']>
): Promise<IResult | undefined | number> => {
  const { pageParam, queryKey } = params;
  const [, { query }] = queryKey;
  if (!query) {
    return;
  }
  try {
    const response = await axios.get(
      `${baseURL}search/movie?api_key=${key}&language=en-US&query=${query}&page=${pageParam}&include_adult=false`
    );
    const results = response.data.results;
    const totalPages = response.data.total_pages;
    if (!results.length) {
      toast.info('Movies were not found');
    }
    return { results, nextPage: pageParam + 1, totalPages: totalPages };
  } catch (error) {
    return (error as AxiosError).response?.status ?? 404;
  }
};

export const movieDetails = async (
  params: QueryFunctionContext<IParams['params']>
): Promise<IResult | number> => {
  const [_key, { movieID }] = params.queryKey;
  try {
    const response = await axios.get(
      `${baseURL}movie/${movieID}?api_key=${key}&language=en-US`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    return (error as AxiosError).response?.status ?? 404;
  }
};

export const similarMovies = async ({ pageParam = 1, queryKey }) => {
  const [_key, { movieID }] = queryKey;
  console.log(`${_key}`);
  try {
    const response = await axios.get(
      `${baseURL}movie/${movieID}/similar?api_key=${key}&language=en-US&page=${pageParam}`
    );
    const results = response.data.results;
    const totalPages = response.data.total_pages;
    return { results, nextPage: pageParam + 1, totalPages: totalPages };
  } catch (error) {
    return error.response.status;
  }
};

export const actorDetails = async ({ queryKey }) => {
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
};

export const filmsByActor = async ({ queryKey }) => {
  const [_key, { actorId }] = queryKey;
  console.log(`${_key}`);
  const { data } = await axios.get(
    `${baseURL}person/${actorId}/movie_credits?api_key=${key}&language=en-US`
  );
  return data;
};

export const movieCast = async ({ queryKey }) => {
  const [_key, { movieID }] = queryKey;
  console.log(`${_key}`);
  const response = await axios.get(
    `${baseURL}movie/${movieID}/credits?api_key=${key}&language=en-US`
  );
  return response.data;
};

export const movieReviews = async ({ pageParam = 1, queryKey }) => {
  const [_key, { movieID }] = queryKey;
  console.log(`${_key}`);
  const response = await axios.get(
    `${baseURL}movie/${movieID}/reviews?api_key=${key}&language=en-US&page=1`
  );
  const results = response.data.results;
  const totalPages = response.data.total_pages;
  return { results, nextPage: pageParam + 1, totalPages: totalPages };
};

export const fetchMovieTrailers = async movieID => {
  const response = await axios.get(
    `${baseURL}movie/${movieID}/videos?api_key=${key}&language=en-US`
  );
  return response.data.results;
};
