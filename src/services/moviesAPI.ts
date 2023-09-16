import axios, { AxiosError } from 'axios';
import { QueryFunctionContext } from 'react-query';
import { IMovie, IParams } from './interfaces';
const baseURL = 'https://nodejs-cinematik-rest-api.onrender.com/';

interface IAddMovie {
  data: {
    movie: IMovie;
  };
}

export const fetchMovies = async (
  params: QueryFunctionContext<IParams['params']>
): Promise<{ movies: IMovie[]; nextPage: number }> => {
  const { pageParam, queryKey } = params;
  const [, { userID, limit, category }] = queryKey;
  const { data } = await axios.get(
    `${baseURL}movies/${userID}?page=${pageParam}&limit=${limit}&category=${category}`
  );
  const movies = data.data.movies;
  return { movies, nextPage: pageParam + 1 };
};

export const deleteMovie = async (
  data: [string, IMovie['id']]
): Promise<{ data: IMovie }> => {
  const [userID, movieID] = data;
  const response = await axios.delete(`${baseURL}movies/${userID}/${movieID}`);
  return response?.data;
};

export const checkCategoryById = async (
  params: QueryFunctionContext<IParams['params']>
): Promise<{ data: IMovie }> => {
  const [, { userID, id }] = params.queryKey;
  const { data } = await axios.get(`${baseURL}movies/${userID}/${id}`);
  return data;
};

export const addToFavoriteMovies = async (
  params: QueryFunctionContext<IParams['params']>
): Promise<IAddMovie> => {
  const [, { userID, dataToFetch }] = params.queryKey;
  const { data } = await axios.post(
    `${baseURL}movies/${userID}?category=favorites`,
    dataToFetch
  );
  console.log(data);
  return data;
};

export const addToWatchedMovies = async (
  params: QueryFunctionContext<IParams['params']>
): Promise<IAddMovie> => {
  const [, { userID, dataToFetch }] = params.queryKey;
  const { data } = await axios.post(
    `${baseURL}movies/${userID}?category=watched`,
    dataToFetch
  );
  console.log(data);
  return data;
};
