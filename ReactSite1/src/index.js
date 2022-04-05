import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { render } from "react-dom";
import App from "./App";
import React from "react";


const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  rootElement
);
