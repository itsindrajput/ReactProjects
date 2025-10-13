// src/redux/actions.js
// action types
export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";
export const INCREMENT_BY = "counter/INCREMENT_BY";

// simple actions returning action objects
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const incrementBy = (amount) => ({
  type: INCREMENT_BY,
  payload: amount,
});

// async (thunk) example — optional if you add thunk middleware
// this action creator returns a function instead of an action object
export const incrementAsync =
  (amount = 1) =>
  (dispatch) => {
    setTimeout(() => {
      dispatch(incrementBy(amount));
    }, 1000);
  };
