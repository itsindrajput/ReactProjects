import React, { useContext } from "react";
import { AppContext } from "../context/AppContex";

const Footer = () => {
  const { phone, address } = useContext(AppContext);
  return (
    <div>
      <h2>This is Footer Component</h2>
      <p>Phone Number: {phone}</p>
      <p>
        <i>Address: {address}</i>
      </p>
    </div>
  );
};

export default Footer;
