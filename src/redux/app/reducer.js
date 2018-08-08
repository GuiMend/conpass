import { USERS_LIST } from "utils/constants";
import * as types from "./actionTypes";

// Get Theme from localStorage
const usersList = localStorage.getItem(USERS_LIST);

const initialState = {
  loading: false,
  usersList: usersList || [], //[{ name: "Gui Mend", date: Date.now() }],
  newUser: {}
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOADING:
      return { ...state, is_loading: action.loading };
    default:
      return state;
  }
}

export default appReducer;
