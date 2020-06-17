import { ReviewsDataActionTypes } from './reviews-data.types';

const INITIAL_STATE = {
  reviews: [],
};

const reviewsDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReviewsDataActionTypes.ADD_MOVIE_REVIEW_DATA:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    default:
      return state;
  }
};

export default reviewsDataReducer;
