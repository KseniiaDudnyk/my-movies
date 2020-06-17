import { ReviewsActionTypes } from './reviews.types';

const INITIAL_STATE = {
  allReviews: [],
  movieRate: '0',
};

const reviewsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReviewsActionTypes.ADD_RATE:
      return {
        ...state,
        movieRate: action.payload,
      };

    default:
      return state;
  }
};

export default reviewsReducer;
