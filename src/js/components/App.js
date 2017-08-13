import React, { Component } from 'react';
import actions from '../actions/actions';
import store from '../stores/appStore';
import dispatcher from '../dispatchers/dispatchers';
import SearchForm from './SearchForm';
import MovieResults from './MovieResults';

const getAppState = () => ({
  movies: store.getMovieResults()
});

class App extends Component {
  state = getAppState();

  componentDidMount() {
    store.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    store.removeChangeListener(this._onChange);
  }

  _onChange = () => {
    this.setState(getAppState());
  };

  render() {
    let results = '';
    if (this.state.movies && this.state.movies.length > 0) {
      results = <MovieResults movies={this.state.movies} />;
    }

    return (
      <div>
        <SearchForm />
        {results}
      </div>
    );
  }
}

export default App;
