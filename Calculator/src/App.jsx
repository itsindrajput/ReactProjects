import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import "./App.css";

const App = () => {
  const [calvalue, setCalValue] = useState("");

  const onHandle = (item) => {
    if (item === "C") {
      setCalValue("");
    } else if (item === "=") {
      try {
        const result = eval(calvalue);
        setCalValue(result.toString());
      } catch (error) {
        setCalValue("Error");
      }
    } else {
      setCalValue((prev) => prev + item);
    }
  };

  return (
    <>
      <Header />
      <div className="calculator-container">
        <Display display={calvalue} />
        <ButtonContainer handle={onHandle} />
      </div>
      <Footer />
    </>
  );
};

export default App;
