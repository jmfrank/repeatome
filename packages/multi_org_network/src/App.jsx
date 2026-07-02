// App.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  forceSimulation,
  forceManyBody,
  forceLink,
  forceCollide,
  forceCenter,
  forceX,
  forceY,
} from "d3-force";

export default function App() {
  // search functionality
  const [searchText, setSearchText] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  // ---------- 1) Load JSON from data-network ----------
  const [dataset, setDataset] = useState(null);
  const [orgIDs, setOrgIDs] = useState(null);

  const containerRef = useRef(null);

  const [threshold, setThreshold] = useState(() => {
    const el = document.getElementById("network-container");
    return Number(el?.dataset.threshold || 0.1);
  });

  useEffect(() => {
    const el = document.getElementById("network-container");
    containerRef.current = el;
    if (!el) return;

    const normalize = (json) => {
      if (Array.isArray(json)) return json;
      if (Array.isArray(json?.nodes)) return json.nodes;
      if (json && typeof json === "object") return Object.values(json);
      return [];
    };

    let abort = new AbortController();

    const loadSelectedNetworks = async () => {
      try {
        const raw = el.getAttribute("data-network") || "[]";
        const orgIds = JSON.parse(raw);

        console.log("RAW:", raw);
        console.log("ORG IDS:", orgIds);

        setOrgIDs(orgIds);

        if (!Array.isArray(orgIds) || !orgIds.length) {
          setDataset({});
          return;
        }

        const loaded = {};

        await Promise.all(
          orgIds.map(async (orgId) => {
            const url = `/static/network/repeat_network_db_${orgId}.json`;

            console.log("Loading:", url);

            const sep = url.includes("?") ? "&" : "?";
            const cacheBuster = `${sep}_=${Date.now()}`;

            const res = await fetch(url + cacheBuster, {
              credentials: "same-origin",
              cache: "no-store",
              signal: abort.signal,
            });

            if (!res.ok) {
              throw new Error(
                `Failed to load ${url}: ${res.status} ${res.statusText}`
              );
            }

            const json = await res.json();
            loaded[orgId] = normalize(json);
          })
        );

        console.log("LOADED:", loaded);

        setDataset(loaded);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error fetching network data:", err);
        }
      }
    };

    loadSelectedNetworks();

    const onSettingsChange = () => {
      abort.abort();
      abort = new AbortController();
      loadSelectedNetworks();
    };

    el.addEventListener("network-settings-change", onSettingsChange);

    return () => {
      abort.abort();
      el.removeEventListener("network-settings-change", onSettingsChange);
    };
  }, []);

  // ---------- 2) Data split ----------
  const data = useMemo(() => {
    if (!dataset || Array.isArray(dataset)) return [];

    return Object.entries(dataset).flatMap(([orgId, arr]) =>
      (Array.isArray(arr) ? arr : []).map((d, i) => {
        const safeKey = String(d.key || d.attributes?.label || `node_${i}`);

        return {
          ...d,
          key: safeKey,
          _orgId: String(orgId),
          _globalKey: `${orgId}::${safeKey}`,
        };
      })
    );
  }, [dataset]);

  const repeats = useMemo(
    () =>
      data
        .filter((d) => d.attributes?.node_type === "repeat")
        .map((d, i) => ({
          ...d,
          attributes: {
            ...d.attributes,
          },
        })),
    [data, orgIDs]
  );

  const proteins = useMemo(
    () =>
      data
        .filter((d) => d.attributes?.node_type === "protein")
        .map((d) => ({
          ...d,
          attributes: {
            ...d.attributes,
          },
        })),
    [data]
  );

  const satelliteKeysByOrg = useMemo(() => {
    const m = new Map();

    repeats.forEach((r) => {
      const list = m.get(r._orgId) || [];
      list.push(r.key);
      m.set(r._orgId, list);
    });

    return m;
  }, [repeats]);

  const proteinsWithSat = useMemo(() => {
    return proteins.map((p) => {
      let sat = null;
      const satelliteKeys = satelliteKeysByOrg.get(p._orgId) || [];

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

      return {
        ...p,
        _satelliteKey: sat,
        _satelliteglobalKey: sat ? `${p._orgId}::${sat}` : null,
      };
    });
  }, [proteins, satelliteKeysByOrg]);

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
    () =>
      groupBy(
        proteinsWithSat.filter((p) => p._satelliteglobalKey),
        (p) => p._satelliteglobalKey
      ),
    [proteinsWithSat]
  );

  const [clonePairs, setClonePairs] = useState([]);

  useEffect(() => {
    let abort = new AbortController();

    const loadClonePairs = async () => {
      try {
        const url = `/static/multi_org_network/repeat_network_db_all.json`;
        const sep = url.includes("?") ? "&" : "?";
        const res = await fetch(`${url}${sep}_=${Date.now()}`, {
          credentials: "same-origin",
          cache: "no-store",
          signal: abort.signal,
        });

        if (!res.ok) {
          throw new Error(`Failed to load ${url}: ${res.status} ${res.statusText}`);
        }

        const json = await res.json();

        setClonePairs(
          Array.isArray(json)
            ? json.filter(
                (pair) =>
                  Array.isArray(pair) &&
                  pair.length >= 2 &&
                  pair[0] != null &&
                  pair[1] != null
              )
            : []
        );
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error fetching clone pair data:", err);
          setClonePairs([]);
        }
      }
    };

    loadClonePairs();

    return () => abort.abort();
  }, []);

  const ORG_COLORS = [
    "#e15759", // red
    "#4e79a7", // blue
    "#f28e2b", // orange
    "#76b7b2", // teal
    "#59a14f", // green
    "#edc948", // yellow
    "#b07aa1", // purple
    "#ff9da7", // pink
    "#9c755f", // brown
    "#bab0ac", // grey
  ];

  const orgColorMap = useMemo(() => {
    const map = new Map();
    (orgIDs || []).forEach((id, i) => {
      map.set(String(id), ORG_COLORS[i % ORG_COLORS.length]);
    });
    return map;
  }, [orgIDs]);

  const orgLegend = useMemo(() => {
    const byId = new Map();

    for (const d of data) {
      const orgId = d._orgId;
      const orgName =
        d.attributes?.parental_organism?.scientific_name ||
        d.attributes?.parent_organism?.scientific_name ||
        orgId;

      if (!byId.has(orgId)) {
        byId.set(orgId, {
          id: orgId,
          name: orgName,
          color: orgColorMap.get(orgId) || "#888",
        });
      }
    }

    return Array.from(byId.values());
  }, [data, orgColorMap]);

  const searchableNodes = useMemo(() => {
    const visibleProteins = proteinsWithSat.filter(
      (p) => Number(p.attributes?.enrichment || 0) >= threshold
    );

    return [...repeats, ...visibleProteins].map((n) => ({
      key: n.key,
      label: n.attributes?.label || n.key,
      type: n.attributes?.node_type,
      orgId: n._orgId,
      node: n,
    }));
  }, [repeats, proteinsWithSat, threshold]);

  const searchMatches = useMemo(() => {
    const q = searchText.trim().toLowerCase();
    if (!q) return [];

    return searchableNodes
      .filter((n) => {
        const aliases = String(n.node.attributes?.aliases || "").toLowerCase();
        return (
          n.label.toLowerCase().includes(q) ||
          n.key.toLowerCase().includes(q) ||
          aliases.includes(q)
        );
      })
      .slice(0, 12);
  }, [searchText, searchableNodes]);

  const zoomToNode = (item) => {
    const pos =
      item.type === "repeat"
        ? satPositions.get(item.node._globalKey)
        : proteinPositions.get(item.node._globalKey);

    if (!pos) return;

    const zoomW = item.type === "repeat" ? 260 : 180;
    const zoomH = item.type === "repeat" ? 180 : 130;

    setView({
      x: pos.x - zoomW / 2,
      y: pos.y - zoomH / 2,
      w: zoomW,
      h: zoomH,
    });

    setHover({ type: item.type === "repeat" ? "repeat" : "protein", node: item.node });
    setSearchFocused(false);
  };

  // console.log(proteins)

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

  const handleWheel = (e) => {
    e.preventDefault();

    const factor = Math.pow(1.0015, e.deltaY);
    const svg = svgRef.current;
    if (!svg) return;

    const rect = svg.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    setView((v) => {
      const cx = v.x + px * v.w;
      const cy = v.y + py * v.h;

      const newW = Math.max(50, Math.min(10000, v.w * factor));
      const newH = Math.max(50, Math.min(10000, v.h * factor));

      return {
        x: cx - px * newW,
        y: cy - py * newH,
        w: newW,
        h: newH,
      };
    });
  };

  // listen for slider
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleSettingsChange = () => {
      setThreshold(Number(container.dataset.threshold || 0));
    };

    container.addEventListener("network-settings-change", handleSettingsChange);

    return () => {
      container.removeEventListener("network-settings-change", handleSettingsChange);
    };
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
        id: s._globalKey,
        type: "repeat",
        raw: s,
        size,
      };
      nodes.push(node);
      nodeIndex.set(s._globalKey, node);
    });

    proteinsWithSat.forEach((p) => {
      if (Number(p.attributes?.enrichment || 0) < threshold) return;

      const size = Number(p.attributes?.size ?? 6);
      const node = {
        id: p._globalKey,
        type: "protein",
        raw: p,
        size,
      };
      nodes.push(node);
      nodeIndex.set(p._globalKey, node);
    });

    // Build links
    const links = [];

    // protein -> satellite (binding)
    proteinsWithSat.forEach((p) => {
      if (!p._satelliteglobalKey) return;
      if (!nodeIndex.has(p._globalKey)) return;
      if (!nodeIndex.has(p._satelliteglobalKey)) return;

      links.push({
        source: p._globalKey,
        target: p._satelliteglobalKey,
        kind: "binding",
      });
    });

    // clone links
    const nodesByBareKey = new Map();

    for (const node of nodes) {
      const rawKey = node.raw?.key;
      if (!rawKey) continue;

      const list = nodesByBareKey.get(rawKey) || [];
      list.push(node);
      nodesByBareKey.set(rawKey, list);
    }

    for (const [sourceKeyRaw, targetKeyRaw] of clonePairs) {
      const sourceKey = String(sourceKeyRaw).trim();
      const targetKey = String(targetKeyRaw).trim();

      const sourceNodes =
        nodesByBareKey.get(sourceKey) ||
        (nodeIndex.has(sourceKey) ? [nodeIndex.get(sourceKey)] : []);

      const targetNodes =
        nodesByBareKey.get(targetKey) ||
        (nodeIndex.has(targetKey) ? [nodeIndex.get(targetKey)] : []);

      for (const sourceNode of sourceNodes) {
        for (const targetNode of targetNodes) {
          if (!sourceNode || !targetNode) continue;
          if (sourceNode.id === targetNode.id) continue;

          links.push({
            source: sourceNode.id,
            target: targetNode.id,
            kind: "clone",
          });
        }
      }
    }

    // for (const [, clones] of tfClonesByUniversalId.entries()) {
    //   const visibleClones = clones.filter((c) => nodeIndex.has(c.key));
    //   if (visibleClones.length < 2) continue;
    //   for (let i = 0; i < visibleClones.length; i++) {
    //     for (let j = i + 1; j < visibleClones.length; j++) {
    //       const labelI = visibleClones[i].attributes?.label || visibleClones[i].key;
    //       const labelJ = visibleClones[j].attributes?.label || visibleClones[j].key;
    //       if (labelI === labelJ) continue; // skip same-name pairs
    //       links.push({
    //         source: visibleClones[i].key,
    //         target: visibleClones[j].key,
    //         kind: "clone",
    //       });
    //     }
    //   }
    // }

    // Force simulation (tweaked)
    const sim = forceSimulation(nodes)
      .force(
        "charge",
        forceManyBody().strength((d) =>
          d.type === "repeat" ? -80 : -20
        )
      )
      .force(
        "collide",
        forceCollide().radius((d) => {
          const base =
            d.type === "repeat"
              ? Number(d.size || 40)
              : Number(d.size || 6);

          const pad = d.type === "repeat" ? 35 : 3;
          return base + pad;
        })
      )
      .force(
        "link",
        forceLink(links)
          .id((d) => d.id)
          .distance((lnk) =>
            lnk.kind === "binding" ? 28 : 140
          )
          .strength((lnk) =>
            lnk.kind === "binding" ? 1.4 : 0.03
          )
      )
      .force("center", forceCenter(0, 0))
      .force("x", forceX(0).strength(0.03))
      .force("y", forceY(0).strength(0.03))
      .stop();

    const iterations = 280;
    for (let i = 0; i < iterations; i++) {
      sim.tick();
    }

    repeats.forEach((s) => {
      const node = nodeIndex.get(s._globalKey);
      if (node) satPositions.set(s._globalKey, { x: node.x, y: node.y });
    });

    proteinsWithSat.forEach((p) => {
      const node = nodeIndex.get(p._globalKey);
      if (node) proteinPositions.set(p._globalKey, { x: node.x, y: node.y });
    });

    return { satPositions, proteinPositions };
  }, [repeats, proteinsWithSat, clonePairs, threshold]);

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

    for (const { x, y } of proteinPositions.values()) {
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

    let boxW = Math.max(maxX - minX || 1, 900);
    let boxH = Math.max(maxY - minY || 1, 500);

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
  }, [satPositions, proteinPositions, repeats.length, fitDone]);

  // ---------- 5) Links based on positions ----------
  const psLinks = useMemo(() => {
    const links = [];

    for (const [satglobalKey, list] of proteinsBySatellite.entries()) {
      const satPos = satPositions.get(satglobalKey);
      if (!satPos) continue;

      for (const p of list) {
        const pPos = proteinPositions.get(p._globalKey);
        if (pPos) links.push({ a: pPos, b: satPos });
      }
    }

    return links;
  }, [proteinsBySatellite, satPositions, proteinPositions]);

  const cloneLinks = useMemo(() => {
    const links = [];

    const positionsByBareKey = new Map();

    for (const p of proteinsWithSat) {
      const pos = proteinPositions.get(p._globalKey);
      if (!pos) continue;

      const list = positionsByBareKey.get(p.key) || [];
      list.push(pos);
      positionsByBareKey.set(p.key, list);
    }

    for (const [sourceKeyRaw, targetKeyRaw] of clonePairs) {
      const sourceKey = String(sourceKeyRaw).trim();
      const targetKey = String(targetKeyRaw).trim();

      const sourcePositions = positionsByBareKey.get(sourceKey) || [];
      const targetPositions = positionsByBareKey.get(targetKey) || [];

      for (const a of sourcePositions) {
        for (const b of targetPositions) {
          links.push({ a, b });
        }
      }
    }

    return links;
  }, [clonePairs, proteinsWithSat, proteinPositions]);

  // const cloneLinks = useMemo(() => {
  //   const links = [];
  //   for (const [, clones] of tfClonesByUniversalId.entries()) {
  //     for (let i = 0; i < clones.length; i++) {
  //       for (let j = i + 1; j < clones.length; j++) {
  //         const labelI = clones[i].attributes?.label || clones[i].key;
  //         const labelJ = clones[j].attributes?.label || clones[j].key;
  //         if (labelI === labelJ) continue; // skip same-name pairs
  //         const posA = proteinPositions.get(clones[i].key);
  //         const posB = proteinPositions.get(clones[j].key);
  //         if (posA && posB) links.push({ a: posA, b: posB });
  //       }
  //     }
  //   }
  //   return links;
  // }, [tfClonesByUniversalId, proteinPositions]);

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
      {/* Controls: search + organism legend */}
      <div
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          zIndex: 10,
          display: "flex",
          gap: 12,
          alignItems: "flex-start",
          pointerEvents: "auto",
        }}
      >
        {/* Search */}
        <div style={{ position: "relative" }}>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            placeholder="Search protein or repeat..."
            style={{
              width: 240,
              padding: "8px 10px",
              borderRadius: 8,
              border: "1px solid #ccc",
              fontSize: 13,
              background: "rgba(255,255,255,0.95)",
            }}
          />

        {searchFocused && searchText.trim() && (
          <div
            style={{
              position: "absolute",
              top: 38,
              left: 0,
              width: 280,
              maxHeight: 260,
              overflowY: "auto",
              background: "white",
              border: "1px solid #ddd",
              borderRadius: 8,
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            }}
          >
            {searchMatches.length ? (
              searchMatches.map((item) => (
                <div
                  key={`${item.orgId}-${item.key}`}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    zoomToNode(item);
                  }}
                  style={{
                    padding: "8px 10px",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                    fontSize: 13,
                  }}
                >
                  <div style={{ fontWeight: 600 }}>{item.label}</div>
                  <div style={{ color: "#666", fontSize: 11 }}>
                    {item.type === "repeat" ? "Repeat" : "Protein"} · {item.orgId}
                  </div>
                </div>
              ))
            ) : (
              <div style={{ padding: "8px 10px", color: "#666", fontSize: 13 }}>
                No matches
              </div>
            )}
          </div>
        )}
      </div>

      {/* Organism legend */}
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          border: "1px solid #ddd",
          borderRadius: 8,
          padding: "8px 10px",
          fontSize: 12,
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          minWidth: 160,
        }}
      >
          <div style={{ fontWeight: 700, marginBottom: 6 }}>Organisms</div>
          {orgLegend.map((org) => (
            <div
              key={org.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                marginBottom: 4,
              }}
            >
              <span
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  background: org.color,
                  display: "inline-block",
                }}
              />
              <span>{org.name}</span>
            </div>
          ))}
        </div>
      </div>
      <svg
        ref={svgRef}
        viewBox={vb}
        onWheel={handleWheel}
        style={{ width: "100%", height: "100%", display: "block" }}>
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
            const pos = satPositions.get(s._globalKey) || { x: 0, y: 0 };
            const size = Number(s.attributes?.size ?? 30);
            const color = orgColorMap.get(s._orgId) ?? s.attributes?.color ?? "#888";
            const label = s.attributes?.label || s.key;
            const url = s.attributes?.url || null;
            return (
              <g key={s._globalKey} transform={`translate(${pos.x},${pos.y})`}>
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
          {proteinsWithSat
            .filter((p) => Number(p.attributes?.enrichment || 0) >= threshold)
            .map((p) => {
            const pos = proteinPositions.get(p._globalKey) || { x: 0, y: 0 };
            const size = Number(p.attributes?.size ?? 6);
            const color = p.attributes?.color || "#9DD6FB";
            const url = p.attributes?.url || null;
            return (
              <circle
                key={p._globalKey}
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
              {hover.node.attributes?.parental_organism?.scientific_name && (
                <div>
                  <b>Organism:</b> {String(hover.node.attributes.parental_organism.scientific_name)}
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
              {hover.node.attributes?.aliases && (
                <div>
                  <b>Aliases:</b> {String(hover.node.attributes.aliases)}
                </div>
              )}
              {hover.node.attributes?.gene_family && (
                <div>
                  <b>Family:</b> {String(hover.node.attributes.gene_family)}
                </div>
              )}
              {hover.node.attributes?.parent_organism?.scientific_name != null && (
                <div>
                  <b>Organism:</b> {String(hover.node.attributes.parent_organism.scientific_name)}
                </div>
              )}
              {hover.node.attributes?.enrichment != null && (
                <div>
                  <b>Enrichment:</b> {String(hover.node.attributes.enrichment)}
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
