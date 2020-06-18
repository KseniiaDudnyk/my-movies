import { createSelector } from 'reselect';

const selectReviewsData = (state) => state.reviewsData;

export const selectReviews = createSelector(
  [selectReviewsData],
  (reviewsData) => reviewsData.reviews
);
