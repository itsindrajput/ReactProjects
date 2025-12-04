import React from "react";

const Profile = ({ user }) => {
  return (
    <div>
      <h3>This is {user.name} Profile</h3>
      <h5>Name: {user.name}</h5>
      <h5>Age: {user.age}</h5>
      <h5>Email: {user.email}</h5>
    </div>
  );
};

export default Profile;
