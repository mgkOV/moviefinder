import React, { Component } from 'react';
import actions from '../actions/actions';

class SearchForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const movie = {
      title: this.title.value.trim()
    };

    actions.searchMovies(movie);
  };

  render() {
    return (
      <div className="search-form">
        <h1 className="text-center">Найти фильм:</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              ref={input => (this.title = input)}
              className="form-control"
              placeholder="Название фильма..."
            />
          </div>
          <button className="btn btn-primary btn-block">Найти</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
