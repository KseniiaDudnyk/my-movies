import React from 'react';

import './review-form.styles.scss';

import MovieInputs from '../../components/movie-inputs/movie-inputs.component';
import MovieGenres from '../../components/movie-genres/movie-genres.component';
import MovieRate from '../../components/movie-rate/movie-rate.component';
import SubmitButton from '../../components/submit-button/submit-button.component';

const ReviewForm = () => (
  <div>
    <MovieInputs />
    <MovieGenres />
    <MovieRate />
    <SubmitButton />
  </div>
);

export default ReviewForm;
