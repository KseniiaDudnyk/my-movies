import { UserActionTypes } from './user.types';

export const getCurrentUser = (user) => ({
  type: UserActionTypes.GET_USER_DATA,
  payload: user,
});
