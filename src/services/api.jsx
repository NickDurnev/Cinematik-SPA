import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const key = `105ba628fde77462ee84526f3393a31c`;

export async function fetchTrendmovies() {
  const response = await axios.get(`trending/movie/day?api_key=${key}`);
  return response.data.results;
}

export async function searchMovie({ pageParam = 1, queryKey }) {
  const [_key, { query }] = queryKey;
  console.log(`${_key}`);
  if (query !== '') {
    const response = await axios.get(
      `search/movie?api_key=${key}&language=en-US&query=${query}&page=${pageParam}&include_adult=false`
    );
    const results = response.data.results;
    const totalPages = response.data.total_pages;
    return { results, nextPage: pageParam + 1, totalPages: totalPages };
  }
}
