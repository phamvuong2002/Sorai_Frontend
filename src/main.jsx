import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./contexts/ProductContext.jsx";
// import { AppProvider } from "./contexts/main/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <React.StrictMode>
      <Router>
        {/* <AppProvider> */}
        <App />
        {/* </AppProvider> */}
      </Router>
    </React.StrictMode>
  </ProductProvider>
);
