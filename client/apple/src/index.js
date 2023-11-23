import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./CommonResources/css/bootstrap.css";
import "./CommonResources/css/styles.css";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
