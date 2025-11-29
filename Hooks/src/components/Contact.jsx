import React, { useContext } from "react";
import { AppContext } from "../context/AppContex";

const Contact = () => {
  const {phone, address} = useContext(AppContext)
  return (
    <div>
      <h4>This is Contact Component</h4>
      <p>Phone Number: {phone}</p>
      <p>
        <i>Address: {address}</i>
      </p>
    </div>
  );
};

export default Contact;
