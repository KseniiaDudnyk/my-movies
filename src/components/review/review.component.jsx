import React from 'react';

import './review.styles.scss';
import ReviewInput from '../review-input/review-input.component';
import Checkboxes from '../checkboxes/checkboxes.component';
import MovieRate from '../movie-rate/movie-rate.component';

const Review = () => (
  <div>
    <ReviewInput />
    <Checkboxes />
    <MovieRate />
  </div>
);

export default Review;
