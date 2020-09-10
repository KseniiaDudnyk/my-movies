import { UserActionTypes } from './user.types';

export const getCurrentUser = (user) => ({
  type: UserActionTypes.GET_USER_DATA,
  payload: user,
});

export const updateUserDataField = (fieldData) => ({
  type: UserActionTypes.UPDATE_USER_DATA_FIELD,
  payload: fieldData
});
