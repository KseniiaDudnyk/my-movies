import { createSelector } from 'reselect';

const selectReviews = (state) => state.reviews;

export const selectMovieRate = createSelector(
  [selectReviews],
  (reviews) => reviews.movieRate
);

export const selectMovieGenres = createSelector(
  [selectReviews],
  (reviews) => reviews.movieGenres
);

export const selectMovieTitle = createSelector(
  [selectReviews],
  (reviews) => reviews.movieTitle
);

export const selectMovieReview = createSelector(
  [selectReviews],
  (reviews) => reviews.movieReview
);
