export const getGenreName = (genreIds) => {
  const genres = window.localStorage.getItem('moviesGenres');
  const parsedGenres = JSON.parse(genres);
  let movieGenre = null;
  let name = null;
  if (parsedGenres && genreIds.length > 0) {
    movieGenre = parsedGenres.find(({ id }) => id === genreIds[0]);
    name = movieGenre.name;
  }
  return name
}
