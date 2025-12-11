import { createContext } from "react";
export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "123-456-7890";
  const address = "123 Main St, Anytown, USA";

  return (
    <AppContext.Provider value={{ phone, address }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;

//Step 1: Creating/Defining The Contex inside a context folder in src.
