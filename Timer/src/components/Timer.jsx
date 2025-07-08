import React, { useRef, useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {
  const inputRef = useRef(null);
  const timerRef = useRef(null);
  const [sec, setSec] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => inputRef.current.focus(), []);

  const start = () => {
    if (!isRunning) {
      timerRef.current = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const pause = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setSec(0);
    setIsRunning(false);
  };

  return (
    <div className="timer-container">
      <h1 className="title">⏱ Timer App</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type and Press Enter."
        className="text-input"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            alert(`You Have Entered: ${inputRef.current.value}!`);
          }
        }}
      />
      <h2 className="seconds">{sec} seconds</h2>
      <div className="btn-group">
        <button onClick={start} className="btn start">
          Start
        </button>
        <button onClick={pause} className="btn pause">
          Pause
        </button>
        <button onClick={reset} className="btn reset">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
