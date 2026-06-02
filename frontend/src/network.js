import React from "react";
import { createRoot } from "react-dom/client";
import App from "@repeatome/network";

const container = document.getElementById("network-container");

if (container) {
  createRoot(container).render(<App />);
}