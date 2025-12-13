import React from "react";
import { createRoot } from "react-dom/client";   // <-- import from react-dom/client
import App from "@repeatome/karyotype";

console.log("App from @repeatome/karyotype:", App, typeof App);

const container = document.getElementById("karyotype_div");
if (container) {
  const root = createRoot(container);
  root.render(<App />);                          // <-- JSX, not App without <>
}
