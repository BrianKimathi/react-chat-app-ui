import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import Redux Provider and store
import { Provider } from "react-redux";
import store from "./components/store/store.js"; // Ensure this is the correct path to your Redux store

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
