export function addToWatchedMovies(data) {
  const savedMovies = localStorage.getItem('watchedMovies');
  let parsedMovies = JSON.parse(savedMovies);
  if (!parsedMovies) {
    parsedMovies = [data];
    window.localStorage.setItem('watchedMovies', JSON.stringify(parsedMovies));
    return;
  }
  const filter = parsedMovies.find(({ id }) => id === data.id);
  if (filter) {
    return;
  }
  parsedMovies = [...parsedMovies, data];
  window.localStorage.setItem('watchedMovies', JSON.stringify(parsedMovies));
}

export function deleteFromWatchedMovies(movies, selectedID) {
  const filteredMovies = movies.filter(({ id }) => id !== selectedID);
  window.localStorage.setItem('watchedMovies', JSON.stringify(filteredMovies));
  return filteredMovies;
}
