import React from 'react';
import Movie from './Movie';

const MovieResults = ({ movies }) => {
  const renderMovies = () => {
    return movies.map((movie, idx) => <Movie movie={movie} key={idx} />);
  };
  return (
    <div>
      <h3>Найдено:</h3>
      {renderMovies()}
    </div>
  );
};

export default MovieResults;
