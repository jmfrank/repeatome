import React from "react";
import { render } from "react-dom";
import App from "@repeatome/karyotype";

const container = document.getElementById("karyotype_div");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}