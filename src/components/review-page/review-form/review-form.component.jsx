import React from 'react';

import './review-form.styles.scss';

import ReviewInput from '../review-input/review-input.component';
import MovieGenres from '../movie-genres/movie-genres.component';
import MovieRate from '../movie-rate/movie-rate.component';
import SubmitButton from '../submit-button/submit-button.component';

const ReviewForm = () => (
  <div>
    <ReviewInput />
    <MovieGenres />
    <MovieRate />
    <SubmitButton />
  </div>
);

export default ReviewForm;
