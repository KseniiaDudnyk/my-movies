import React from 'react';

import './review-form.styles.scss';

import ReviewInput from '../../components/review-page/review-input/review-input.component';
import MovieGenres from '../../components/review-page/movie-genres/movie-genres.component';
import MovieRate from '../../components/review-page/movie-rate/movie-rate.component';
import SubmitButton from '../../components/review-page/submit-button/submit-button.component';

const ReviewForm = () => (
  <div>
    <ReviewInput />
    <MovieGenres />
    <MovieRate />
    <SubmitButton />
  </div>
);

export default ReviewForm;
