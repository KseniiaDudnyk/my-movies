import { ReviewActionTypes } from './review-inputs.types';

const INITIAL_STATE = {
  movieRate: '0',
  movieGenres: [],
  movieTitle: '',
  movieReview: '',
  moviePosterLink: '',
  isFavorite: false,
};

const reviewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReviewActionTypes.ADD_MOVIE_RATE:
      return {
        ...state,
        movieRate: action.payload,
      };

    case ReviewActionTypes.ADD_MOVIE_GENRE:
      return {
        ...state,
        movieGenres: action.payload,
      };

    case ReviewActionTypes.ADD_MOVIE_TITLE:
      return {
        ...state,
        movieTitle: action.payload,
      };

    case ReviewActionTypes.ADD_MOVIE_REVIEW_TEXT:
      return {
        ...state,
        movieReview: action.payload,
      };

    case ReviewActionTypes.ADD_MOVIE_POSTER_LINK:
      return {
        ...state,
        moviePosterLink: action.payload,
      };

    case ReviewActionTypes.RESET_REDUCER_DATA:
      return {
        state: INITIAL_STATE,
      };

    case ReviewActionTypes.TOGGLE_FAVORITE:
      return {
        ...state,
        isFavorite: !state.isFavorite,
      };

    default:
      return state;
  }
};

export default reviewReducer;
