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

export const addMovieReviewText = (reviewText) => ({
  type: ReviewActionTypes.ADD_MOVIE_REVIEW_TEXT,
  payload: reviewText,
});

export const addMoviePosterLink = (link) => ({
  type: ReviewActionTypes.ADD_MOVIE_POSTER_LINK,
  payload: link,
});

export const resetReviewInputReducerData = () => ({
  type: ReviewActionTypes.RESET_REDUCER_DATA,
});

export const toggleFavorite = (title) => ({
  type: ReviewActionTypes.TOGGLE_FAVORITE,
  payload: title,
});
