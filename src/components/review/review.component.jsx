import React from 'react';

import './review.styles.scss';
import ReviewInput from '../review-input/review-input.component';
import Checkboxes from '../checkboxes/checkboxes.component';

const Review = () => (
  <div>
    <ReviewInput />
    <Checkboxes />
  </div>
);

export default Review;
