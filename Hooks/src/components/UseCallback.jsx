import React, { useCallback, useState } from "react";
import Header from "./Header";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  // const newFn = () => {};
  const newFn = useCallback(() => {}, []);
  return (
    <div>
      <Header newFn={newFn} />
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>
    </div>
  );
};

export default UseCallback;

/*
useCallback is a React Hook that memoizes (caches) a function so that it does not get recreated on every render — unless its dependencies change.

This is useful when you’re passing functions down to child components that rely on reference equality (e.g., via React.memo), because in React, functions are objects, and a new function reference gets created on every render unless it’s memoized.
*/
