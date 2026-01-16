import React from "react";
import { createRoot } from "react-dom/client";   // <-- import from react-dom/client
import App from "@repeatome/karyotype";

// console.log("App from @repeatome/karyotype:", App, typeof App);
const container = document.getElementById("karyotype_div");
if (!container) {
  throw new Error('Missing <div id="karyotype_div"> in your HTML/template');
}

const dataAttrBed = container.getAttribute("data-karyo-bed");
// const dataBed = dataAttr ? JSON.parse(dataAttr) : null;
const dataAttrTsv = container.getAttribute("data-karyo-txt");
const dataAttrParent = container.getAttribute("data-karyo-parent");
// const dataTsv = dataAttr ? JSON.parse(dataAttr) : null;

if (container) {
  const root = createRoot(container);
  root.render(<App />);                          // <-- JSX, not App without <>
}
