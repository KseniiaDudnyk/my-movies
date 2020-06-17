import { ReviewsActionTypes } from './review-inputs.types';

const INITIAL_STATE = {
  movieRate: '0',
  movieGenres: [],
  movieTitle: '',
  movieReview: '',
};

const reviewsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReviewsActionTypes.ADD_MOVIE_RATE:
      return {
        ...state,
        movieRate: action.payload,
      };

    case ReviewsActionTypes.ADD_MOVIE_GENRE:
      return {
        ...state,
        movieGenres: action.payload,
      };

    case ReviewsActionTypes.ADD_MOVIE_TITLE:
      return {
        ...state,
        movieTitle: action.payload,
      };

    case ReviewsActionTypes.ADD_MOVIE_REVIEW:
      return {
        ...state,
        movieReview: action.payload,
      };

    default:
      return state;
  }
};

export default reviewsReducer;
