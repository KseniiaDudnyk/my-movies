import { MoviesDataActionTypes } from './movies-data.types';

export const addMovieReview = (review) => ({
  type: MoviesDataActionTypes.ADD_MOVIE_REVIEW,
  payload: review,
});

export const toggleReviewTextHidden = (title) => ({
  type: MoviesDataActionTypes.TOGGLE_REVIEW_TEXT_HIDDEN,
  payload: title,
});
