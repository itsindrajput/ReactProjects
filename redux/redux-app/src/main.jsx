import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App.jsx";

// Note: Provider makes the Redux store available to any nested components
// that need to access the Redux store. You can use useSelector and useDispatch
// hooks in those nested components to interact with the store.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
