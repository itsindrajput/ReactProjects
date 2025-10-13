// src/redux/reducer.js
import { INCREMENT, DECREMENT, INCREMENT_BY } from "./actions";
import { combineReducers } from "redux";

const initialCounterState = { value: 0 };

function counterReducer(state = initialCounterState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    case INCREMENT_BY:
      return { ...state, value: state.value + (action.payload || 0) };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
  // add other reducers here
  // user: userReducer,
  // posts: postsReducer,
});
export default rootReducer;
