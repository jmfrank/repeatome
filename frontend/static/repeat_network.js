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

// Get protein data
const graph = new Graph();
graph.import(data)
console.log(JSON.stringify(graph));
const renderer = new Sigma(graph, document.getElementById("network"));

renderer.on("clickNode", ({ node }) => {
  const nodeData = graph.getNodeAttributes(node);
  if (nodeData.url) {
    // window.open(nodeData.url, "_blank"); // open in a new tab
    window.location.href = nodeData.url; // open in the same tab
  }
});

renderer.on("enterNode", ({ node }) => {
  const nodeData = graph.getNodeAttributes(node);
  
});

renderer.on("leaveNode", ({ node }) => {
  const nodeData = graph.getNodeAttributes(node);
  
});

/*
import data from "repeat_network.json";

export default () => {
  const container = document.getElementById("sigma-container") as HTMLElement;
  const logsDOM = document.getElementById("sigma-logs") as HTMLElement;

  const graph = new Graph();
  graph.import(data);

  function logEvent(event: string, itemType: "node" | "edge" | "positions", item: string | MouseCoords): void {
    const div = document.createElement("div");
    let message = `Event "${event}"`;
    if (item && itemType) {
      if (itemType === "positions") {
        item = item as MouseCoords;
        message += `, x ${item.x}, y ${item.y}`;
      } else {
        const label =
          itemType === "node" ? graph.getNodeAttribute(item, "label") : graph.getEdgeAttribute(item, "label");
        message += `, ${itemType} ${label || "with no label"} (id "${item}")`;

        if (itemType === "edge") {
          message += `, source ${graph.getSourceAttribute(item, "label")}, target: ${graph.getTargetAttribute(
            item,
            "label",
          )}`;
        }
      }
    }
    div.innerHTML = `<span>${message}</span>`;
    logsDOM.appendChild(div);
    logsDOM.scrollTo({ top: logsDOM.scrollHeight });

    if (logsDOM.children.length > 50) logsDOM.children[0].remove();
  }

  let hoveredEdge: null | string = null;
  const renderer = new Sigma(graph, container, {
    enableEdgeEvents: true,
    edgeReducer(edge, data) {
      const res = { ...data };
      if (edge === hoveredEdge) res.color = "#cc0000";
      return res;
    },
  });

  const nodeEvents = [
    "enterNode",
    "leaveNode",
    "downNode",
    "clickNode",
    "rightClickNode",
    "doubleClickNode",
    "wheelNode",
  ] as const;
  const edgeEvents = ["downEdge", "clickEdge", "rightClickEdge", "doubleClickEdge", "wheelEdge"] as const;
  const stageEvents = ["downStage", "clickStage", "doubleClickStage", "wheelStage"] as const;

  nodeEvents.forEach((eventType) => renderer.on(eventType, ({ node }) => logEvent(eventType, "node", node)));
  edgeEvents.forEach((eventType) => renderer.on(eventType, ({ edge }) => logEvent(eventType, "edge", edge)));

  renderer.on("enterEdge", ({ edge }) => {
    logEvent("enterEdge", "edge", edge);
    hoveredEdge = edge;
    renderer.refresh();
  });
  renderer.on("leaveEdge", ({ edge }) => {
    logEvent("leaveEdge", "edge", edge);
    hoveredEdge = null;
    renderer.refresh();
  });

  stageEvents.forEach((eventType) => {
    renderer.on(eventType, ({ event }) => {
      logEvent(eventType, "positions", event);
    });
  });

  return () => {
    renderer.kill();
  };
};*/
