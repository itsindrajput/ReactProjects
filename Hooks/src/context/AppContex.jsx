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
