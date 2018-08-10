import * as types from "./actionTypes";

export const addNewUser = user => ({
  type: types.NEW_USER,
  user
});
