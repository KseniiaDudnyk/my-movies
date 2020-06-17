import { ReviewsActionTypes } from './review-inputs.types';

export const addMovieRate = (rate) => ({
  type: ReviewsActionTypes.ADD_MOVIE_RATE,
  payload: rate,
});

export const addMovieGenre = (genres) => ({
  type: ReviewsActionTypes.ADD_MOVIE_GENRE,
  payload: genres,
});

export const addMovieTitle = (title) => ({
  type: ReviewsActionTypes.ADD_MOVIE_TITLE,
  payload: title,
});

export const addMovieReview = (review) => ({
  type: ReviewsActionTypes.ADD_MOVIE_REVIEW,
  payload: review,
});
