import React from 'react';

const Movie = ({ movie }) =>
  <div className="well">
    <div className="row">
      <div className="col-md-4">
        <img
          className="thumbnail"
          src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
        />
      </div>
      <div className="col-md-8">
        <h4>
          {movie.title}
        </h4>
        <ul className="list-group">
          <li className="list-group-item">
            Год: {movie.release_date}
          </li>
          <li className="list-group-item">
            Описание: {movie.overview}
          </li>
        </ul>
      </div>
    </div>
  </div>;

export default Movie;
