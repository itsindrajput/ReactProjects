import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

const userData = {
  name: "John Doe",
  age: 30,
  email: "john@gmail.com",
};

const App = () => {
  return (
    <>
      <div>
        <Header />
        <h2>Welcome to my React App</h2>
        <Profile user={userData} />
        <Footer />
      </div>
    </>
  );
};
export default App;
