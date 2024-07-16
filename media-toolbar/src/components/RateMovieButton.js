import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

const RateMovieButton = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const ratingChanged = (newRating) => {
    setRating(newRating);
    setFeedback(`You rated this movie ${newRating} stars!`);
  };

  return (
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default RateMovieButton;
