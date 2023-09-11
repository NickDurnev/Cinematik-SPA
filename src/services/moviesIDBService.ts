import axios from 'axios';
import { toast } from 'react-toastify';
import { QueryFunctionContext } from 'react-query';
import { IParams, IResult, IReviewsResult, IMovie, IActor } from './interfaces';

const baseURL = 'https://api.themoviedb.org/3/';
const key = '105ba628fde77462ee84526f3393a31c';

export const fetchTrendmovies = async (): Promise<IMovie[]> => {
  const response = await axios.get(
    `${baseURL}trending/movie/day?api_key=${key}`
  );
  return response.data.results;
};

export const fetchMoviesGenres = async (): Promise<IMovie['genres'][]> => {
  const response = await axios.get(
    `${baseURL}genre/movie/list?api_key=${key}&language=en-US`
  );
  return response.data.genres;
};

export const fetchMoviesByGenre = async (
  params: QueryFunctionContext<IParams['params']>
): Promise<IResult> => {
  const { pageParam, queryKey } = params;
  const [, { genreID }] = queryKey;
  const response = await axios.get(
    `${baseURL}discover/movie?api_key=${key}&with_genres=${genreID}&page=${pageParam}`
  );
  const results = response.data.results;
  const totalPages = response.data.total_pages;
  return { results, nextPage: pageParam + 1, totalPages: totalPages };
};

export const fetchSimilarMovies = async (): Promise<IResult> => {
  const pageNumber = Math.floor(Math.random() * (404 - 1 + 1)) + 1;
  const response = await axios.get(
    `${baseURL}movie/725201/similar?api_key=${key}&language=en-US&page=${pageNumber}`
  );
  const results = response.data.results;
  return { results };
};

export const fetchCategoryMovies = async (
  params: QueryFunctionContext<IParams['params']>
): Promise<IResult> => {
  const { pageParam, queryKey } = params;
  const [, { category }] = queryKey;
  const response = await axios.get(
    `${baseURL}movie/${category}?api_key=${key}&language=en-US&page=${pageParam}`
  );
  const results = response.data.results;
  const totalPages = response.data.total_pages;
  return { results, nextPage: pageParam + 1, totalPages: totalPages };
};

export const searchMovie = async (
  params: QueryFunctionContext<IParams['params']>
): Promise<IResult | undefined> => {
  const { pageParam, queryKey } = params;
  const [, { query }] = queryKey;
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
};

export const movieDetails = async (
  params: QueryFunctionContext<IParams['params']>
): Promise<IMovie | number> => {
  const [_key, { movieID }] = params.queryKey;
  const response = await axios.get(
    `${baseURL}movie/${movieID}?api_key=${key}&language=en-US`
  );
  const data = await response.data;
  return data;
};

export const similarMovies = async (
  params: QueryFunctionContext<IParams['params']>
): Promise<IResult> => {
  const { pageParam, queryKey } = params;
  const [_key, { movieID }] = queryKey;
  const response = await axios.get(
    `${baseURL}movie/${movieID}/similar?api_key=${key}&language=en-US&page=${pageParam}`
  );
  const results = response.data.results;
  const totalPages = response.data.total_pages;
  return { results, nextPage: pageParam + 1, totalPages: totalPages };
};

export const actorDetails = async (
  params: QueryFunctionContext<IParams['params']>
): Promise<IActor | number> => {
  const [, { actorID }] = params.queryKey;
  const response = await axios.get(
    `${baseURL}person/${actorID}?api_key=${key}&language=en-US`
  );
  const data = await response.data;
  return data;
};

export const filmsByActor = async (
  params: QueryFunctionContext<IParams['params']>
): Promise<{ cast: IMovie[] } | number> => {
  const [, { actorID }] = params.queryKey;
  const { data } = await axios.get(
    `${baseURL}person/${actorID}/movie_credits?api_key=${key}&language=en-US`
  );
  return data;
};

export const movieCast = async (
  params: QueryFunctionContext<IParams['params']>
): Promise<IActor[]> => {
  const [, { movieID }] = params.queryKey;
  const response = await axios.get(
    `${baseURL}movie/${movieID}/credits?api_key=${key}&language=en-US`
  );
  return response.data;
};

export const movieReviews = async (
  params: QueryFunctionContext<IParams['params']>
): Promise<IReviewsResult> => {
  const { pageParam, queryKey } = params;
  const [_key, { movieID }] = queryKey;
  console.log(`${_key}`);
  const response = await axios.get(
    `${baseURL}movie/${movieID}/reviews?api_key=${key}&language=en-US&page=1`
  );
  const results = response.data.results;
  const totalPages = response.data.total_pages;
  return { results, nextPage: pageParam + 1, totalPages: totalPages };
};

export const fetchMovieTrailers = async (
  movieID: string
): Promise<{ name: string }[]> => {
  const response = await axios.get(
    `${baseURL}movie/${movieID}/videos?api_key=${key}&language=en-US`
  );
  return response.data.results;
};
