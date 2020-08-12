import { ReviewActionTypes } from './review-inputs.types';

export const addMovieRate = (rate) => ({
  type: ReviewActionTypes.ADD_MOVIE_RATE,
  payload: rate,
});

export const addMovieGenre = (genreId) => ({
  type: ReviewActionTypes.ADD_MOVIE_GENRE,
  payload: genreId,
});

export const removeMovieGenre = (genreId) => ({
  type: ReviewActionTypes.REMOVE_MOVIE_GENRE,
  payload: genreId,
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

export const toggleFavorite = (movieId) => ({
  type: ReviewActionTypes.TOGGLE_FAVORITE,
  payload: movieId,
});
