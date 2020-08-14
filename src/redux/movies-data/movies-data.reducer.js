import { MoviesDataActionTypes } from './movies-data.types';
import { ReviewActionTypes } from '../review-inputs/review-inputs.types';

const INITIAL_STATE = {
  movies: null,
  genres: null,
};

const moviesDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesDataActionTypes.GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };

    case MoviesDataActionTypes.GET_MOVIE_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    case MoviesDataActionTypes.ADD_MOVIE_REVIEW:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    case MoviesDataActionTypes.TOGGLE_REVIEW_TEXT_HIDDEN:
      return {
        ...state,
        movies: state.movies.map((el) => {
          if (el.id === action.payload) {
            return {
              ...el,
              isReviewTextHidden: !el.isReviewTextHidden,
            };
          } else {
            return {
              ...el,
            };
          }
        }),
      };

    case ReviewActionTypes.TOGGLE_FAVORITE:
      return {
        ...state,
        movies: state.movies.map((el) => {
          if (el.id === action.payload) {
            return {
              ...el,
              isFavorite: !el.isFavorite,
            };
          } else {
            return {
              ...el,
            };
          }
        }),
      };

    case MoviesDataActionTypes.LEAVE_REVIEW:
      return {
        ...state,
        movies: state.movies.map((el) => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              isWatched: true,
              review: action.payload.review,
              rate: action.payload.rate
            };
          } else {
            return {
              ...el,
            };
          }
        }),
      };

    default:
      return state;
  }
};

export default moviesDataReducer;
