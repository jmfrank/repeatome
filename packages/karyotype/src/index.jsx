// src/index.jsx
import React from "react";
import { createRoot } from "react-dom/client"; 
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("karyotype_div");
if (!rootElement) {
  throw new Error("Missing <div id=\"karyotype_div\"> in your HTML/template");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
