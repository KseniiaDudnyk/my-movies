import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GET_USER_DATA:
      return {
        ...state,
        currentUser: action.payload,
      };
    
    case UserActionTypes.UPDATE_USER_DATA_FIELD:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          ...action.payload
        }
      };

    default:
      return state;
  }
};

export default userReducer;
