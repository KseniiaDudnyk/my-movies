import { createSelector } from 'reselect';

const selectReviews = (state) => state.reviews;

export const selectMovieRate = createSelector(
  [selectReviews],
  (reviews) => reviews.movieRate
);
