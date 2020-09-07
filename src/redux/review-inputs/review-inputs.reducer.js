import { ReviewActionTypes } from './review-inputs.types';
import { MoviesDataActionTypes } from '../movies-data/movies-data.types';

const INITIAL_STATE = {
  movieRate: '0',
  movieGenres: [],
  movieTitle: '',
  movieReview: '',
  moviePosterLink: '',
  isFavorite: false,
  id: ''
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
        movieGenres: [...state.movieGenres, action.payload]
      };

    case ReviewActionTypes.REMOVE_MOVIE_GENRE:
      return {
        ...state,
        movieGenres: action.payload
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
      return INITIAL_STATE;

    case ReviewActionTypes.TOGGLE_FAVORITE:
      return {
        ...state,
        isFavorite: !state.isFavorite,
      };

    case MoviesDataActionTypes.SELECT_FOR_REVIEW:
      return {
        ...state,
        id:action.payload.id,
        movieGenres: action.payload.genres,
        movieTitle: action.payload.title,
        movieReview: action.payload.review,
        moviePosterLink: action.payload.posterUrl,
      };

    default:
      return state;
  }
};

export default reviewReducer;
