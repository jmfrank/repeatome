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

  const containerRef = useRef(null);

  const [threshold, setThreshold] = useState(() => {
    const el = document.getElementById("network-container");
    return Number(el?.dataset.threshold || 0.1);
  });

  useEffect(() => {
    const el = document.getElementById("network-container");
    containerRef.current = el;
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

    // Build a weighted satellite graph. An edge is stronger when two satellites
    // share more same-name proteins. We use this graph to decide satellite order.
    const satelliteWeights = new Map();
    const satelliteEdges = [];
    const edgeKey = (a, b) => (a < b ? `${a}|||${b}` : `${b}|||${a}`);

    for (const [, clones] of tfClonesByLabel.entries()) {
      const sats = [...new Set(
        clones
          .filter((p) => Number(p.attributes?.enrichment || 0) >= threshold)
          .map((p) => p._satelliteKey)
          .filter(Boolean)
      )];

      for (let i = 0; i < sats.length; i++) {
        for (let j = i + 1; j < sats.length; j++) {
          const k = edgeKey(sats[i], sats[j]);
          satelliteWeights.set(k, (satelliteWeights.get(k) || 0) + 1);
        }
      }
    }

    for (const [k, weight] of satelliteWeights.entries()) {
      const [a, b] = k.split('|||');
      satelliteEdges.push({ a, b, weight });
    }

    const satKeys = repeats.map((s) => s.key);
    const degree = new Map(satKeys.map((k) => [k, 0]));
    for (const e of satelliteEdges) {
      degree.set(e.a, (degree.get(e.a) || 0) + e.weight);
      degree.set(e.b, (degree.get(e.b) || 0) + e.weight);
    }

    // Start with a greedy order that keeps strongly connected satellites adjacent.
    const unused = new Set(satKeys);
    const order = [];
    if (unused.size) {
      let current = [...unused].sort((a, b) => (degree.get(b) || 0) - (degree.get(a) || 0))[0];
      order.push(current);
      unused.delete(current);

      while (unused.size) {
        let best = null;
        let bestScore = -Infinity;
        for (const candidate of unused) {
          const direct = satelliteWeights.get(edgeKey(current, candidate)) || 0;
          const score = direct * 100 + (degree.get(candidate) || 0);
          if (score > bestScore) {
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

      const n = positions.size;
      const a = positions.get(edge1.a);
      const b = positions.get(edge1.b);
      const c = positions.get(edge2.a);
      const d = positions.get(edge2.b);
      if ([a, b, c, d].some((v) => v == null)) return false;

      const between = (x, start, end) => {
        if (start < end) return x > start && x < end;
        return x > start || x < end;
      };
      return between(c, a, b) !== between(d, a, b) &&
             between(a, c, d) !== between(b, c, d);
    };

    const orderScore = (candidateOrder) => {
      if (candidateOrder.length < 2) return 0;
      const pos = new Map(candidateOrder.map((k, i) => [k, i]));
      let score = 0;

      // Prefer short weighted satellite-to-satellite clone routes.
      for (const e of satelliteEdges) {
        score += e.weight * circularDistance(pos.get(e.a), pos.get(e.b), candidateOrder.length) * 10;
      }

      // Strongly penalize chord crossings between satellite groups.
      for (let i = 0; i < satelliteEdges.length; i++) {
        for (let j = i + 1; j < satelliteEdges.length; j++) {
          if (edgesCrossInOrder(satelliteEdges[i], satelliteEdges[j], pos)) {
            score += satelliteEdges[i].weight * satelliteEdges[j].weight * 45;
          }
        }
      }
      return score;
    };

    // Small deterministic local search. Swapping satellite positions often removes
    // several clone crossings at once without making the layout unstable.
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

    // Place satellites on a wide ellipse. Fixed satellite positions make the
    // topology readable and prevent large satellites from drifting into routes.
    const nSat = Math.max(order.length, 1);
    const ellipseRX = Math.max(310, nSat * 72);
    const ellipseRY = Math.max(190, Math.min(390, nSat * 34));
    const satNodePos = new Map();

    order.forEach((key, i) => {
      const angle = -Math.PI / 2 + (i * 2 * Math.PI) / nSat;
      const x = Math.cos(angle) * ellipseRX;
      const y = Math.sin(angle) * ellipseRY;
      satNodePos.set(key, { x, y, angle });
    });

    const nodes = [];
    const nodeIndex = new Map();

    repeats.forEach((s) => {
      const size = Number(s.attributes?.size ?? 40);
      const fixed = satNodePos.get(s.key) || { x: 0, y: 0, angle: 0 };
      const node = {
        id: s.key,
        type: 'repeat',
        raw: s,
        size,
        x: fixed.x,
        y: fixed.y,
        fx: fixed.x,
        fy: fixed.y,
      };
      nodes.push(node);
      nodeIndex.set(s.key, node);
    });

    // For each clone, record which other satellites it wants to reach.
    const cloneTargets = new Map();
    for (const [, clones] of tfClonesByLabel.entries()) {
      const visible = clones.filter(
        (p) => Number(p.attributes?.enrichment || 0) >= threshold && p._satelliteKey
      );
      for (const p of visible) {
        const targets = cloneTargets.get(p.key) || [];
        for (const other of visible) {
          if (other.key !== p.key && other._satelliteKey !== p._satelliteKey) {
            targets.push(other._satelliteKey);
          }
        }
        cloneTargets.set(p.key, targets);
      }
    }

    // Spread proteins around each satellite. Clone proteins are preferentially
    // placed on the side facing their clone partners; ordinary proteins fill the
    // remaining angular space around the satellite.
    const proteinsPerSat = new Map();
    for (const p of visibleProteins) {
      if (!p._satelliteKey) continue;
      const list = proteinsPerSat.get(p._satelliteKey) || [];
      list.push(p);
      proteinsPerSat.set(p._satelliteKey, list);
    }

    for (const [satKey, list] of proteinsPerSat.entries()) {
      const sat = nodeIndex.get(satKey);
      if (!sat) continue;

      list.sort((a, b) => {
        const ac = (cloneTargets.get(a.key) || []).length;
        const bc = (cloneTargets.get(b.key) || []).length;
        if (bc !== ac) return bc - ac;
        return String(a.key).localeCompare(String(b.key));
      });

      list.forEach((p, idx) => {
        const targets = cloneTargets.get(p.key) || [];
        let preferredAngle;

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
          // Fan same-satellite clone proteins so their dotted lines do not stack.
          preferredAngle += ((idx % 5) - 2) * 0.10;
        } else {
          const satAngle = satNodePos.get(satKey)?.angle ?? 0;
          preferredAngle = satAngle + ((idx / Math.max(list.length, 1)) - 0.5) * Math.PI * 1.35;
        }

        const radialDistance = Number(sat.size || 40) + 54 + (idx % 3) * 9;
        const size = Number(p.attributes?.size ?? 6);
        const node = {
          id: p.key,
          type: 'protein',
          raw: p,
          size,
          x: sat.x + Math.cos(preferredAngle) * radialDistance,
          y: sat.y + Math.sin(preferredAngle) * radialDistance,
        };
        nodes.push(node);
        nodeIndex.set(p.key, node);
      });
    }

    const links = [];

    visibleProteins.forEach((p) => {
      if (!p._satelliteKey) return;
      if (!nodeIndex.has(p.key) || !nodeIndex.has(p._satelliteKey)) return;
      links.push({ source: p.key, target: p._satelliteKey, kind: 'binding' });
    });

    for (const [, clones] of tfClonesByLabel.entries()) {
      const visibleClones = clones.filter((c) => nodeIndex.has(c.key));
      if (visibleClones.length < 2) continue;
      for (let i = 0; i < visibleClones.length - 1; i++) {
        links.push({
          source: visibleClones[i].key,
          target: visibleClones[i + 1].key,
          kind: 'clone',
        });
      }
    }

    const sim = forceSimulation(nodes)
      .force(
        'charge',
        forceManyBody().strength((d) => (d.type === 'repeat' ? -40 : -52))
      )
      .force(
        'collide',
        forceCollide()
          .radius((d) => Number(d.size || (d.type === 'repeat' ? 40 : 6)) + (d.type === 'repeat' ? 24 : 7))
          .strength(1)
          .iterations(2)
      )
      .force(
        'link',
        forceLink(links)
          .id((d) => d.id)
          .distance((lnk) => {
            if (lnk.kind === 'clone') return 145;
            const sat = lnk.source.type === 'repeat' ? lnk.source : lnk.target;
            return Number(sat?.size || 40) + 55;
          })
          .strength((lnk) => (lnk.kind === 'binding' ? 0.88 : 0.055))
      )
      .force('center', forceCenter(0, 0))
      .stop();

    const iterations = 360;
    for (let i = 0; i < iterations; i++) sim.tick();

    repeats.forEach((s) => {
      const node = nodeIndex.get(s.key);
      if (node) satPositions.set(s.key, { x: node.x, y: node.y });
    });

    visibleProteins.forEach((p) => {
      const node = nodeIndex.get(p.key);
      if (node) proteinPositions.set(p.key, { x: node.x, y: node.y });
    });

    return { satPositions, proteinPositions };
  }, [repeats, proteinsWithSat, tfClonesByLabel, threshold]);

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

  // Sample a quadratic Bezier so route candidates can be scored against
  // satellites and against curves that have already been chosen.
  const sampleQuadratic = (a, c, b, steps = 24) => {
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
    const orient = (p, q, r) => (q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x);
    const o1 = orient(a, b, c);
    const o2 = orient(a, b, d);
    const o3 = orient(c, d, a);
    const o4 = orient(c, d, b);
    return o1 * o2 < 0 && o3 * o4 < 0;
  };

  // Try several Bezier bends on both sides of the link and choose the route
  // with the fewest satellite hits and fewest intersections with earlier clone
  // routes. This is intentionally deterministic so rebuilding does not shuffle it.
  const curvedPath = (a, b, satelliteObstacles, routedSamples = []) => {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const distance = Math.hypot(dx, dy) || 1;
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    const nx = -dy / distance;
    const ny = dx / distance;

    const bendFractions = [0.12, -0.12, 0.22, -0.22, 0.34, -0.34, 0.48, -0.48, 0.64, -0.64];
    let best = null;

    for (const fraction of bendFractions) {
      const bend = Math.max(22, Math.min(260, distance * Math.abs(fraction))) * Math.sign(fraction);
      const c = { x: mx + nx * bend, y: my + ny * bend };
      const samples = sampleQuadratic(a, c, b, 28);
      let score = Math.abs(bend) * 0.018; // prefer simpler curves when equally clean

      // Satellite intersections are the most visually confusing, so penalize
      // them much more heavily than dotted-line crossings.
      for (const obstacle of satelliteObstacles) {
        let minClearance = Infinity;
        for (let i = 2; i < samples.length - 2; i++) {
          const p = samples[i];
          const clearance = Math.hypot(p.x - obstacle.x, p.y - obstacle.y) - obstacle.r;
          minClearance = Math.min(minClearance, clearance);
        }
        if (minClearance < 0) score += 5000 + Math.abs(minClearance) * 120;
        else if (minClearance < 28) score += (28 - minClearance) * 18;
      }

      // Count proper crossings with routes already accepted.
      for (const other of routedSamples) {
        let crossings = 0;
        for (let i = 0; i < samples.length - 1; i++) {
          for (let j = 0; j < other.length - 1; j++) {
            if (segmentsIntersect(samples[i], samples[i + 1], other[j], other[j + 1])) {
              crossings += 1;
              break;
            }
          }
        }
        score += crossings * 420;
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
    const rawLinks = [];
    for (const [label, clones] of tfClonesByLabel.entries()) {
      const visible = clones
        .map((c) => ({ node: c, pos: proteinPositions.get(c.key) }))
        .filter((item) => item.pos);

      // Connect clones in nearest-neighbor order instead of arbitrary data order.
      // This avoids unnecessarily long dotted links before curve routing even begins.
      if (visible.length > 1) {
        const remaining = visible.slice(1);
        const ordered = [visible[0]];
        while (remaining.length) {
          const last = ordered[ordered.length - 1].pos;
          let bestIndex = 0;
          let bestDistance = Infinity;
          remaining.forEach((item, idx) => {
            const d = Math.hypot(item.pos.x - last.x, item.pos.y - last.y);
            if (d < bestDistance) {
              bestDistance = d;
              bestIndex = idx;
            }
          });
          ordered.push(remaining.splice(bestIndex, 1)[0]);
        }

        for (let i = 0; i < ordered.length - 1; i++) {
          rawLinks.push({ a: ordered[i].pos, b: ordered[i + 1].pos, label });
        }
      }
    }

    // Route harder/longer links first; shorter links then adapt around them.
    rawLinks.sort((u, v) =>
      Math.hypot(v.b.x - v.a.x, v.b.y - v.a.y) -
      Math.hypot(u.b.x - u.a.x, u.b.y - u.a.y)
    );

    const satelliteObstacles = repeats.map((s) => {
      const pos = satPositions.get(s.key) || { x: 0, y: 0 };
      return {
        x: pos.x,
        y: pos.y,
        r: Number(s.attributes?.size ?? 30) + 12,
      };
    });

    const routedSamples = [];
    return rawLinks.map((lnk) => {
      const routed = curvedPath(lnk.a, lnk.b, satelliteObstacles, routedSamples);
      routedSamples.push(routed.samples);
      return { ...lnk, path: routed.path };
    });
  }, [tfClonesByLabel, proteinPositions, repeats, satPositions]);

  const hoveredProteinLabel =
    hover?.type === "protein"
      ? hover.node.attributes?.label || hover.node.key
      : null;

  const isProteinHighlighted = (p) => {
    if (!hoveredProteinLabel) return false;
    return (p.attributes?.label || p.key) === hoveredProteinLabel;
  };

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

        {/* Curved dotted connectors between same-name proteins */}
        <g>
          {cloneLinks.map((lnk, i) => {
            const active = hoveredProteinLabel === lnk.label;
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
                  stroke={hover?.type === "repeat" && hover.node.key === s.key ? "#FFD700" : "none"}
                  strokeWidth={hover?.type === "repeat" && hover.node.key === s.key ? 4 : 0}
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
                stroke={isProteinHighlighted(p) ? "#FFD700" : "none"}
                strokeWidth={isProteinHighlighted(p) ? 3 : 0}
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