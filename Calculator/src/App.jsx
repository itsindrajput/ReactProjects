import { useState } from "react";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Display from "./componets/Display";
import ButtonContainer from "./componets/ButtonContainer";

const App = () => {
  const [calvalue, setCalValue] = useState("");

  const onHandle = (item) => {
    if ("C" === item) {
      setCalValue(" ");
    } else if ("=" === item) {
      const result = eval(calvalue);
      setCalValue(result);
    } else {
      const numValue = calvalue + item;
      setCalValue(numValue);
    }
  };

  return (
    <>
      <Header></Header>
      <center style={{ margin: "50px" }}>
        <Display display={calvalue}></Display>
        <ButtonContainer handle={onHandle}></ButtonContainer>
      </center>
      <Footer></Footer>
    </>
  );
};

export default App;
