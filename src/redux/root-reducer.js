import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import reviewsReducer from './review-inputs/review-inputs.reducer';

export default combineReducers({
  user: userReducer,
  reviews: reviewsReducer,
});
