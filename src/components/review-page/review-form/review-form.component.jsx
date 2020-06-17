import React from 'react';

import './review-form.styles.scss';

import { Button } from '@material-ui/core';

import ReviewInput from '../review-input/review-input.component';
import MovieGenres from '../movie-genres/movie-genres.component';
import MovieRate from '../movie-rate/movie-rate.component';

const submitReview = () => {
  console.log('hi');
};

const ReviewForm = () => (
  <div>
    <ReviewInput />
    <MovieGenres />
    <MovieRate />
    <div className='submit-btn'>
      <Button variant='contained' component='span' onClick={submitReview}>
        Save Review
      </Button>
    </div>
  </div>
);

export default ReviewForm;
