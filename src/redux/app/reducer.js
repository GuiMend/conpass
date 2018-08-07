import * as types from "./actionTypes";

const initialState = {
  loading: false
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
