import { ReviewsDataActionTypes } from './reviews-data.types';

export const addMovieReviewData = (reviewData) => ({
  type: ReviewsDataActionTypes.ADD_MOVIE_REVIEW_DATA,
  payload: reviewData,
});

export const toggleReviewTextHidden = (title) => ({
  type: ReviewsDataActionTypes.TOGGLE_REVIEW_TEXT_HIDDEN,
  payload: title,
});
