// src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // your main app component
import "./index.css"

// Find the root div in your HTML
const rootElement = document.getElementById("karyotype_div");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);