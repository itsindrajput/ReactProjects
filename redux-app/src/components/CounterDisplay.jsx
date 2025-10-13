// src/components/CounterDisplay.jsx
import React from "react";
import { useSelector, shallowEqual } from "react-redux";

export default function CounterDisplay() {
  // basic usage: select primitive value
  const value = useSelector((state) => state.counter.value);
  return <div>Counter: {value}</div>;
}
