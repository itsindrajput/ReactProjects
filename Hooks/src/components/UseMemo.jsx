import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const cubeCalculation = (num) => {
    console.log("Calculating cube...");
    return Math.pow(num, 3);
  };

  // const result = cubeCalculation(number);
  const result = useMemo(() => {
    return cubeCalculation(number);
  }, [number]);

  return (
    <>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <p>Cube Of Entered Number: {result}</p>
      <hr />
      <button onClick={() => setCount(count + 1)}>Count</button>
      <p>{count}</p>
    </>
  );
};

export default UseMemo;
