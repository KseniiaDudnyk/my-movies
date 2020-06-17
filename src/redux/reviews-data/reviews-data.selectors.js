import { createSelector } from 'reselect';

const selectReviewsData = (state) => state.review;

export const selectReviews = createSelector(
  [selectReviews],
  (reviewsData) => reviewsData.reviews
);
