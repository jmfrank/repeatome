// App.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  forceSimulation,
  forceManyBody,
  forceLink,
  forceCollide,
  forceCenter,
  forceY,
} from "d3-force";

export default function App() {
  // ---------- 1) Load JSON from data-network ----------
  const [dataset, setDataset] = useState(null);

  useEffect(() => {
    const el = document.getElementById("network-container");
    if (!el) return;
    const organism = el.getAttribute("data-organism")

    const normalize = (json) => {
      if (Array.isArray(json)) return json;
      if (Array.isArray(json?.nodes)) return json.nodes;
      if (json && typeof json === "object") return Object.values(json);
      return [];
    };

    let abort = new AbortController();

    const load = (url) => {
      if (!url) return;
      const sep = url.includes("?") ? "&" : "?";
      const cacheBuster = `${sep}_=${Date.now()}`;
      fetch(url + cacheBuster, {
        credentials: "same-origin",
        cache: "no-store",
        signal: abort.signal,
      })
        .then((res) => {
          if (!res.ok)
            throw new Error(`Failed to load ${url}: ${res.status} ${res.statusText}`);
          return res.json();
        })
        .then((json) => {
          const arr = normalize(json);
          setDataset(arr);
        })
        .catch((err) => {
          if (err.name !== "AbortError")
            console.error("Error fetching network data:", err);
        });
    };

    load(el.getAttribute("data-network"));

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "attributes" && m.attributeName === "data-network") {
          abort.abort();
          abort = new AbortController();
          load(el.getAttribute("data-network"));
        }
      }
    });
    mo.observe(el, { attributes: true });

    return () => {
      mo.disconnect();
      abort.abort();
    };
  }, []);

  // ---------- 2) Data split ----------
  const data = useMemo(() => (Array.isArray(dataset) ? dataset : []), [dataset]);

  const repeats = useMemo(
    () => data.filter((d) => d.attributes?.node_type === "repeat"),
    [data]
  );
  const proteins = useMemo(
    () => data.filter((d) => d.attributes?.node_type === "protein"),
    [data]
  );

  const satelliteKeys = useMemo(() => repeats.map((r) => r.key), [repeats]);

  const proteinsWithSat = useMemo(() => {
    return proteins.map((p) => {
      let sat = null;
      for (const s of satelliteKeys) {
        if (p.key.endsWith("_" + s)) {
          sat = s;
          break;
        }
      }
      if (!sat) {
        const idx = p.key.lastIndexOf("_");
        if (idx > -1) {
          const suffix = p.key.slice(idx + 1);
          if (satelliteKeys.includes(suffix)) sat = suffix;
        }
      }
      return { ...p, _satelliteKey: sat };
    });
  }, [proteins, satelliteKeys]);

  const groupBy = (arr, keyFn) => {
    const m = new Map();
    for (const item of arr) {
      const k = keyFn(item);
      const list = m.get(k) || [];
      list.push(item);
      m.set(k, list);
    }
    return m;
  };

  const proteinsBySatellite = useMemo(
    () => groupBy(proteinsWithSat.filter((p) => p._satelliteKey), (p) => p._satelliteKey),
    [proteinsWithSat]
  );

  const tfClonesByLabel = useMemo(
    () => groupBy(proteinsWithSat, (p) => p.attributes?.label || p.key),
    [proteinsWithSat]
  );

  // ---------- 3) SVG + viewport (pan/zoom) ----------
  const svgRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(null);
  const [isPanning, setIsPanning] = useState(false);
  const panStartRef = useRef({ clientX: 0, clientY: 0, viewX: 0, viewY: 0 });
  const [view, setView] = useState({ x: -600, y: -300, w: 1200, h: 600 });
  const [fitDone, setFitDone] = useState(false); // <-- NEW: whether we've auto-fit this dataset

  // reset auto-fit whenever dataset changes
  useEffect(() => {
    setFitDone(false);
  }, [dataset]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const parent = svg.parentElement;
    if (!parent) return;
    const resize = () => {
      const rect = parent.getBoundingClientRect();
      svg.setAttribute("width", `${rect.width}`);
      svg.setAttribute("height", `${rect.height}`);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // zoom via non-passive wheel listener
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const handleWheel = (e) => {
      e.preventDefault();
      const factor = Math.pow(1.0015, e.deltaY);
      const rect = svg.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      setView((v) => {
        const cx = v.x + px * v.w;
        const cy = v.y + py * v.h;
        const newW = Math.max(50, Math.min(10000, v.w * factor));
        const newH = Math.max(50, Math.min(10000, v.h * factor));
        return { x: cx - px * newW, y: cy - py * newH, w: newW, h: newH };
      });
    };

    svg.addEventListener("wheel", handleWheel, { passive: false });
    return () => svg.removeEventListener("wheel", handleWheel);
  }, []);

  // ---------- 4) Layout: d3-force on full graph (more horizontal & tighter) ----------
  const { satPositions, proteinPositions } = useMemo(() => {
    const satPositions = new Map();
    const proteinPositions = new Map();

    if (!repeats.length && !proteinsWithSat.length) {
      return { satPositions, proteinPositions };
    }

    // Build nodes
    const nodes = [];
    const nodeIndex = new Map();

    repeats.forEach((s) => {
      const size = Number(s.attributes?.size ?? 40);
      const node = {
        id: s.key,
        type: "repeat",
        raw: s,
        size,
      };
      nodes.push(node);
      nodeIndex.set(s.key, node);
    });

    proteinsWithSat.forEach((p) => {
      const size = Number(p.attributes?.size ?? 6);
      const node = {
        id: p.key,
        type: "protein",
        raw: p,
        size,
      };
      nodes.push(node);
      nodeIndex.set(p.key, node);
    });

    // Build links
    const links = [];

    // protein → satellite (binding)
    proteinsWithSat.forEach((p) => {
      if (!p._satelliteKey || !nodeIndex.has(p._satelliteKey)) return;
      links.push({
        source: p.key,
        target: p._satelliteKey,
        kind: "binding",
      });
    });

    // clone links
    for (const [, clones] of tfClonesByLabel.entries()) {
      if (clones.length < 2) continue;
      for (let i = 0; i < clones.length - 1; i++) {
        const a = clones[i].key;
        const b = clones[i + 1].key;
        if (!nodeIndex.has(a) || !nodeIndex.has(b)) continue;
        links.push({
          source: a,
          target: b,
          kind: "clone",
        });
      }
    }

    // Force simulation (tweaked)
    const sim = forceSimulation(nodes)
      .force(
        "charge",
        forceManyBody().strength((d) => (d.type === "repeat" ? -100 : -120)) // less repulsion
      )
      .force(
        "collide",
        forceCollide().radius((d) => {
          const base =
            d.type === "repeat"
              ? Number(d.size || 40)
              : Number(d.size || 6);
          const pad = d.type === "repeat" ? 15 : 4; // smaller padding
          return base + pad;
        })
      )
      .force(
        "link",
        forceLink(links)
          .id((d) => d.id)
          .distance((lnk) =>
            lnk.kind === "binding"
              ? 90 // closer TFs to sats
              : 60 // clones closer too
          )
          .strength((lnk) =>
            lnk.kind === "binding" ? 0.7 : 0.2
          )
      )
      .force("center", forceCenter(0, 0))
      // strong vertical compression → horizontal band
      .force("y", forceY(0).strength(0.02))
      .stop();

    const iterations = 280;
    for (let i = 0; i < iterations; i++) {
      sim.tick();
    }

    repeats.forEach((s) => {
      const node = nodeIndex.get(s.key);
      if (node) satPositions.set(s.key, { x: node.x, y: node.y });
    });

    proteinsWithSat.forEach((p) => {
      const node = nodeIndex.get(p.key);
      if (node) proteinPositions.set(p.key, { x: node.x, y: node.y });
    });

    return { satPositions, proteinPositions };
  }, [repeats, proteinsWithSat, tfClonesByLabel]);

   // ---------- 4.5) Auto-fit view to all satellites on load ----------
  useEffect(() => {
    if (fitDone) return;
    if (!svgRef.current) return;
    if (!repeats.length) return;
    if (satPositions.size === 0) return;

    const xs = [];
    const ys = [];
    for (const { x, y } of satPositions.values()) {
      xs.push(x);
      ys.push(y);
    }
    if (!xs.length) return;

    let minX = Math.min(...xs);
    let maxX = Math.max(...xs);
    let minY = Math.min(...ys);
    let maxY = Math.max(...ys);

    // Add a little margin around satellites
    const margin = 80;
    minX -= margin;
    maxX += margin;
    minY -= margin;
    maxY += margin;

    let boxW = maxX - minX || 1;
    let boxH = maxY - minY || 1;

    const parent = svgRef.current.parentElement;
    if (!parent) {
      const zoomOut = 1.18;
      const cx = minX + boxW / 2;
      const cy = minY + boxH / 2;

      boxW *= zoomOut;
      boxH *= zoomOut;
      minX = cx - boxW / 2;
      minY = cy - boxH / 2;

      setView({ x: minX, y: minY, w: boxW, h: boxH });
      setFitDone(true);
      return;
    }

    const rect = parent.getBoundingClientRect();
    const viewportAspect = rect.width / rect.height;
    const boxAspect = boxW / boxH;

    // Adjust to match container aspect ratio
    if (boxAspect > viewportAspect) {
      // box is "wider" than viewport; expand height
      const targetH = boxW / viewportAspect;
      const extraH = targetH - boxH;
      minY -= extraH / 2;
      boxH = targetH;
    } else {
      // box is "taller"; expand width
      const targetW = boxH * viewportAspect;
      const extraW = targetW - boxW;
      minX -= extraW / 2;
      boxW = targetW;
    }

    const zoomOut = 1.18;
    const cx = minX + boxW / 2;
    const cy = minY + boxH / 2;

    boxW *= zoomOut;
    boxH *= zoomOut;
    minX = cx - boxW / 2;
    minY = cy - boxH / 2;


    setView({ x: minX, y: minY, w: boxW, h: boxH });
    setFitDone(true);
  }, [satPositions, repeats.length, fitDone]);

  // ---------- 5) Links based on positions ----------
  const psLinks = useMemo(() => {
    const links = [];
    for (const [satKey, list] of proteinsBySatellite.entries()) {
      const satPos = satPositions.get(satKey);
      if (!satPos) continue;
      for (const p of list) {
        const pPos = proteinPositions.get(p.key);
        if (pPos) links.push({ a: pPos, b: satPos });
      }
    }
    return links;
  }, [proteinsBySatellite, satPositions, proteinPositions]);

  const cloneLinks = useMemo(() => {
    const links = [];
    for (const [, clones] of tfClonesByLabel.entries()) {
      const pts = clones.map((c) => proteinPositions.get(c.key)).filter(Boolean);
      for (let i = 0; i < pts.length - 1; i++) {
        links.push({ a: pts[i], b: pts[i + 1] });
      }
    }
    return links;
  }, [tfClonesByLabel, proteinPositions]);

  const vb = `${view.x} ${view.y} ${view.w} ${view.h}`;

  // ---------- 6) Render ----------
  if (!repeats.length && !proteinsWithSat.length) {
    return <p>Enrichment data doesn't exist</p>;
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
        margin: 0,
        padding: 0,
        width: "100%",
        height: "600px",
        touchAction: "none",
        overscrollBehavior: "contain",
      }}
    >
      <svg
        ref={svgRef}
        viewBox={vb}
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        {/* Pan background */}
        <rect
          x={view.x - view.w}
          y={view.y - view.h}
          width={view.w * 3}
          height={view.h * 3}
          fill="transparent"
          style={{ cursor: isPanning ? "grabbing" : "grab" }}
          onMouseDown={(e) => {
            if (e.button !== 0) return;
            setIsPanning(true);
            panStartRef.current = {
              clientX: e.clientX,
              clientY: e.clientY,
              viewX: view.x,
              viewY: view.y,
            };
          }}
          onMouseMove={(e) => {
            if (!isPanning) return;
            const rect = svgRef.current.getBoundingClientRect();
            const scaleX = view.w / rect.width;
            const scaleY = view.h / rect.height;
            const dx = (e.clientX - panStartRef.current.clientX) * scaleX;
            const dy = (e.clientY - panStartRef.current.clientY) * scaleY;
            setView((v) => ({
              ...v,
              x: panStartRef.current.viewX - dx,
              y: panStartRef.current.viewY - dy,
            }));
          }}
          onMouseUp={() => setIsPanning(false)}
          onMouseLeave={() => setIsPanning(false)}
        />

        {/* Dotted clone connectors */}
        <g>
          {cloneLinks.map((lnk, i) => (
            <line
              key={`clone-${i}`}
              x1={lnk.a.x}
              y1={lnk.a.y}
              x2={lnk.b.x}
              y2={lnk.b.y}
              stroke="#888"
              strokeDasharray="4 4"
              strokeWidth="1"
              opacity="0.6"
            />
          ))}
        </g>

        {/* Protein → Satellite connectors */}
        <g>
          {psLinks.map((lnk, i) => (
            <line
              key={`ps-${i}`}
              x1={lnk.a.x}
              y1={lnk.a.y}
              x2={lnk.b.x}
              y2={lnk.b.y}
              stroke="#bdbdbd"
              strokeWidth="1.2"
            />
          ))}
        </g>

        {/* Satellites */}
        <g>
          {repeats.map((s) => {
            const pos = satPositions.get(s.key) || { x: 0, y: 0 };
            const size = Number(s.attributes?.size ?? 30);
            const color = s.attributes?.color || "#888";
            const label = s.attributes?.label || s.key;
            const url = s.attributes?.url || null;
            return (
              <g key={s.key} transform={`translate(${pos.x},${pos.y})`}>
                <circle
                  r={size}
                  fill={color}
                  opacity="1"
                  style={{ cursor: url ? "pointer" : "default" }}
                  onMouseEnter={() => setHover({ type: "repeat", node: s })}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => url && window.open(url, "_blank")}
                />
                <text
                  x={0}
                  y={0}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#fff"
                  fontSize="20"
                  fontWeight="600"
                  style={{ cursor: url ? "pointer" : "default", userSelect: "none" }}
                  onMouseEnter={() => setHover({ type: "repeat", node: s })}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => url && window.open(url, "_blank")}
                >
                  {label}
                </text>
              </g>
            );
          })}
        </g>

        {/* Proteins */}
        <g>
          {proteinsWithSat.map((p) => {
            const pos = proteinPositions.get(p.key) || { x: 0, y: 0 };
            const size = Number(p.attributes?.size ?? 6);
            const color = p.attributes?.color || "#9DD6FB";
            const url = p.attributes?.url || null;
            return (
              <circle
                key={p.key}
                cx={pos.x}
                cy={pos.y}
                r={size}
                fill={color}
                style={{ cursor: url ? "pointer" : "default" }}
                onMouseEnter={() => setHover({ type: "protein", node: p })}
                onMouseLeave={() => setHover(null)}
                onClick={() => url && window.open(url, "_blank")}
              />
            );
          })}
        </g>
      </svg>

      {/* Tooltip */}
      {hover && (
        <div
          role="tooltip"
          style={{
            position: "fixed",
            left: mouse.x + 12,
            top: mouse.y + 12,
            background: "rgba(255,255,255,0.95)",
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: 10,
            padding: "10px 12px",
            fontSize: 12,
            boxShadow: "0 6px 24px rgba(0,0,0,0.1)",
            pointerEvents: "none",
            maxWidth: 260,
            zIndex: 9999,
          }}
        >
          {hover.type === "repeat" ? (
            <div>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>
                {hover.node.attributes?.label || hover.node.key}
              </div>
              <div style={{ color: "#555", marginBottom: 4 }}>Satellite (repeat)</div>
              {hover.node.attributes?.aliases && (
                <div>
                  <b>Aliases:</b> {String(hover.node.attributes.aliases)}
                </div>
              )}
              {hover.node.attributes?.dfam_id != null && (
                <div>
                  <b>Dfam:</b> {String(hover.node.attributes.dfam_id)}
                </div>
              )}
              {hover.node.attributes?.url && (
                <div
                  style={{
                    color: "#2563eb",
                    textDecoration: "underline",
                    marginTop: 6,
                    pointerEvents: "auto",
                    cursor: "pointer",
                  }}
                  onClick={() => window.open(hover.node.attributes.url, "_blank")}
                >
                  Open page
                </div>
              )}
            </div>
          ) : (
            <div>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>
                {hover.node.attributes?.label}
              </div>
              <div style={{ color: "#555", marginBottom: 4 }}>Transcription factor</div>
              {hover.node.attributes?.gene_family && (
                <div>
                  <b>Family:</b> {String(hover.node.attributes.gene_family)}
                </div>
              )}
              {hover.node.attributes?.enrichment != null && (
                <div>
                  <b>Enrichment:</b> {String(hover.node.attributes.enrichment)}
                </div>
              )}
              {hover.node.attributes?.aliases && (
                <div>
                  <b>Aliases:</b> {String(hover.node.attributes.aliases)}
                </div>
              )}
              {hover.node.attributes?.url && (
                <div
                  style={{
                    color: "#2563eb",
                    textDecoration: "underline",
                    marginTop: 6,
                    pointerEvents: "auto",
                    cursor: "pointer",
                  }}
                  onClick={() => window.open(hover.node.attributes.url, "_blank")}
                >
                  Open page
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
