import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import reviewReducer from './review-inputs/review-inputs.reducer';
import reviewsDataReducer from './reviews-data/reviews-data.reducer';

export default combineReducers({
  user: userReducer,
  reviewInput: reviewReducer,
  reviewsData: reviewsDataReducer,
});
