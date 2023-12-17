import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';

function MovieRating() {
  // State to manage the movie rating
  const [rating, setRating] = useState(0);

  // Function triggered when a star is clicked
  const onStarClick = (nextValue, prevValue, name) => {
    // Update the rating state with the newly selected value
    setRating(nextValue);
  };

  return (
    <div>
      {/* Display the current rating */}
      <h4>Rating: {rating}</h4>
      
      {/* Star rating component */}
      <StarRatingComponent
        name="star-rating" // Unique name for the component
        value={rating} // Current rating value
        onStarClick={onStarClick} // Function triggered on star click
      />
    </div>
  );
}

export default MovieRating;
