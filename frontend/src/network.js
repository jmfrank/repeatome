import React from "react";
import { render } from "react-dom";
import App from "@repeatome/network";

const container = document.getElementById("network-container");

const dataAttr = container.getAttribute("data-network");
const data = dataAttr ? JSON.parse(dataAttr) : null;

if (container) {
  const root = createRoot(container);
  root.render(<App />);
}