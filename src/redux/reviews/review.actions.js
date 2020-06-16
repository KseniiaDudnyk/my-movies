import { ReviewsActionTypes } from './reviews.types';

export const addMovieRate = (rate) => ({
  type: ReviewsActionTypes.ADD_RATE,
  payload: rate,
});
