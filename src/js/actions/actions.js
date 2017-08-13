import dispatcher from '../dispatchers/dispatchers';
import c from '../constants/constants';

export default {
  searchMovies(movie) {
    dispatcher.handleViewAction({
      actionType: c.SEARCH_MOVIES,
      movie
    });
  },
  receivieResults(movies) {
    dispatcher.handleViewAction({
      actionType: c.RECEIVE_MOVIE,
      movies
    });
  }
};
