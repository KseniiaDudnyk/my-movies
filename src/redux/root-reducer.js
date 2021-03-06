import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import reviewReducer from './review-inputs/review-inputs.reducer';
import moviesDataReducer from './movies-data/movies-data.reducer';

export default combineReducers({
  user: userReducer,
  reviewInput: reviewReducer,
  moviesData: moviesDataReducer,
});
