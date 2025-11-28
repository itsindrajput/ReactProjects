/* Create A counter which will count how many times our component got rerenders. */
import React, { useEffect, useRef, useState } from "react";

const UseRefPract = () => {
  const [value, setValue] = useState(0);
  {
    /*
      const [count, setCount] = useState(0);
      useEffect(() => {
        setCount((prev) => prev + 1);
      }, [value]);
    */
  }

  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <div>
        <button onClick={() => setValue((prev) => prev - 1)}>-1</button>
        <p>Value: {value}</p>
        <button onClick={() => setValue((prev) => prev + 1)}>+1</button>

        {/* <p>Re-render Count: {count}</p> */}
        
        <p>Re-render Count: {count.current}</p>
      </div>

      <div>UseRef</div>
      <p>
        useRef is a hook that allows you to persist values between renders
        without causing a re-render when the value changes. It can be used to
        store a mutable value that does not cause a re-render when updated, or
        to access a DOM element directly.
      </p>
      <h4>useRef is commonly used for:</h4>
      <ol>
        <li>Storing mutable values that do not trigger re-renders.</li>
        <li>Accessing and manipulating DOM elements directly.</li>
        <li>Keeping track of previous state values.</li>
      </ol>
    </>
  );
};

export default UseRefPract;
