import React, { useState } from 'react';
import RateMovieButton from './RateMovieButton';
import './MovieSelector.css';

const MovieSelector = () => {
  const [selectedMovie, setSelectedMovie] = useState('');

  const handleMovieChange = (event) => {
    setSelectedMovie(event.target.value);
  };

  return (
    <div className="movie-selector">
      <select onChange={handleMovieChange}>
        <option value="">Select a movie</option>
        <option value="Interstellar">Interstellar</option>
        <option value="No Country for Old Men">No Country for Old Men</option>
        <option value="War for the Planet of the Apes">War for the Planet of the Apes</option>
        <option value="Zodiac">Zodiac</option>
        <option value="There Will Be Blood">There Will Be Blood</option>
        <option value="The Lighthouse">The Lighthouse</option>
      </select>
      {selectedMovie && (
        <div>
          <img 
            src={`/${selectedMovie}.jpg`} 
            alt={`${selectedMovie} Poster`} 
            className="movie-poster"
          />
          <RateMovieButton />
        </div>
      )}
    </div>
  );
};

export default MovieSelector;
