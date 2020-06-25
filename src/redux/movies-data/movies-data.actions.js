import { MoviesDataActionTypes } from './movies-data.types';

export const addMovieReview = (review) => ({
  type: MoviesDataActionTypes.ADD_MOVIE_REVIEW,
  payload: review,
});

export const toggleReviewTextHidden = (movieId) => ({
  type: MoviesDataActionTypes.TOGGLE_REVIEW_TEXT_HIDDEN,
  payload: movieId,
});

export const selectWatched = (movieId) => ({
  type: MoviesDataActionTypes.SELECT_WATCHED,
  payload: movieId,
});
