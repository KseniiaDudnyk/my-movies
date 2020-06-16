import React from 'react';

import './review.styles.scss';

import { Button } from '@material-ui/core';

import ReviewInput from '../review-input/review-input.component';
import Checkboxes from '../checkboxes/checkboxes.component';
import MovieRate from '../movie-rate/movie-rate.component';

const submitReview = () => {
  console.log('hi');
};

const Review = () => (
  <div>
    <ReviewInput />
    <Checkboxes />
    <MovieRate />
    <div className='submit-btn'>
      <Button variant='contained' component='span' onClick={submitReview}>
        Save Review
      </Button>
    </div>
  </div>
);

export default Review;
