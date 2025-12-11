import React, { useState } from "react";
const UseStateHook = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
    email: "john@gmail.com",
  });

  const [email, setEmail] = useState("");

  return (
    <div>
      <h2>User Profile</h2>
      <div style={{ backgroundColor: "#9c2d2e" }}>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
        <p>Occupation: {profile.occupation}</p>
        <p>Email: {profile.email}</p>
      </div>

      <div>
        <input
          type="email"
          placeholder="Update Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={() => setProfile({ ...profile, email: email })}>
          Update Email
        </button>
      </div>
    </div>
  );
};

export default UseStateHook;

/*
You're building a React component and want to manage a user's profile information, which includes their name, age, occupation and email. If you use a single useState hook to store this information as an object, how should you update only the user's email without losing the existing name and age when the user changes their email in an input field?
*/
