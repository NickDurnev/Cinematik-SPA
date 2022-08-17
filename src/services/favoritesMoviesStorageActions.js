export function addToFavoritesMovies(data) {
  const savedMovies = localStorage.getItem('favoritesMovies');
  let parsedMovies = JSON.parse(savedMovies);
  if (!parsedMovies) {
    parsedMovies = [data];
    window.localStorage.setItem(
      'favoritesMovies',
      JSON.stringify(parsedMovies)
    );
    return;
  }
  const filter = parsedMovies.find(({ id }) => id === data.id);
  if (filter) {
    return;
  }
  parsedMovies = [...parsedMovies, data];
  window.localStorage.setItem('favoritesMovies', JSON.stringify(parsedMovies));
}

export function deleteFromFavoritesMovies(movies, selectedID) {
  const filteredMovies = movies.filter(({ id }) => id !== selectedID);
  window.localStorage.setItem(
    'favoritesMovies',
    JSON.stringify(filteredMovies)
  );
  return filteredMovies;
}
