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

  // ---------- 4) Layout: optimize satellites first, then proteins ----------
  const { satPositions, proteinPositions } = useMemo(() => {
    const satPositions = new Map();
    const proteinPositions = new Map();

    if (!repeats.length && !proteinsWithSat.length) {
      return { satPositions, proteinPositions };
    }

    const visibleProteins = proteinsWithSat.filter(
      (p) => Number(p.attributes?.enrichment || 0) >= threshold
    );

    // Resolve the external clone-pair keys to the visible protein nodes.
    // A bare key can exist in more than one organism, so every resolved node
    // keeps its organism-qualified _globalKey.
    const proteinsByBareKey = new Map();
    for (const p of visibleProteins) {
      const list = proteinsByBareKey.get(p.key) || [];
      list.push(p);
      proteinsByBareKey.set(p.key, list);
    }

    const resolvedClonePairs = [];
    const resolvedPairSeen = new Set();

    for (const [sourceKeyRaw, targetKeyRaw] of clonePairs) {
      const sourceKey = String(sourceKeyRaw).trim();
      const targetKey = String(targetKeyRaw).trim();
      const sourceNodes = proteinsByBareKey.get(sourceKey) || [];
      const targetNodes = proteinsByBareKey.get(targetKey) || [];

      for (const source of sourceNodes) {
        for (const target of targetNodes) {
          if (source._globalKey === target._globalKey) continue;

          const pairKey =
            source._globalKey < target._globalKey
              ? `${source._globalKey}|||${target._globalKey}`
              : `${target._globalKey}|||${source._globalKey}`;

          if (resolvedPairSeen.has(pairKey)) continue;
          resolvedPairSeen.add(pairKey);
          resolvedClonePairs.push({ source, target });
        }
      }
    }

    // Build a weighted satellite graph from the actual external clone pairs.
    // Satellites with many dotted connections are encouraged to be nearby.
    const satelliteWeights = new Map();
    const satelliteEdges = [];
    const edgeKey = (a, b) => (a < b ? `${a}|||${b}` : `${b}|||${a}`);

    for (const { source, target } of resolvedClonePairs) {
      const a = source._satelliteglobalKey;
      const b = target._satelliteglobalKey;
      if (!a || !b || a === b) continue;

      const k = edgeKey(a, b);
      satelliteWeights.set(k, (satelliteWeights.get(k) || 0) + 1);
    }

    for (const [k, weight] of satelliteWeights.entries()) {
      const splitAt = k.indexOf('|||');
      const a = k.slice(0, splitAt);
      const b = k.slice(splitAt + 3);
      satelliteEdges.push({ a, b, weight });
    }

    const satKeys = repeats.map((s) => s._globalKey);
    const degree = new Map(satKeys.map((k) => [k, 0]));
    for (const e of satelliteEdges) {
      degree.set(e.a, (degree.get(e.a) || 0) + e.weight);
      degree.set(e.b, (degree.get(e.b) || 0) + e.weight);
    }

    // Greedy initial order: keep satellites with many clone relationships close.
    const unused = new Set(satKeys);
    const order = [];
    if (unused.size) {
      let current = [...unused].sort((a, b) => {
        const diff = (degree.get(b) || 0) - (degree.get(a) || 0);
        return diff || String(a).localeCompare(String(b));
      })[0];

      order.push(current);
      unused.delete(current);

      while (unused.size) {
        let best = null;
        let bestScore = -Infinity;
        for (const candidate of unused) {
          const direct = satelliteWeights.get(edgeKey(current, candidate)) || 0;
          const score = direct * 100 + (degree.get(candidate) || 0);
          if (
            score > bestScore ||
            (score === bestScore && String(candidate).localeCompare(String(best)) < 0)
          ) {
            bestScore = score;
            best = candidate;
          }
        }
        order.push(best);
        unused.delete(best);
        current = best;
      }
    }

    const circularDistance = (i, j, n) => {
      const d = Math.abs(i - j);
      return Math.min(d, n - d);
    };

    const edgesCrossInOrder = (edge1, edge2, positions) => {
      if (
        edge1.a === edge2.a || edge1.a === edge2.b ||
        edge1.b === edge2.a || edge1.b === edge2.b
      ) return false;

      const a = positions.get(edge1.a);
      const b = positions.get(edge1.b);
      const c = positions.get(edge2.a);
      const d = positions.get(edge2.b);
      if ([a, b, c, d].some((v) => v == null)) return false;

      const between = (x, start, end) => {
        if (start < end) return x > start && x < end;
        return x > start || x < end;
      };

      return (
        between(c, a, b) !== between(d, a, b) &&
        between(a, c, d) !== between(b, c, d)
      );
    };

    const orderScore = (candidateOrder) => {
      if (candidateOrder.length < 2) return 0;
      const pos = new Map(candidateOrder.map((k, i) => [k, i]));
      let score = 0;

      // Shorter high-weight satellite-to-satellite routes are cleaner.
      for (const e of satelliteEdges) {
        score +=
          e.weight *
          circularDistance(pos.get(e.a), pos.get(e.b), candidateOrder.length) *
          10;
      }

      // Heavily penalize satellite-group chord crossings.
      for (let i = 0; i < satelliteEdges.length; i++) {
        for (let j = i + 1; j < satelliteEdges.length; j++) {
          if (edgesCrossInOrder(satelliteEdges[i], satelliteEdges[j], pos)) {
            score += satelliteEdges[i].weight * satelliteEdges[j].weight * 45;
          }
        }
      }

      return score;
    };

    // Deterministic local search over satellite positions.
    let bestScore = orderScore(order);
    let improved = true;
    let passes = 0;
    while (improved && passes < 8) {
      improved = false;
      passes += 1;

      for (let i = 0; i < order.length - 1; i++) {
        for (let j = i + 1; j < order.length; j++) {
          [order[i], order[j]] = [order[j], order[i]];
          const candidateScore = orderScore(order);

          if (candidateScore + 0.001 < bestScore) {
            bestScore = candidateScore;
            improved = true;
          } else {
            [order[i], order[j]] = [order[j], order[i]];
          }
        }
      }
    }

    // Place satellites on a wide ellipse and keep them fixed during the protein
    // simulation. This leaves open space through the middle for dotted routes.
    const nSat = Math.max(order.length, 1);
    const ellipseRX = Math.max(340, nSat * 76);
    const ellipseRY = Math.max(210, Math.min(460, nSat * 37));
    const satNodePos = new Map();

    order.forEach((key, i) => {
      const angle = -Math.PI / 2 + (i * 2 * Math.PI) / nSat;
      satNodePos.set(key, {
        x: Math.cos(angle) * ellipseRX,
        y: Math.sin(angle) * ellipseRY,
        angle,
      });
    });

    const nodes = [];
    const nodeIndex = new Map();

    repeats.forEach((s) => {
      const size = Number(s.attributes?.size ?? 40);
      const fixed = satNodePos.get(s._globalKey) || { x: 0, y: 0, angle: 0 };
      const node = {
        id: s._globalKey,
        type: "repeat",
        raw: s,
        size,
        x: fixed.x,
        y: fixed.y,
        fx: fixed.x,
        fy: fixed.y,
      };
      nodes.push(node);
      nodeIndex.set(s._globalKey, node);
    });

    // Record which satellite(s) each clone-linked protein wants to face.
    const cloneTargets = new Map();
    for (const { source, target } of resolvedClonePairs) {
      if (source._satelliteglobalKey && target._satelliteglobalKey) {
        const sourceTargets = cloneTargets.get(source._globalKey) || [];
        sourceTargets.push(target._satelliteglobalKey);
        cloneTargets.set(source._globalKey, sourceTargets);

        const targetTargets = cloneTargets.get(target._globalKey) || [];
        targetTargets.push(source._satelliteglobalKey);
        cloneTargets.set(target._globalKey, targetTargets);
      }
    }

    const proteinsPerSat = new Map();
    for (const p of visibleProteins) {
      if (!p._satelliteglobalKey) continue;
      const list = proteinsPerSat.get(p._satelliteglobalKey) || [];
      list.push(p);
      proteinsPerSat.set(p._satelliteglobalKey, list);
    }

    // Clone-linked proteins face their partner satellites. Unlinked proteins fan
    // around the outward side of their own satellite.
    for (const [satKey, list] of proteinsPerSat.entries()) {
      const sat = nodeIndex.get(satKey);
      if (!sat) continue;

      list.sort((a, b) => {
        const ac = (cloneTargets.get(a._globalKey) || []).length;
        const bc = (cloneTargets.get(b._globalKey) || []).length;
        if (bc !== ac) return bc - ac;
        return String(a._globalKey).localeCompare(String(b._globalKey));
      });

      let cloneIndex = 0;
      let ordinaryIndex = 0;
      const ordinaryCount = Math.max(
        1,
        list.filter((p) => !(cloneTargets.get(p._globalKey) || []).length).length
      );

      for (const p of list) {
        const targets = cloneTargets.get(p._globalKey) || [];
        let preferredAngle;
        let localIndex;

        if (targets.length) {
          let vx = 0;
          let vy = 0;
          for (const targetKey of targets) {
            const target = satNodePos.get(targetKey);
            if (!target) continue;
            vx += target.x - sat.x;
            vy += target.y - sat.y;
          }

          preferredAngle = Math.atan2(vy, vx);
          localIndex = cloneIndex++;
          // Small deterministic fan prevents multiple dotted lines from stacking.
          preferredAngle += ((localIndex % 7) - 3) * 0.085;
        } else {
          const satAngle = satNodePos.get(satKey)?.angle ?? 0;
          localIndex = ordinaryIndex++;
          const t = ordinaryCount <= 1 ? 0.5 : localIndex / (ordinaryCount - 1);
          preferredAngle = satAngle + (t - 0.5) * Math.PI * 1.25;
        }

        const radialDistance =
          Number(sat.size || 40) + 56 + (localIndex % 3) * 10;
        const size = Number(p.attributes?.size ?? 6);
        const node = {
          id: p._globalKey,
          type: "protein",
          raw: p,
          size,
          x: sat.x + Math.cos(preferredAngle) * radialDistance,
          y: sat.y + Math.sin(preferredAngle) * radialDistance,
        };

        nodes.push(node);
        nodeIndex.set(p._globalKey, node);
      }
    }

    const links = [];

    for (const p of visibleProteins) {
      if (!p._satelliteglobalKey) continue;
      if (!nodeIndex.has(p._globalKey) || !nodeIndex.has(p._satelliteglobalKey)) continue;
      links.push({
        source: p._globalKey,
        target: p._satelliteglobalKey,
        kind: "binding",
      });
    }

    for (const { source, target } of resolvedClonePairs) {
      if (!nodeIndex.has(source._globalKey) || !nodeIndex.has(target._globalKey)) continue;
      links.push({
        source: source._globalKey,
        target: target._globalKey,
        kind: "clone",
      });
    }

    const sim = forceSimulation(nodes)
      .force(
        "charge",
        forceManyBody().strength((d) => (d.type === "repeat" ? -40 : -52))
      )
      .force(
        "collide",
        forceCollide()
          .radius(
            (d) =>
              Number(d.size || (d.type === "repeat" ? 40 : 6)) +
              (d.type === "repeat" ? 26 : 7)
          )
          .strength(1)
          .iterations(2)
      )
      .force(
        "link",
        forceLink(links)
          .id((d) => d.id)
          .distance((lnk) => {
            if (lnk.kind === "clone") return 155;
            const sat = lnk.source.type === "repeat" ? lnk.source : lnk.target;
            return Number(sat?.size || 40) + 56;
          })
          .strength((lnk) => (lnk.kind === "binding" ? 0.88 : 0.045))
      )
      .force("center", forceCenter(0, 0))
      .stop();

    const iterations = 380;
    for (let i = 0; i < iterations; i++) sim.tick();

    repeats.forEach((s) => {
      const node = nodeIndex.get(s._globalKey);
      if (node) satPositions.set(s._globalKey, { x: node.x, y: node.y });
    });

    visibleProteins.forEach((p) => {
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

  // Sample a quadratic Bezier so each dotted route can be scored against
  // satellites and against curves that have already been accepted.
  const sampleQuadratic = (a, c, b, steps = 28) => {
    const pts = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const mt = 1 - t;
      pts.push({
        x: mt * mt * a.x + 2 * mt * t * c.x + t * t * b.x,
        y: mt * mt * a.y + 2 * mt * t * c.y + t * t * b.y,
      });
    }
    return pts;
  };

  const segmentsIntersect = (a, b, c, d) => {
    const orient = (p, q, r) =>
      (q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x);
    const o1 = orient(a, b, c);
    const o2 = orient(a, b, d);
    const o3 = orient(c, d, a);
    const o4 = orient(c, d, b);
    return o1 * o2 < 0 && o3 * o4 < 0;
  };

  // Try bends on both sides of the link and keep the cleanest one. Satellite
  // collisions are penalized most strongly, then dotted-line crossings.
  const curvedPath = (a, b, satelliteObstacles, routedSamples = []) => {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const distance = Math.hypot(dx, dy) || 1;
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    const nx = -dy / distance;
    const ny = dx / distance;

    const bendFractions = [
      0.10, -0.10,
      0.18, -0.18,
      0.28, -0.28,
      0.40, -0.40,
      0.54, -0.54,
      0.70, -0.70,
    ];

    let best = null;

    for (const fraction of bendFractions) {
      const bend =
        Math.max(22, Math.min(300, distance * Math.abs(fraction))) *
        Math.sign(fraction);
      const c = { x: mx + nx * bend, y: my + ny * bend };
      const samples = sampleQuadratic(a, c, b, 30);
      let score = Math.abs(bend) * 0.016;

      for (const obstacle of satelliteObstacles) {
        let minClearance = Infinity;

        // Ignore the first/last few samples so a protein sitting close to its own
        // satellite is not unfairly treated as a route-through-satellite hit.
        for (let i = 3; i < samples.length - 3; i++) {
          const p = samples[i];
          const clearance =
            Math.hypot(p.x - obstacle.x, p.y - obstacle.y) - obstacle.r;
          minClearance = Math.min(minClearance, clearance);
        }

        if (minClearance < 0) {
          score += 6000 + Math.abs(minClearance) * 140;
        } else if (minClearance < 34) {
          score += (34 - minClearance) * 20;
        }
      }

      for (const other of routedSamples) {
        let crossings = 0;
        for (let i = 0; i < samples.length - 1; i++) {
          for (let j = 0; j < other.length - 1; j++) {
            if (
              segmentsIntersect(
                samples[i],
                samples[i + 1],
                other[j],
                other[j + 1]
              )
            ) {
              crossings += 1;
              break;
            }
          }
        }
        score += crossings * 480;
      }

      if (!best || score < best.score) {
        best = {
          score,
          path: `M ${a.x} ${a.y} Q ${c.x} ${c.y} ${b.x} ${b.y}`,
          samples,
        };
      }
    }

    return best;
  };

  const cloneLinks = useMemo(() => {
    const positionsByBareKey = new Map();

    for (const p of proteinsWithSat) {
      const pos = proteinPositions.get(p._globalKey);
      if (!pos) continue;

      const list = positionsByBareKey.get(p.key) || [];
      list.push({ node: p, pos });
      positionsByBareKey.set(p.key, list);
    }

    const rawLinks = [];
    const seen = new Set();

    // Preserve the exact allowed pairs from repeat_network_db_all.json. The only
    // change is geometric routing; no additional clone relationships are created.
    for (const [sourceKeyRaw, targetKeyRaw] of clonePairs) {
      const sourceKey = String(sourceKeyRaw).trim();
      const targetKey = String(targetKeyRaw).trim();
      const sourceItems = positionsByBareKey.get(sourceKey) || [];
      const targetItems = positionsByBareKey.get(targetKey) || [];

      for (const sourceItem of sourceItems) {
        for (const targetItem of targetItems) {
          const sourceGlobalKey = sourceItem.node._globalKey;
          const targetGlobalKey = targetItem.node._globalKey;
          if (sourceGlobalKey === targetGlobalKey) continue;

          const key =
            sourceGlobalKey < targetGlobalKey
              ? `${sourceGlobalKey}|||${targetGlobalKey}`
              : `${targetGlobalKey}|||${sourceGlobalKey}`;
          if (seen.has(key)) continue;
          seen.add(key);

          rawLinks.push({
            a: sourceItem.pos,
            b: targetItem.pos,
            sourceGlobalKey,
            targetGlobalKey,
          });
        }
      }
    }

    // Route the longest/hardest lines first so later, shorter connections can
    // choose curves that avoid them.
    rawLinks.sort(
      (u, v) =>
        Math.hypot(v.b.x - v.a.x, v.b.y - v.a.y) -
        Math.hypot(u.b.x - u.a.x, u.b.y - u.a.y)
    );

    const satelliteObstacles = repeats.map((s) => {
      const pos = satPositions.get(s._globalKey) || { x: 0, y: 0 };
      return {
        x: pos.x,
        y: pos.y,
        r: Number(s.attributes?.size ?? 30) + 14,
      };
    });

    const routedSamples = [];
    return rawLinks.map((lnk) => {
      const routed = curvedPath(
        lnk.a,
        lnk.b,
        satelliteObstacles,
        routedSamples
      );
      routedSamples.push(routed.samples);
      return { ...lnk, path: routed.path };
    });
  }, [clonePairs, proteinsWithSat, proteinPositions, repeats, satPositions]);

  const highlightedProteinKeys = useMemo(() => {
    const highlighted = new Set();
    if (hover?.type !== "protein") return highlighted;

    const hovered = hover.node;
    highlighted.add(hovered._globalKey);

    // Highlight every protein directly connected to the hovered protein by an
    // allowed external clone pair. Resolve bare keys across all visible organisms.
    for (const lnk of cloneLinks) {
      if (lnk.sourceGlobalKey === hovered._globalKey) {
        highlighted.add(lnk.targetGlobalKey);
      }
      if (lnk.targetGlobalKey === hovered._globalKey) {
        highlighted.add(lnk.sourceGlobalKey);
      }
    }

    return highlighted;
  }, [hover, cloneLinks]);

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

        {/* Curved dotted clone connectors */}
        <g>
          {cloneLinks.map((lnk, i) => {
            const active =
              hover?.type === "protein" &&
              (lnk.sourceGlobalKey === hover.node._globalKey ||
                lnk.targetGlobalKey === hover.node._globalKey);

            return (
              <path
                key={`clone-${i}`}
                d={lnk.path}
                fill="none"
                stroke={active ? "#FFD700" : "#888"}
                strokeDasharray="4 4"
                strokeWidth={active ? 2.5 : 1}
                opacity={active ? 1 : 0.6}
                pointerEvents="none"
              />
            );
          })}
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
                  stroke={
                    hover?.type === "repeat" &&
                    hover.node._globalKey === s._globalKey
                      ? "#FFD700"
                      : "none"
                  }
                  strokeWidth={
                    hover?.type === "repeat" &&
                    hover.node._globalKey === s._globalKey
                      ? 4
                      : 0
                  }
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
                stroke={highlightedProteinKeys.has(p._globalKey) ? "#FFD700" : "none"}
                strokeWidth={highlightedProteinKeys.has(p._globalKey) ? 3 : 0}
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