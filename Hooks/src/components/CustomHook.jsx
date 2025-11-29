import React, { useEffect, useState } from "react";

const CustomHook = () => {
  const [name, setName] = useState(
    localStorage.getItem("name") ? localStorage.getItem("name") : ""
  );

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <div>
      <h2>Custom Hook: useLocalStorage</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is: {name}</p>
    </div>
  );
};

export default CustomHook;
