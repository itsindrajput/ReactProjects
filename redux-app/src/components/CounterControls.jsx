// src/components/CounterControls.js
import React from "react";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementBy,
  incrementAsync,
} from "../redux/actions";
export default function CounterControls() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementBy(5))}>+5</button>
    </div>
  );
}
