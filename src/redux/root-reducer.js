import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import reviewReducer from './review-inputs/review-inputs.reducer';

export default combineReducers({
  user: userReducer,
  review: reviewReducer,
});
