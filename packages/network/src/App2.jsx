// App.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

export default function App() {
  // 1) Read JSON from the mounting DIV's data attribute
  const [dataset, setDataset] = useState(null);

  useEffect(() => {
    const el = document.getElementById("network-container");
    if (!el) {
      console.error("Missing #network-container");
      return;
    }

    const normalize = (json) => {
      if (Array.isArray(json)) return json;
      if (Array.isArray(json?.nodes)) return json.nodes;
      if (json && typeof json === "object") return Object.values(json); // dict -> array
      return [];
    };

    let abort = new AbortController();

    const load = (url) => {
      if (!url) return;
      // cache-buster query param + cache:'no-store' to avoid stale files
      const sep = url.includes("?") ? "&" : "?";
      const cacheBuster = `${sep}_=${Date.now()}`;
      fetch(url + cacheBuster, {
        credentials: "same-origin",
        cache: "no-store",
        signal: abort.signal,
      })
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status} ${res.statusText}`);
          return res.json();
        })
        .then((json) => {
          const arr = normalize(json);
          if (!arr.length) {
            console.warn("Fetched JSON normalized to empty array:", json);
          }
          setDataset(arr);
        })
        .catch((err) => {
          if (err.name !== "AbortError") {
            console.error("Error fetching network data:", err);
          }
        });
    };

    // Initial load
    load(el.getAttribute("data-network"));

    // Observe data-network changes and refetch
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "attributes" && m.attributeName === "data-network") {
          abort.abort();                 // cancel any in-flight fetch
          abort = new AbortController(); // new controller for next fetch
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

  // 2) Fallback sample (only if nothing provided)
  const data = useMemo(() => {
    if (Array.isArray(dataset) && dataset.length) return dataset;
    return [
      // { key: "HSat3", attributes: { node_type: "repeat", label: "HSat3", size: 45, color: "#8C5AE6", url: "/repeatTable/hsat3" } },
      // { key: "BCLAF1_HSat3", attributes: { node_type: "protein", label: "BCLAF1", size: 7, color: "#9DD6FB", url: "/proteinTable/bclaf1" } },
      // { key: "HSat7", attributes: { node_type: "repeat", label: "HSat7", size: 45, color: "#60A5FA", url: "/repeatTable/hsat7" } },
      // { key: "CTCF_HSat7", attributes: { node_type: "protein", label: "CTCF", size: 7, color: "#9DD6FB", url: "/proteinTable/ctcf" } },
    ];
  }, [dataset]);

  // 3) Interactions and viewport
  const svgRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(null); // { type: 'repeat'|'protein', node }
  const [isPanning, setIsPanning] = useState(false);
  const panStartRef = useRef({ clientX: 0, clientY: 0, viewX: 0, viewY: 0 });
  const [view, setView] = useState({ x: -400, y: -300, w: 800, h: 600 });

  // keep SVG sized to parent
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

  // global mouse for tooltip anchoring
  useEffect(() => {
    const onMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  
  // zooming
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const handleWheel = (e) => {
      // now this works; listener is non-passive
      e.preventDefault();

      // zoom to cursor (same logic you had)
      const factor = Math.pow(1.0015, e.deltaY);
      const rect = svg.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      setView((v) => {
        const cx = v.x + px * v.w;
        const cy = v.y + py * v.h;
        const newW = Math.max(50, Math.min(5000, v.w * factor));
        const newH = Math.max(50, Math.min(5000, v.h * factor));
        return { x: cx - px * newW, y: cy - py * newH, w: newW, h: newH };
      });
    };

    // 👇 non-passive wheel listener
    svg.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      svg.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // 4) Split data
  const repeats = useMemo(() => data.filter(d => d.attributes?.node_type === "repeat"), [data]);
  const proteins = useMemo(() => data.filter(d => d.attributes?.node_type === "protein"), [data]);

  // 5) Assign proteins to satellites based on key suffix (e.g., LABEL_HSat3 → HSat3)
  const satelliteKeys = useMemo(() => repeats.map(r => r.key), [repeats]);
  const proteinsWithSat = useMemo(() => {
    return proteins.map((p) => {
      let sat = null;
      for (const s of satelliteKeys) {
        if (p.key.endsWith("_" + s)) { sat = s; break; }
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

  // groupBy helper
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
    () => groupBy(proteinsWithSat.filter(p => p._satelliteKey), p => p._satelliteKey),
    [proteinsWithSat]
  );

  const tfClonesByLabel = useMemo(
    () => groupBy(proteinsWithSat, p => p.attributes?.label || p.key),
    [proteinsWithSat]
  );

  // --- Layout (grid for satellites, size-aware non-overlapping circular orbits)
  const { satPositions, proteinPositions } = useMemo(() => {
    const n = repeats.length;
    if (n === 0) return { satPositions: new Map(), proteinPositions: new Map() };

    // 1) Grid layout for satellites
    const cols = Math.min(n, Math.max(2, Math.ceil(Math.sqrt(n))));
    const rows = Math.ceil(n / cols);
    const gridX = 320, gridY = 2500;
    const startX = -((cols - 1) * gridX) / 2;
    const startY = -((rows - 1) * gridY) / 2;

    const satPositions = new Map();
    repeats.forEach((s, i) => {
      const r = Math.floor(i / cols);
      const c = i % cols;
      satPositions.set(s.key, { x: startX + c * gridX, y: startY + r * gridY });
    });

    // 2) Size-aware orbit around each satellite
    function placeOrbitForSatellite(satKey, list) {
      const satPos = satPositions.get(satKey) || { x: 0, y: 0 };
      const sat = repeats.find((r) => r.key === satKey);

      // Base radius: satellite radius + margin
      const baseR = (sat?.attributes?.size || 30) + 42; // margin off the satellite
      const pad = 4; // min gap between adjacent TF circles (px)
      const m = list.length;

      const sizes = list.map((p) => Number(p.attributes?.size ?? 6)); // each is TF radius (px)

      // Edge case: 0/1 item(s)
      if (m === 0) return new Map();
      if (m === 1) {
        const R = Math.max(baseR, sizes[0] + pad + 2);
        const pos = new Map();
        pos.set(list[0].key, { x: satPos.x + R, y: satPos.y });
        return pos;
      }

      // We need central angles α_i such that chord between centers ≥ r_i + r_{i+1} + pad
      // Minimal α_i(R) = 2 * arcsin( (r_i + r_{i+1} + pad) / (2R) ).
      // Increase R until Σ α_i(R) ≤ 2π. Then distribute leftover angle evenly.

      const pairs = new Array(m).fill(0).map((_, i) => {
        const a = sizes[i];
        const b = sizes[(i + 1) % m];
        return a + b + pad; // required chord length between centers (px)
      });

      const TWO_PI = Math.PI * 2;

      // Find minimal R so that sum of minimal angles ≤ 2π
      let R = baseR;
      const maxIter = 500;
      let sumAngles = Infinity;

      for (let iter = 0; iter < maxIter; iter++) {
        let s = 0;
        let tooSmall = false;
        for (let k = 0; k < m; k++) {
          const chord = pairs[k];
          const ratio = chord / (2 * R);
          if (ratio >= 1) { // impossible → R too small
            tooSmall = true;
            break;
          }
          const theta = 2 * Math.asin(Math.min(0.999999, ratio)); // clamp for safety
          s += theta;
        }
        if (!tooSmall && s <= TWO_PI) {
          sumAngles = s;
          break;
        }
        R += 1; // grow orbit until everything fits
      }

      // If somehow still too small, ensure we have a sane sumAngles
      if (!isFinite(sumAngles)) {
        // brute fallback (very unlikely): space evenly
        const angle = TWO_PI / m;
        const pos = new Map();
        for (let i = 0, a = 0; i < m; i++, a += angle) {
          pos.set(list[i].key, { x: satPos.x + R * Math.cos(a), y: satPos.y + R * Math.sin(a) });
        }
        return pos;
      }

      // Compute the minimal angle per edge with this R
      const minAngles = pairs.map((chord) => {
        const ratio = chord / (2 * R);
        return 2 * Math.asin(Math.min(0.999999, ratio));
      });

      // Distribute remaining angle to fill the circle (keeps a complete loop)
      const leftover = Math.max(0, TWO_PI - sumAngles);
      const extraPerEdge = leftover / m;
      const finalAngles = minAngles.map((a) => a + extraPerEdge);

      // Place each TF at the center of its edge’s span around the circle
      const pos = new Map();
      let accum = 0;
      for (let i = 0; i < m; i++) {
        const centerAngle = accum + finalAngles[i] / 2;
        const x = satPos.x + R * Math.cos(centerAngle);
        const y = satPos.y + R * Math.sin(centerAngle);
        pos.set(list[i].key, { x, y });
        accum += finalAngles[i];
      }

      return pos;
    }

    // Build positions for all proteins by satellite
    const proteinPositions = new Map();
    for (const [satKey, list] of proteinsBySatellite.entries()) {
      const posMap = placeOrbitForSatellite(satKey, list);
      for (const p of list) {
        proteinPositions.set(p.key, posMap.get(p.key));
      }
    }

    return { satPositions, proteinPositions };
  }, [repeats, proteinsBySatellite]);

  // 7) Links
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
      const pts = clones.map(c => proteinPositions.get(c.key)).filter(Boolean);
      for (let i = 0; i < pts.length - 1; i++) links.push({ a: pts[i], b: pts[i + 1] });
    }
    return links;
  }, [tfClonesByLabel, proteinPositions]);

  // 8) ViewBox & handlers
  const vb = `${view.x} ${view.y} ${view.w} ${view.h}`;
  const onWheel = (e) => {
    e.preventDefault();
    const factor = Math.pow(1.0015, e.deltaY);
    const rect = svgRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setView((v) => {
      const cx = v.x + px * v.w;
      const cy = v.y + py * v.h;
      const newW = Math.max(50, Math.min(5000, v.w * factor));
      const newH = Math.max(50, Math.min(5000, v.h * factor));
      return { x: cx - px * newW, y: cy - py * newH, w: newW, h: newH };
    });
  };

  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden", position: "relative", margin: 0, padding: 0, touchAction: "none", overscrollBehavior: "contain"}}>
      <svg ref={svgRef} viewBox={vb} onWheel={onWheel} style={{ width: "100%", height: "100%", display: "block" }}>
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
            panStartRef.current = { clientX: e.clientX, clientY: e.clientY, viewX: view.x, viewY: view.y };
          }}
          onMouseMove={(e) => {
            if (!isPanning) return;
            const rect = svgRef.current.getBoundingClientRect();
            const scaleX = view.w / rect.width;
            const scaleY = view.h / rect.height;
            const dx = (e.clientX - panStartRef.current.clientX) * scaleX;
            const dy = (e.clientY - panStartRef.current.clientY) * scaleY;
            setView((v) => ({ ...v, x: panStartRef.current.viewX - dx, y: panStartRef.current.viewY - dy }));
          }}
          onMouseUp={() => setIsPanning(false)}
          onMouseLeave={() => setIsPanning(false)}
        />

        {/* Dotted clone connectors */}
        <g>
          {cloneLinks.map((lnk, i) => (
            <line key={`clone-${i}`} x1={lnk.a.x} y1={lnk.a.y} x2={lnk.b.x} y2={lnk.b.y} stroke="#888" strokeDasharray="4 4" strokeWidth="1" opacity="0.6" />
          ))}
        </g>

        {/* Protein → Satellite connectors */}
        <g>
          {psLinks.map((lnk, i) => (
            <line key={`ps-${i}`} x1={lnk.a.x} y1={lnk.a.y} x2={lnk.b.x} y2={lnk.b.y} stroke="#bdbdbd" strokeWidth="1.2" />
          ))}
        </g>

        {/* Satellites (above lines) */}
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
                  onClick={() => window.open(url, '_blank')}
                />
                <text
                  x={0}
                  y={0}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#fff"
                  fontSize="12"
                  fontWeight="600"
                  style={{ cursor: url ? "pointer" : "default", userSelect: "none" }}
                  onMouseEnter={() => setHover({ type: "repeat", node: s })}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => window.open(url, '_blank')}
                >
                  {label}
                </text>
              </g>
            );
          })}
        </g>

        {/* Proteins (on top) */}
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
                onClick={() => url && (window.location.href = url)}
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
                <div><b>Aliases:</b> {String(hover.node.attributes.aliases)}</div>
              )}
              {hover.node.attributes?.dfam_id != null && (
                <div><b>Dfam:</b> {String(hover.node.attributes.dfam_id)}</div>
              )}
              {hover.node.attributes?.url && (
                <div
                  style={{ color: "#2563eb", textDecoration: "underline", marginTop: 6, pointerEvents: "auto", cursor: "pointer" }}
                  onClick={() => {
                    // use anchor fallback to reliably open new tab if desired
                    window.location.href = hover.node.attributes.url;
                  }}
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
                <div><b>Family:</b> {String(hover.node.attributes.gene_family)}</div>
              )}
              {hover.node.attributes?.enrichment != null && (
                <div><b>Enrichment:</b> {String(hover.node.attributes.enrichment)}</div>
              )}
              {hover.node.attributes?.aliases && (
                <div><b>Aliases:</b> {String(hover.node.attributes.aliases)}</div>
              )}
              {hover.node.attributes?.url && (
                <div
                  style={{ color: "#2563eb", textDecoration: "underline", marginTop: 6, pointerEvents: "auto", cursor: "pointer" }}
                  onClick={() => {
                    window.location.href = hover.node.attributes.url;
                  }}
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
