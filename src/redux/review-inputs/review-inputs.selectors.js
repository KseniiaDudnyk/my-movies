import { createSelector } from 'reselect';

const selectReview = (state) => state.review;

export const selectMovieRate = createSelector(
  [selectReview],
  (review) => review.movieRate
);

export const selectMovieGenres = createSelector(
  [selectReview],
  (review) => review.movieGenres
);

export const selectMovieTitle = createSelector(
  [selectReview],
  (review) => review.movieTitle
);

export const selectMovieReview = createSelector(
  [selectReview],
  (review) => review.movieReview
);

export const selectMoviePosterLink = createSelector(
  [selectReview],
  (review) => review.moviePosterLink
);
