import React, { useRef } from "react";

const UseRefPract2 = () => {
  const inputElement = useRef();

  const btnClicked = () => {
    console.log(inputElement.current.value);
    inputElement.current.focus();
  };

  return (
    <div>
      <h2>UseRef Practice 2 Component</h2>
      <input type="text" placeholder="Type something..." ref={inputElement} />
      <button onClick={btnClicked}>Focus Input</button>
    </div>
  );
};

export default UseRefPract2;
