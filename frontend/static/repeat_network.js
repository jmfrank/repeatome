import Graph from "https://esm.sh/graphology";
import Sigma from "https://esm.sh/sigma";
import data from './repeat_network_db.json' with { type: 'json' };
// import { MouseCoords } from "https://esm.sh/sigma/types"

// TEST: BASIC GRAPH INSTANCE
// const graph = new Graph();
// graph.addNode("1", { label: "Node 1", x: 0, y: 0, size: 10, color: "blue" });
// graph.addNode("2", { label: "Node 2", x: 1, y: 1, size: 20, color: "red" });
// graph.addEdge("1", "2", { size: 5, color: "purple" });
// const sigmaInstance = new Sigma(graph, document.getElementById("network"));
// console.log(JSON.stringify(graph));

// TEST: IMPORTING DATA
// var data = {
//   options: { type: "mixed", multi: false, allowSelfLoops: true }, // optional
//   attributes: {}, // optional graph-level attributes
//   "nodes": [
//     { key: "1", attributes: {label: "Node 1", x: 0, y: 0, size: 10, color: "blue" }},
//     { key: "2", attributes: {label: "Node 2", x: 1, y: 1, size: 20, color: "red" }}
//   ],
//   "edges": [
//     { key: "e1", source: "1", target: "2", attributes: {size: 5, color: "purple" }}
//   ]
// }
// // console.log(data);
// const graph = new Graph();
// graph.import(data)
// console.log(JSON.stringify(graph));
// const sigmaInstance = new Sigma(graph, document.getElementById("network"));

function graphToPixel(x, y, renderer) {
  const camera = renderer.getCamera();
  const { x: camX, y: camY, ratio } = camera; // ratio = zoom level
  return {
    x: (x - camX) * ratio + renderer.getDimensions().width / 2,
    y: (y - camY) * ratio + renderer.getDimensions().height / 2,
  };
}

// Get only repeat data
var data_nodes = data['nodes']
var repeat_data = []
for (var i = 0; i < data_nodes.length; i++) {
  if (data_nodes[i]['attributes']['node_type'] == 'repeat') {
    repeat_data.push(data_nodes[i])
  }
}
console.log(repeat_data)

// Get protein data
const graph = new Graph();
graph.import(data)
// console.log(JSON.stringify(graph));
const renderer = new Sigma(graph, document.getElementById("network"), {
  enableNodeTooltip: false,
  enableEdgeTooltip: false,
  enableHovering: false,
  labelSize: 0,
});

const container = document.getElementById("network");
const clustersLayer = document.createElement('div');
clustersLayer.style.position = "absolute";
clustersLayer.style.top = "0";
clustersLayer.style.left = "0";
clustersLayer.style.width = "100%";
clustersLayer.style.height = "100%";
clustersLayer.style.pointerEvents = "none";  // so clicks go through
clustersLayer.style.zIndex = "10"; 
// container.insertBefore(clustersLayer, container.querySelector(".sigma-hovers"))
container.appendChild(clustersLayer);

// for (const node of repeat_data) {
//   const attrs = node.attributes;
//   const label = document.createElement("div");
//   label.id = attrs.label;
//   label.textContent = attrs.label;
//   label.style.position = "absolute";
//   label.style.pointerEvents = "none";
//   const screenPos = graphToPixel(attrs.x, -attrs.y, renderer);
//   label.style.left = `${screenPos.x}px`;
//   label.style.top = `${screenPos.y}px`;
//   clustersLayer.appendChild(label);
// }

const tooltip = document.createElement('div');
tooltip.className = 'network_tooltip'
tooltip.id = 'tooltip'
container.appendChild(tooltip)

renderer.on("clickNode", ({ node }) => {
  const nodeData = graph.getNodeAttributes(node);
  if (nodeData.url) {
    // window.open(nodeData.url, "_blank"); // open in a new tab
    window.location.href = nodeData.url; // open in the same tab
  }
});

renderer.on("enterNode", ({ node }) => {
  const nodeData = graph.getNodeAttributes(node);
  var alias_html = ``
  if (nodeData.aliases != 'None') {
    alias_html = `<p>${nodeData.aliases}</p>`;
  }

  if (nodeData.node_type == 'protein') {
    tooltip.innerHTML = `<strong>${nodeData.label}</strong><br>`
      + alias_html
      + `<p>Gene Family:</p>
         <p>&emsp;${nodeData.gene_family}</p>`
      + `<p>Motif Enrichment:</p>
         <p>&emsp;${Number(nodeData.enrichment || 0).toFixed(5)}</p>`;
  }
  if (nodeData.node_type == 'repeat') {
    tooltip.innerHTML = `<strong>${nodeData.label}</strong><br>`
      + alias_html
      + `<p>Dfam ID:</p>
         <p>&emsp;${nodeData.dfam_id}</p>`;
  }
  tooltip.style.display = 'block';
});

renderer.on("leaveNode", ({ node }) => {
  tooltip.style.display = 'none';
});

renderer.getMouseCaptor().on("mousemove", (event) => {
  // console.log(event)
  // Offset tooltip to not overlap cursor
  tooltip.style.left = `${event.x - 60}px`;
  tooltip.style.top = `${event.y - 100}px`;
});

// renderer.on("afterRender", () => {
//   for (const node of repeat_data) {
//     const attrs = node.attributes;
//     const labelEl = document.getElementById(attrs.label);
//     if (!labelEl) continue;

//     const screenPos = graphToPixel(attrs.x, -attrs.y, renderer);
//     // const nodeData = renderer.getNodeDisplayData(node.key)
//     console.log(attrs.x, attrs.y)
//     console.log(screenPos)
//     // console.log(labelEl)
//     labelEl.style.left = `${screenPos.x}px`;
//     labelEl.style.top = `${screenPos.y}px`;
//     // console.log(labelEl)
//   }
// });

