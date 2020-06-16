import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import reviewsReducer from './reviews/reviews.reducer';

export default combineReducers({
  user: userReducer,
  reviews: reviewsReducer,
});
