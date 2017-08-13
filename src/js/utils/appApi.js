import actions from '../actions/actions';

const apiKey = '5a4f67c4f08a84022446b3686f053ca7';

export default {
  searchMovies(movie) {
    const encodedMovie = encodeURIComponent(movie || 'batman');
    $.ajax({
      url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=ru&query=${encodedMovie}`,
      dateType: 'json',
      cache: false,
      success(data) {
        actions.receivieResults(data.results);
      },
      error(xhr, status, err) {
        alert(err);
      }
    });
  }
};
