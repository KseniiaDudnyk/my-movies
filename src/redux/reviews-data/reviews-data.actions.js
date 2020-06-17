import { ReviewsDataActionTypes } from './reviews-data.types';

export const addMovieReviewData = (reviewData) => ({
  type: ReviewsDataActionTypes.ADD_MOVIE_REVIEW_DATA,
  payload: reviewData,
});
