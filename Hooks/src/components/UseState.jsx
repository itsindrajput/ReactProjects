/*
You're building a React component and want to manage a user's profile information, which includes their name, age, occupation and email. If you use a single useState hook to store this information as an object, how should you update only the user's email without losing the existing name and age when the user changes their email in an input field?
*/
import { useState } from "react";

function UseState() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    age: 30,
    occupation: "Developer",
    email: "john@gmail.com",
  });

  const [newEmail, setNewEmail] = useState("");

  const updateEmail = () => {
    setProfile({ ...profile, email: newEmail });
  };

  return (
    <>
      <h1>Hello My Name is {profile.name}</h1>
      <p>Age: {profile.age}</p>
      <p>Occupation: {profile.occupation}</p>
      <p>Email: {profile.email}</p>
      <div>
        <input
          type="text"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          placeholder="Change you Email"
        />
        <button onClick={updateEmail}>Update Email</button>
      </div>
    </>
  );
}

export default UseState;
