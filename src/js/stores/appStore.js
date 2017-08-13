import dispatcher from '../dispatchers/dispatchers';
import { EventEmitter } from 'events';
import c from '../constants/constants';
import appApi from '../utils/appApi';

const CHANGE_EVENT = 'change';

let _movies = [];
let _selected = '';

const appStore = Object.assign({}, EventEmitter.prototype, {
  setMovieResults(movies) {
    _movies = movies;
  },
  getMovieResults() {
    return _movies;
  },
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
});

dispatcher.register(payload => {
  const action = payload.action;

  switch (action.actionType) {
    case c.SEARCH_MOVIES:
      appApi.searchMovies(action.movie.title);
    case c.RECEIVE_MOVIE:
      appStore.setMovieResults(action.movies);
      appStore.emitChange();
  }

  return true;
});

export default appStore;
