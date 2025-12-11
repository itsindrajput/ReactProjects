import React, { useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>State Hooks In React!</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={()=>setCount(count+1)}>Increment By 1</button>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(count -1)}>Decrement By 1</button>
      </div>
    </div>
  );
};

export default Hooks;
