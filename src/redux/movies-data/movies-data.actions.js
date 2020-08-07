import { MoviesDataActionTypes } from './movies-data.types';

export const getMovies = (movies) => ({
  type: MoviesDataActionTypes.GET_MOVIES,
  payload: movies,
});

export const getMovieGenres = (genres) => ({
  type: MoviesDataActionTypes.GET_MOVIE_GENRES,
  payload: genres,
});

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

export const leaveReview = (movie) => ({
  type: MoviesDataActionTypes.LEAVE_REVIEW,
  payload: movie,
});
