import React, { useReducer } from "react";

const UseReducer = () => {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "input":
        return { count: action.payload };
      default:
        return state;
    }
  };

  const [currentState, dispatcher] = useReducer(reducer, initialState);
  return (
    <>
      <h2>UseReducer Component</h2>
      <p>Count: {currentState.count}</p>
      <button onClick={() => dispatcher({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => dispatcher({ type: "decrement" })}>
        Decrement
      </button>
      <br />
      <br />
      <input
        type="number"
        placeholder="Type something..."
        value={currentState.count}
        onChange={(e) =>
          dispatcher({ type: "input", payload: Number(e.target.value) })
        }
      />
    </>
  );
};

export default UseReducer;
