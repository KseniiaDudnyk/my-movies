import { createSelector } from 'reselect';

const selectReview = (state) => state.reviewInput;

export const selectMovieRate = createSelector(
  [selectReview],
  (reviewInput) => reviewInput.movieRate
);

export const selectMovieGenres = createSelector(
  [selectReview],
  (reviewInput) => reviewInput.movieGenres
);

export const selectMovieTitle = createSelector(
  [selectReview],
  (reviewInput) => reviewInput.movieTitle
);

export const selectMovieReview = createSelector(
  [selectReview],
  (reviewInput) => reviewInput.movieReview
);

export const selectMoviePosterLink = createSelector(
  [selectReview],
  (reviewInput) => reviewInput.moviePosterLink
);

export const selectIsMovieFavorite = createSelector(
  [selectReview],
  (reviewInput) => reviewInput.isFavorite
);

export const selectInputsForReview = createSelector(
  [selectReview],
  (reviewInput) => reviewInput
);