import { IMovie } from './interfaces';

export const getGenreName = (genreIds: IMovie['genre_ids']) => {
  const genres = window.localStorage.getItem('moviesGenres');
  if (!genres) {
    return;
  }
  const parsedGenres = JSON.parse(genres);
  let movieGenre = null;
  let name = null;
  if (parsedGenres && genreIds.length > 0) {
    movieGenre = parsedGenres.find(
      ({ id }: { id: number }) => id === genreIds[0]
    );
    name = movieGenre.name;
  }
  return name;
};
