import React from "react";
import UseState from "./components/UseState";
import ServiceStatus from "./components/ServiceStatus";
import UseEffectBasic from "./components/useEffectBasic";
import UseRefPract from "./components/UseRefPract";
import UseRefPract2 from "./components/UseRefPract2";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/UseCallback";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import UseReducer from "./components/UseReducer";
import UseLayoutEffect from "./components/UseLayoutEffect";
import CustomHook from "./components/CustomHook";

const App = () => {
  return (
    <>
      {/* 
        <UseState /> 
        <ServiceStatus />
        <UseEffectBasic />
        <UseRefPract />
        <UseRefPract2 />
        <UseMemo />
        <UseCallback />
      */}

      {/* 
        <Header />
        <Profile />
        <Footer />
      */}

      {/*<UseReducer />
      <UseLayoutEffect />*/}
      <CustomHook />
    </>
  );
};

export default App;
