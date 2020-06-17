import { ReviewActionTypes } from './review-inputs.types';

export const addMovieRate = (rate) => ({
  type: ReviewActionTypes.ADD_MOVIE_RATE,
  payload: rate,
});

export const addMovieGenre = (genres) => ({
  type: ReviewActionTypes.ADD_MOVIE_GENRE,
  payload: genres,
});

export const addMovieTitle = (title) => ({
  type: ReviewActionTypes.ADD_MOVIE_TITLE,
  payload: title,
});

export const addMovieReview = (review) => ({
  type: ReviewActionTypes.ADD_MOVIE_REVIEW,
  payload: review,
});

export const addMoviePosterLink = (link) => ({
  type: ReviewActionTypes.ADD_MOVIE_POSTER_LINK,
  payload: link,
});
