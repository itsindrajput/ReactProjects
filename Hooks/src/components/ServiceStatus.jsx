/*
Imagine you're building a simple status display for an online service. You want to show whether the service is "Online" or "Offline" and update this status every few seconds, simulating a check.

Your task:

Create a React functional component called ServiceStatus.
Use useState to manage a status variable, initialized to "Checking...".
Use useEffect to toggle the status between "Online" and "Offline" every 3000 milliseconds (3 seconds). It should start as "Online" after the initial "Checking...".
Display the current status in your component.
This will involve using setInterval inside useEffect and clearing it up when the component unmounts to prevent memory leaks (a common and important pattern with useEffect and timers!).
*/

import React, { useState, useEffect } from "react";

const ServiceStatus = () => {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    let currentStatus = "Online";
    setStatus(currentStatus);

    const interval = setInterval(() => {
      setStatus((prevStatus) =>
        prevStatus === "Online" ? "Offline" : "Online"
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2>Practice UseEffect Hook Here!</h2>
      <div>
        <h1>Display Status: {status}</h1>
        <button onClick={() => setStatus("Checking...")}>Reset Status</button>
      </div>
    </>
  );
};

export default ServiceStatus;
