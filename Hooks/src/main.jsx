import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import ContextProvider from "./context/AppContex.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ContextProvider>
);

//Step 2: Use The Context in the main.jsx
