import React, { useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  useEffect(() => {
    console.log("UseEffect mounted");
  }, []);

  useLayoutEffect(() => {
    console.log("UseLayoutEffect mounted");
  }, []);

  return (
    <div>
      <h2>UseLayoutEffect Component</h2>
      <p>
        Check the console to see the order of logs from useEffect and
        useLayoutEffect.
      </p>
      <p>
        {Array(40000)
          .fill("")
          .map((item, index) => (
            <li key={index}>{Math.pow(Math.random() * 10, 5)}</li>
          ))}
      </p>
    </div>
  );
};

export default UseLayoutEffect;
