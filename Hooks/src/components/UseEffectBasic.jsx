/*
Built a React component that uses useEffect to increment a counter every 2 seconds.
*/

import React, { useState, useEffect } from "react";

const UseEffectBasic = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let serInterval = setInterval(() => {
      setValue(() => value + 1);
    }, 2000);

    return () => clearInterval(serInterval);
  }, []);

  return (
    <div>
      <h1>{value} Time our Componets Got Rerender!</h1>
    </div>
  );
};

export default UseEffectBasic;
