import { USERS_LIST, NEW_USER } from "utils/constants";
import * as types from "./actionTypes";

// Get Theme from localStorage
const usersList = JSON.parse(localStorage.getItem(USERS_LIST));

const initialState = {
  loading: false,
  usersList: usersList || [], //[{ name: "Gui Mend", date: Date.now() }],
  newUser: {}
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.NEW_USER:
      const newList = [action.user, ...state.usersList];
      localStorage.setItem(USERS_LIST, JSON.stringify(newList));
      localStorage.removeItem(NEW_USER);
      return { ...state, usersList: newList };

    default:
      return state;
  }
}

export default appReducer;
