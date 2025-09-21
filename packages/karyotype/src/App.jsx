import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * Karyotype Viewer — v3.6
 * ---------------------------------------------------------------
 * • Auto‑layout for ANY number of chromosomes (balanced rows ~3–5 columns).
 * • Bars render as a SINGLE centered column per chromosome (no lane packing).
 * • NEW: Bars are positioned/scaled EXACTLY by genomic coordinates.
 *   - Uses 1‑based inclusive BED: pixel extent maps [start, end+1).
 *   - No vertical shifting/adjustment; your data defines separation.
 * • Fix: robust navigation when using browser Back from element page.
 * • Keeps: hover + click highlight, pan/zoom, clipPaths, legend, cache controls,
 *   tolerant chr matching.
 */

const DEFAULT_KARYO_URL = "/human_karyotype.txt"; // optional demo in public/
const DEFAULT_BED_URL   = "/elements.bed";        // optional demo in public/

export default function App(){
  const route = useHashRoute();
  const match = /^#\/element\/(.+)$/.exec(route);
  return (
    <div className="karyotype_viewer_main ">
      {/* min-h-screen bg-gray-50 */}
      {/* <Header /> */}
      <ErrorBoundary route={route}>
        {/* <main className="max-w-7xl mx-auto px-4 py-6"> */}
          {match ? <ElementPage elementId={decodeURIComponent(match[1])}/> : <ViewerPage/>}
        {/* </main> */}
      </ErrorBoundary>
    </div>
  );
}

// Basic error boundary so navigation back never "breaks" the app
class ErrorBoundary extends React.Component { 
  constructor(props){ super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error){ return { error }; }
  componentDidCatch(error, info){ /* no-op; could log to server */ }
  componentDidUpdate(prev){ if (prev.route !== this.props.route && this.state.error) this.setState({ error: null }); }
  render(){
    if (this.state.error) {
      return (
        <div className="max-w-7xl mx-auto p-4">
          <div className="rounded-xl border bg-white p-6">
            <div className="text-red-700 font-semibold mb-2">Something went wrong</div>
            <pre className="text-xs whitespace-pre-wrap text-red-800">{String(this.state.error)}</pre>
            <button className="mt-3 px-3 py-1.5 rounded-xl border" onClick={()=> this.setState({error:null})}>Try again</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

/*
function Header(){
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <a href="#/" className="text-xl font-semibold tracking-tight">Repeat-ome Karyotype Viewer</a>
        <nav className="ml-auto flex items-center gap-4 text-sm">
          <a className="hover:underline" href="#/">Viewer</a>
        </nav>
      </div>
    </header>
  );
}
*/

function useHashRoute(){
  const [hash, setHash] = useState(()=> window.location.hash || "#/" );
  useEffect(()=>{
    const fn = ()=> setHash(window.location.hash || "#/");
    window.addEventListener("hashchange", fn);
    return ()=> window.removeEventListener("hashchange", fn);
  }, []);
  return hash;
}

// --------------------------- Viewer Page ---------------------------
function ViewerPage(){
  const [karyoText, setKaryoText] = useState(null);
  const [bedText, setBedText]     = useState(null);
  const [sourceKaryo, setSourceKaryo] = useState("(none)");
  const [sourceBed, setSourceBed]     = useState("(none)");
  const [showDiag, setShowDiag]       = useState(false);

  const AUTOLOAD_DEFAULTS = false;

  useEffect(()=>{
    const kt = localStorage.getItem("karyo_tsv_text");
    const bt = localStorage.getItem("elements_bed_text");
    const ks = localStorage.getItem("karyo_tsv_name");
    const bs = localStorage.getItem("elements_bed_name");
    if (kt) { setKaryoText(kt); setSourceKaryo(ks || "(saved)"); }
    if (bt) { setBedText(bt);   setSourceBed(bs || "(saved)"); }
  }, []);

  useEffect(()=>{
    try{
      sessionStorage.removeItem("selected_element");
      const purge=[]; for (let i=0;i<sessionStorage.length;i++){ const k=sessionStorage.key(i); if (k && k.startsWith("element:")) purge.push(k); }
      purge.forEach(k=>sessionStorage.removeItem(k));
    }catch{}
  }, []);

  useEffect(()=>{
    if (AUTOLOAD_DEFAULTS && !karyoText){
      fetch(DEFAULT_KARYO_URL).then(r=>r.ok?r.text():Promise.reject()).then(t=>{ setKaryoText(t); setSourceKaryo(DEFAULT_KARYO_URL); }).catch(()=>{});
    }
    if (AUTOLOAD_DEFAULTS && !bedText){
      fetch(DEFAULT_BED_URL).then(r=>r.ok?r.text():Promise.reject()).then(t=>{ setBedText(t); setSourceBed(DEFAULT_BED_URL); }).catch(()=>{});
    }
  }, [karyoText, bedText]);

  useEffect(()=>{ if (karyoText) localStorage.setItem("karyo_tsv_text", karyoText); }, [karyoText]);
  useEffect(()=>{ if (bedText)   localStorage.setItem("elements_bed_text", bedText); }, [bedText]);
  useEffect(()=>{ if (sourceKaryo) localStorage.setItem("karyo_tsv_name", sourceKaryo); }, [sourceKaryo]);
  useEffect(()=>{ if (sourceBed)   localStorage.setItem("elements_bed_name", sourceBed); }, [sourceBed]);

  const onDropFiles = (files) => {
    const list = Array.from(files);
    const byExt = (exts)=> list.find(f=> exts.some(e=> f.name.toLowerCase().endsWith(e)));
    const maybeK = byExt([".txt",".tsv",".csv"]);
    const maybeB = byExt([".bed",".txt"]);
    if (maybeK){ const r=new FileReader(); r.onload=()=>{ setKaryoText(String(r.result||"")); setSourceKaryo(maybeK.name); }; r.readAsText(maybeK); }
    if (maybeB){ const r=new FileReader(); r.onload=()=>{ setBedText(String(r.result||"")); setSourceBed(maybeB.name); }; r.readAsText(maybeB); }
  };

  const loadDemo = async ()=>{
    try{
      const [kt, bt] = await Promise.all([
        fetch(DEFAULT_KARYO_URL).then(r=>r.ok?r.text():""),
        fetch(DEFAULT_BED_URL).then(r=>r.ok?r.text():"")
      ]);
      if (kt) { setKaryoText(kt); setSourceKaryo(DEFAULT_KARYO_URL); }
      if (bt) { setBedText(bt);   setSourceBed(DEFAULT_BED_URL); }
    }catch{}
  };

  const clearAll = ()=>{
    try{
      setKaryoText(null); setBedText(null);
      setSourceKaryo("(none)"); setSourceBed("(none)");
      ["karyo_tsv_text","elements_bed_text","karyo_tsv_name","elements_bed_name"].forEach(k=>localStorage.removeItem(k));
      sessionStorage.removeItem("selected_element");
      const kill=[]; for (let i=0;i<sessionStorage.length;i++){ const k=sessionStorage.key(i); if (k && k.startsWith("element:")) kill.push(k); }
      kill.forEach(k=>sessionStorage.removeItem(k));
      if (window.location.hash.startsWith("#/element/")) window.location.hash = "#/";
      window.dispatchEvent(new Event("kv-clear-all"));
    }catch{}
  };

  useEffect(() => {
    async function loadStaticFiles() {
      try {
        const karyoResp = await fetch("/static/karyotype_viewer/human_karyotype.txt");
        const karyo = await karyoResp.text();
        setKaryoText(karyo);
        setSourceKaryo("human_karyotype.txt");

        const bedResp = await fetch("/static/karyotype_viewer/compiled.bed");
        const bed = await bedResp.text();
        setBedText(bed);
        setSourceBed("elements.bed");
      } catch (err) {
        console.error("Error loading static files", err);
      }
    }

    loadStaticFiles();
  }, []);

  return (
    <div className="main-grid grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="col-left lg:col-span-9">
        <DataKaryotypeViewer karyoText={karyoText} bedText={bedText} onDropFiles={onDropFiles}/>
      </div>
      {/* <div className="col-right lg:col-span-3">
        <aside className="bg-white rounded-2xl shadow p-4 space-y-4">
          <h2 className="text-lg font-semibold">Inputs</h2>
          <div className="text-sm text-gray-700 space-y-2">
            <div>
              <div className="font-medium">Karyotype file:</div>
              <div className="text-gray-600 break-all">{sourceKaryo}</div>
              <label className="mt-1 inline-block">
                <input type="file" accept=".txt,.tsv,.csv" className="hidden" onChange={e=>{ const f=e.target.files?.[0]; if (f) { console.log(e.target.files?.[0]); const r=new FileReader(); r.onload=()=>{ console.log(r.result); console.log(f.name); console.log(f); setKaryoText(String(r.result||"")); setSourceKaryo(f.name); }; r.readAsText(f);} }} />
                <span className="cursor-pointer px-3 py-1.5 rounded-xl border inline-block hover:bg-gray-50">Upload karyotype</span>
              </label>
            </div>
            <div>
              <div className="font-medium">Elements BED file:</div>
              <div className="text-gray-600 break-all">{sourceBed}</div>
              <label className="mt-1 inline-block">
                <input type="file" accept=".bed,.txt" className="hidden" onChange={e=>{ const f=e.target.files?.[0]; if (f) { const r=new FileReader(); r.onload=()=>{ console.log(r.result, f.name, f); setBedText(String(r.result||"")); setSourceBed(f.name); }; r.readAsText(f);} }} />
                <span className="cursor-pointer px-3 py-1.5 rounded-xl border inline-block hover:bg-gray-50">Upload BED</span>
              </label>
            </div>
          </div>
          <div className="flex gap-2 pt-1">
            <button onClick={loadDemo} className="text-sm px-3 py-1.5 rounded-xl border hover:bg-gray-50">Load demo data</button>
            <button onClick={clearAll} className="text-sm px-3 py-1.5 rounded-xl border hover:bg-gray-50">Clear inputs & cache</button>
          </div>
          <hr/>
          <button onClick={()=>setShowDiag(v=>!v)} className="text-sm px-3 py-1.5 rounded-xl border hover:bg-gray-50">
            {showDiag ? "Hide" : "Show"} diagnostics
          </button>
          {showDiag && <Diagnostics />}
        </aside>
      </div> */}
    </div>
  );
}

// --------------------------- Element Page -------------------------
function ElementPage({elementId}){
  const data = useMemo(()=>{
    const raw = sessionStorage.getItem(`element:${elementId}`);
    return raw ? JSON.parse(raw) : null;
  }, [elementId]);
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex items-center gap-3">
        <a href="#/" className="text-sm text-blue-600 hover:underline" onClick={(e)=>{e.preventDefault(); if (window.history.length>1) window.history.back(); else window.location.hash = "#/";}}>← Back to viewer</a>
      </div>
      <h1 className="mt-2 text-2xl font-semibold">Element: <span className="font-mono text-base px-2 py-1 rounded bg-gray-100 break-all">{elementId}</span></h1>
      {data ? (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-xl">
            <h2 className="font-semibold">Summary</h2>
            <ul className="text-sm text-gray-800 mt-2 space-y-1">
              <li><b>Chrom:</b> {data.chr}</li>
              <li><b>Start:</b> {Number(data.start).toLocaleString()}</li>
              <li><b>End:</b> {Number(data.end).toLocaleString()}</li>
              <li><b>Name:</b> {data.name}</li>
              <li><b>Family:</b> {data.family}</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <h2 className="font-semibold">External Links</h2>
            <ul className="text-sm list-disc pl-5 mt-2">
              <li><a className="text-blue-600 hover:underline" href="#">Repeat‑ome record</a></li>
              <li><a className="text-blue-600 hover:underline" href="#">UCSC / Ensembl</a></li>
            </ul>
          </div>
        </div>
      ) : (
        <p className="mt-3 text-gray-600">No cached element data for this id. Navigate here by clicking an element in the viewer.</p>
      )}
    </div>
  );
}

// -------------------- Data Karyotype Viewer (no d3) ------------------
function DataKaryotypeViewer({karyoText, bedText, onDropFiles}){
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const gPanRef = useRef(null);
  const hasFitRef = useRef(false);

  const [selectedId, setSelectedId] = useState(()=> sessionStorage.getItem("selected_element") || null);
  useEffect(()=>{
    const f = ()=> setSelectedId(null);
    window.addEventListener("kv-clear-all", f);
    return ()=> window.removeEventListener("kv-clear-all", f);
  }, []);

  const tf = useRef({x: 0, y: 0, s: 1});
  const dragging = useRef(false);
  const dragStart = useRef({x:0,y:0,tx:0,ty:0});
  const setTransform = (x,y,s)=>{
    tf.current = {x,y,s};
    const g = gPanRef.current; if (!g) return;
    g.setAttribute("transform", `translate(${x},${y}) scale(${s})`);
  };
  const fitToView = ()=>{
    const svg = svgRef.current, g = gPanRef.current; if (!svg||!g) return;
    try{
      const bbox = g.getBBox();
      if (!isFinite(bbox.width) || !isFinite(bbox.height) || bbox.width===0 || bbox.height===0) return;
      const width = svg.clientWidth || 1000, height = svg.clientHeight || 600, margin = 20;
      const sx = (width - 2*margin) / bbox.width, sy = (height - 2*margin) / bbox.height;
      const s = Math.min(sx, sy);
      const tx = margin - bbox.x * s + (width  - (bbox.width  * s + 2*margin))/2;
      const ty = margin - bbox.y * s + (height - (bbox.height * s + 2*margin))/2;
      setTransform(tx, ty, s);
    }catch{}
  };
  const zoomBy = (factor, cx, cy)=>{
    const {x,y,s} = tf.current;
    const ns = clamp(s * factor, 0.3, 200);
    const wx = (cx - x) / s, wy = (cy - y) / s;
    const nx = cx - wx * ns, ny = cy - wy * ns;
    setTransform(nx, ny, ns);
  };
  const onWheel = (e)=>{
    e.preventDefault();
    const factor = Math.exp(-e.deltaY * 0.001);
    const rect = e.currentTarget.getBoundingClientRect();
    zoomBy(factor, e.clientX - rect.left, e.clientY - rect.top);
  };
  const onPointerDown = (e)=>{
    const svg = svgRef.current; if (!svg) return;
    const tgt = e.target;
    if (tgt && typeof tgt.getAttribute === "function" && tgt.getAttribute("data-el") === "1") return;
    dragging.current = true;
    try { svg.setPointerCapture(e.pointerId); } catch {}
    dragStart.current = {x: e.clientX, y: e.clientY, tx: tf.current.x, ty: tf.current.y};
  };
  const onPointerMove = (e)=>{
    if (!dragging.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setTransform(dragStart.current.tx + dx, dragStart.current.ty + dy, tf.current.s);
  };
  const onPointerUp = (e)=>{
    const svg = svgRef.current; if (!svg) return;
    dragging.current = false;
    try { svg.releasePointerCapture(e.pointerId); } catch {}
  };

  const karyos = useMemo(()=> karyoText ? parseKaryo(karyoText) : [], [karyoText]);
  const beds   = useMemo(()=> bedText   ? parseBED(bedText)     : [], [bedText]);
  useEffect(()=>{ hasFitRef.current = false; }, [karyos, beds]);

  const families = useMemo(()=> Array.from(new Set(beds.map(b=>b.family))), [beds]);
  const [visibleFamilies, setVisibleFamilies] = useState(new Set());
  const familyColor = useMemo(()=>{
    const m = new Map();
    families.forEach((f,i)=> m.set(f, hsl(i, families.length || 1)) );
    return m;
  }, [families]);
  useEffect(()=>{ setVisibleFamilies(new Set(families)); }, [families]);

  // --------------------------- Draw ---------------------------
  useEffect(()=>{
    const NS = "http://www.w3.org/2000/svg";
    const svg = svgRef.current; if (!svg) return;
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const defs = document.createElementNS(NS, "defs"); svg.appendChild(defs);
    const gPan = document.createElementNS(NS, "g"); svg.appendChild(gPan); gPanRef.current = gPan;
    if (!karyos.length) return;

    const byKey = new Map(karyos.map(k=>[k.key, k]));

    // --- Auto layout: choose ~3–5 columns; balance per row ---
    const keysInOrder = karyos.map(k=>k.key); // preserve file order
    const n = keysInOrder.length;
    // const cols = clamp(Math.round(Math.sqrt(n)), 8, 12); // 3, 5
    const cols = 14;
    const rowsCount = Math.ceil(n / cols);
    const base = Math.floor(n / rowsCount);
    const extra = n % rowsCount;
    const ROWS = [];
    let idx = 0;
    for (let r=0;r<rowsCount;r++){
      const take = base + (r < extra ? 1 : 0);
      ROWS.push(keysInOrder.slice(idx, idx + take));
      idx += take;
    }

    // Layout constants
    const CHR_W = 16, ROW_GAP = 340, COL_GAP = 80, TOP_PAD = 20, LEFT_PAD = 40;
    const layoutPos = new Map();

    // Compute max length for vertical scaling per dataset
    const maxLen = karyos.reduce((m,k)=> Math.max(m, k.end - k.start), 1);
    const scaleYFor = (k, y, h)=> (bp)=> y + ((bp - k.start) / (k.end - k.start)) * h;

    ROWS.forEach((row, rIdx)=>{
      row.forEach((key, cIdx)=>{
        const k = byKey.get(key); if (!k) return;
        const chrLen = k.end - k.start;
        const chrH = (chrLen / maxLen) * 280 + 40;
        const x = LEFT_PAD + cIdx * COL_GAP;
        const y = TOP_PAD + rIdx * ROW_GAP;
        const scale = scaleYFor(k, y, chrH);
        layoutPos.set(key, { x, y, height: chrH, scale, k });
      });
    });

    // Draw chromosome bodies/labels and clip paths
    for (const [key, pos] of layoutPos){
      const {x,y,height,k,scale} = pos;
      const ceY1 = scale(k.ceStart);
      const ceY2 = scale(k.ceEnd);
      const pathD = chromosomePath(x, y, height, CHR_W, ceY1, ceY2);

      const p = document.createElementNS(NS, "path");
      p.setAttribute("d", pathD);
      p.setAttribute("fill", "#e5e7eb");
      p.setAttribute("stroke", "#9ca3af");
      p.setAttribute("stroke-width", "1");
      p.setAttribute("shape-rendering", "geometricPrecision");
      gPan.appendChild(p);

      const clipId = `clip-${key}`;
      const clip = document.createElementNS(NS, "clipPath"); clip.setAttribute("id", clipId);
      const clipPath = document.createElementNS(NS, "path"); clipPath.setAttribute("d", pathD);
      clip.appendChild(clipPath); defs.appendChild(clip);

      const gChr = document.createElementNS(NS, "g");
      gChr.setAttribute("clip-path", `url(#${clipId})`);
      gPan.appendChild(gChr);

      const text = document.createElementNS(NS, "text");
      text.setAttribute("x", String(x + CHR_W/2));
      text.setAttribute("y", String(y + height + 16));
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("font-size", "12");
      text.setAttribute("fill", "#374151");
      text.textContent = k.label; // EXACT label from file
      gPan.appendChild(text);

      pos.gChr = gChr;
    }

    // Overlays
    const selRect = document.createElementNS(NS, "rect");
    selRect.setAttribute("fill", "none"); selRect.setAttribute("stroke", "#111827");
    selRect.setAttribute("stroke-width", "2"); selRect.setAttribute("vector-effect", "non-scaling-stroke");
    selRect.setAttribute("pointer-events", "none"); selRect.setAttribute("visibility", "hidden");

    const hovRect = document.createElementNS(NS, "rect");
    hovRect.setAttribute("fill", "none"); hovRect.setAttribute("stroke", "#2563eb");
    hovRect.setAttribute("stroke-width", "2"); hovRect.setAttribute("vector-effect", "non-scaling-stroke");
    hovRect.setAttribute("pointer-events", "none"); hovRect.setAttribute("visibility", "hidden");

    // Group BED by chromosome key, then lay as a single centered column.
    const byChrElems = new Map();
    const familyShown = (fam)=> visibleFamilies.has(fam);

    for (const b of beds){
      if (!familyShown(b.family)) continue;
      if (!byKey.has(b.key)) continue; // BED chr not in karyotype
      const pos = layoutPos.get(b.key); if (!pos) continue;
      const { k, scale } = pos;
      // 1-based inclusive: map to [start, end+1)
      const startBp = Math.max(k.start, Math.min(b.start, k.end));
      const endBpPlus1 = Math.max(k.start, Math.min(b.end + 1, k.end + 1));
      const yTop = scale(startBp);
      const yBot = scale(endBpPlus1);
      const id = `${byKey.get(b.key).label}:${b.start}-${b.end}:${b.name}`.replace(/\s+/g,"_");
      (byChrElems.get(b.key) || byChrElems.set(b.key, []).get(b.key)).push({ b, yTop, yBot, id });
    }

    let selectedShown = false; let selectedParent = null;
    const BAR_INSET = 2;             // px inset from chromosome edge
    const MIN_BAR_W = 8;             // fixed single column width (<= CHR_W - 2*BAR_INSET)

    for (const [key, items] of byChrElems){
      const pos = layoutPos.get(key); if (!pos) continue;
      const { x, y, height, gChr } = pos;

      // Centered single column within chromosome width
      const availableW = 16 - 2*BAR_INSET; // CHR_W - inset both sides
      const barWidth = Math.min(availableW, Math.max(MIN_BAR_W, availableW));
      const barX = x + (16 - barWidth) / 2;

      // Paint in source order (by yTop ascending) with NO vertical adjustment.
      const sorted = items.slice().sort((a,b)=> a.yTop - b.yTop || (a.yBot - a.yTop) - (b.yBot - b.yTop));

      for (let i=0;i<sorted.length;i++){
        const { b, id } = sorted[i];
        // clamp to chromosome vertical range for safety
        let yTop = Math.max(y, Math.min(y + height, sorted[i].yTop));
        let yBot = Math.max(yTop, Math.min(y + height, sorted[i].yBot));

        const r = document.createElementNS(NS, "rect");
        r.setAttribute("x", String(barX));
        r.setAttribute("width", String(barWidth));
        r.setAttribute("y", String(yTop));
        r.setAttribute("height", String(Math.max(1, yBot - yTop))); // at least 1px for visibility
        // console.log(familyColor);
        // console.log(b.family);
        // console.log(familyColor.get(b.family));
        r.setAttribute("fill", familyColor.get(b.family) || "#10b981");
        r.setAttribute("stroke", "none");
        r.setAttribute("cursor", "pointer");
        r.setAttribute("pointer-events", "all");
        r.setAttribute("data-el", "1");
        r.addEventListener("pointerdown", (ev)=> ev.stopPropagation());
        r.addEventListener("pointerenter", ()=>{
          hovRect.setAttribute("x", String(barX));
          hovRect.setAttribute("y", String(yTop));
          hovRect.setAttribute("width", String(barWidth));
          hovRect.setAttribute("height", String(Math.max(1, yBot - yTop)));
          hovRect.setAttribute("visibility", "visible");
          gChr.appendChild(hovRect);
        });
        r.addEventListener("pointerleave", ()=>{ hovRect.setAttribute("visibility", "hidden"); });
        r.addEventListener("click", ()=>{
          sessionStorage.setItem("selected_element", id);
          setSelectedId(id);
          const kk = byKey.get(b.key);
          sessionStorage.setItem(`element:${id}`, JSON.stringify({
            chr: kk ? kk.label : b.key,
            start: b.start,
            end: b.end,
            name: b.name,
            family: b.family
          }));
          window.location.hash = `#/element/${encodeURIComponent(id)}`;
        });
        const t = document.createElementNS(NS, "title");
        const kk = byKey.get(b.key);
        t.textContent = `${b.name} — ${b.family}\n${kk ? kk.label : b.key}:${b.start}-${b.end}`;
        r.appendChild(t);
        gChr.appendChild(r);

        if (selectedId && id === selectedId){
          selectedParent = gChr; selectedShown = true;
          const sel = { x: barX, w: barWidth, y: yTop, h: Math.max(1, yBot - yTop) };
          const selRect = document.createElementNS(NS, "rect");
          selRect.setAttribute("fill", "none"); selRect.setAttribute("stroke", "#111827");
          selRect.setAttribute("stroke-width", "2"); selRect.setAttribute("vector-effect", "non-scaling-stroke");
          selRect.setAttribute("pointer-events", "none");
          selRect.setAttribute("x", String(sel.x));
          selRect.setAttribute("y", String(sel.y));
          selRect.setAttribute("width", String(sel.w));
          selRect.setAttribute("height", String(sel.h));
          gChr.appendChild(selRect);
        }
      }
    }

    if (!hasFitRef.current) { setTimeout(fitToView, 0); hasFitRef.current = true; }
  }, [karyos, beds, visibleFamilies, familyColor, selectedId]);

  // Toolbar
  const doZoomIn  = ()=>{ const svg=svgRef.current; if (!svg) return; const r=svg.getBoundingClientRect(); zoomBy(1.2, r.width/2, r.height/2); };
  const doZoomOut = ()=>{ const svg=svgRef.current; if (!svg) return; const r=svg.getBoundingClientRect(); zoomBy(1/1.2, r.width/2, r.height/2); };
  const doReset   = ()=>{ fitToView(); };

  return (
    <div ref={containerRef} className="kary_card bg-white rounded-2xl shadow overflow-hidden">
      <div className="kary_btns_div flex items-center justify-between border-b px-3 py-2">
        <div className="flex items-center gap-2">
          <button onClick={doZoomIn}  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:bg-gray-50">＋ Zoom in</button>
          <button onClick={doZoomOut} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:bg-gray-50">－ Zoom out</button>
          <button onClick={doReset}   className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:bg-gray-50">⟲ Reset</button>
          <button onClick={()=>{ setSelectedId(null); sessionStorage.removeItem("selected_element"); }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border hover:bg-gray-50">Clear selection</button>
        </div>
        <div className="text-sm text-gray-600">Drop karyotype + BED or use upload buttons</div>
      </div>

      <div className="kary_graph_holder grid grid-cols-12">
        <div className="kary_graph col-span-9 border-r">
          {/* <div className="relative w-full h-[72vh] bg-gray-50"> */}
          <div className="kary_svg_holder relative w-full h-full bg-gray-50">
            <svg
              ref={svgRef}
              className="absolute inset-0 w-full h-full block"
              onWheel={onWheel}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
            />
            {!karyotypeReady(karyos) && !beds.length && (
              <div className="absolute inset-0 grid place-items-center pointer-events-none">
                <div className="text-center text-gray-500">
                  <div className="mb-2 text-2xl">⬆</div>
                  <p className="font-medium">Drop karyotype + BED here</p>
                  <p className="text-sm">or use the upload buttons</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-3 max-h-[72vh] overflow-auto p-3">
          {families.length ? (
            <div className="karyo_btns space-y-2">
              {families.map((fam)=> (
                <button key={fam} onClick={()=>{
                  const next = new Set(visibleFamilies);
                  if (next.has(fam)) next.delete(fam); else next.add(fam);
                  setVisibleFamilies(next);
                }} className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl border ${visibleFamilies.has(fam)?"hover:opacity-70":"bg-gray-100 opacity-70"}`} style={{background: familyColor.get(fam) || "#10b981"}}>
                  <span className="inline-block w-5 h-5"/>
                  <span className="text-sm font-medium flex-1 text-left">{fam}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-sm text-gray-500 p-2">Legend appears after loading a BED (column 5 = family).</div>
          )}
        </div>
      </div>
    </div>
  );
}

function karyotypeReady(karyos){ return Array.isArray(karyos) && karyos.length>0; }

// ---------------------------- Geometry ----------------------------
function chromosomePath(x, y, height, width, ceY1, ceY2){
  const cx = x + width/2;
  const left = x, right = x + width;
  const top = y, bottom = y + height;
  let a = Math.max(top, Math.min(ceY1, ceY2));
  let b = Math.min(bottom, Math.max(ceY1, ceY2));
  const outerR = 4;
  const waist  = width * 0.45;
  const innerR = Math.min(waist * 0.25, 6);
  const aIn = Math.max(a, top + outerR);
  const bIn = Math.min(b, bottom - outerR);
  return [
    `M ${left} ${top+outerR}`,
    `Q ${left} ${top} ${left+outerR} ${top}`,
    `L ${right-outerR} ${top}`,
    `Q ${right} ${top} ${right} ${top+outerR}`,
    `L ${right} ${aIn - innerR}`,
    `Q ${right} ${aIn} ${cx + waist/2 + innerR} ${aIn}`,
    `Q ${cx + waist/2} ${aIn} ${cx + waist/2} ${aIn + innerR}`,
    `L ${cx + waist/2} ${bIn - innerR}`,
    `Q ${cx + waist/2} ${bIn} ${cx + waist/2 + innerR} ${bIn}`,
    `Q ${right} ${bIn} ${right} ${bIn + innerR}`,
    `L ${right} ${bottom - outerR}`,
    `Q ${right} ${bottom} ${right-outerR} ${bottom}`,
    `L ${left+outerR} ${bottom}`,
    `Q ${left} ${bottom} ${left} ${bottom-outerR}`,
    `L ${left} ${bIn + innerR}`,
    `Q ${left} ${bIn} ${cx - waist/2 - innerR} ${bIn}`,
    `Q ${cx - waist/2} ${bIn} ${cx - waist/2} ${bIn - innerR}`,
    `L ${cx - waist/2} ${aIn + innerR}`,
    `Q ${cx - waist/2} ${aIn} ${cx - waist/2 - innerR} ${aIn}`,
    `Q ${left} ${aIn} ${left} ${aIn - innerR}`,
    `L ${left} ${top+outerR}`,
    "Z"
  ].join(" ");
}

// ------------------------------ Parsers ---------------------------
// Build a tolerant key for matching chr names across files (case-insensitive,
// strips leading "chr"/"chromosome" but preserves suffixes like 3L, GL000220.1)
function chrKey(s){
  return String(s || "")
    .trim()
    .replace(/^chrom(?:osome)?/i, "")
    .replace(/^chr/i, "")
    .trim()
    .toLowerCase();
}

function parseKaryo(text){
  const rows = [];
  const lines = String(text).split(/\r?\n/);
  for (let i=0;i<lines.length;i++){
    const line = String(lines[i]||"").trim();
    if (!line || /^#/.test(line)) continue;
    const cols = line.split(/\t|,|\s+/).filter(Boolean);
    if (cols.length < 5) continue;
    const maybeStart = cols[1];
    const maybeEnd   = cols[2];
    const isHeader = /start/i.test(maybeStart) || /end/i.test(maybeEnd) || /ce[_-]?start/i.test(line);
    if (isHeader) continue;
    const [C,S,E,CS,CE] = cols;
    const label = String(C).trim();
    const key = chrKey(label);
    const start = num(S), end = num(E), ceStart = num(CS), ceEnd = num(CE);
    if ([start,end,ceStart,ceEnd].some(x=>!isFinite(x))) continue;
    rows.push({ key, label, start, end, ceStart, ceEnd });
  }
  return rows;
}

function parseBED(text){
  const rows = [];
  const lines = String(text).split(/\r?\n/);
  for (const ln of lines){
    const line = String(ln).trim();
    if (!line || /^#/.test(line)) continue;
    const cols = line.split(/\t|\s+/);
    if (cols.length < 5) continue;
    const [C,S,E,N,F] = cols;
    const key = chrKey(C);
    const start0 = +S, end0 = +E;
    if (!isFinite(start0) || !isFinite(end0)) continue;
    const start = start0 + 1; // 0-based -> 1-based inclusive
    const end = end0;
    rows.push({ key, start, end, name: N, family: F, raw: line });
  }
  return rows;
}

// --------------------------- Color/helper -------------------------
function hsl(i, total){ const hue = (i * 360 / Math.max(1,total)) % 360; return `hsl(${hue} 70% 45%)`; }
function clamp(v, lo, hi){ return Math.max(lo, Math.min(hi, v)); }
function num(v){ const s = String(v).replace(/,/g, ""); const n = +s; return isFinite(n) ? n : NaN; }

// --------------------------- Diagnostics -------------------------
function Diagnostics(){
  const [results] = useState(()=> runTests());
  return (
    <div className="mt-2 rounded-xl border p-3 text-sm">
      <div className="font-semibold mb-2">Diagnostics</div>
      {results.map((r, i)=> (
        <div key={i} className={r.pass?"text-green-700":"text-red-700"}>
          {r.pass ? "✔" : "✘"} {r.name}{!r.pass && r.message?`: ${r.message}`:""}
        </div>
      ))}
    </div>
  );
}

function runTests(){
  const cases = [];
  // Karyotype parse should preserve label exactly
  cases.push({
    name: "parseKaryo preserves label from column 1",
    run: ()=>{
      const txt = "Chr\tStart\tEnd\tCE_start\tCE_end\n1\t1\t100\t40\t60";
      const out = parseKaryo(txt);
      if (out.length !== 1) throw new Error("expected 1 row");
      if (out[0].label !== "1") throw new Error(`label mismatch: ${out[0].label}`);
      if (out[0].key !== "1") throw new Error(`key mismatch: ${out[0].key}`);
    }
  });
  cases.push({
    name: "chrKey tolerant matching (3L vs chr3L)",
    run: ()=>{
      const k = chrKey("3L");
      const b = chrKey("chr3L");
      if (k !== b) throw new Error("keys should match for 3L and chr3L");
    }
  });
  cases.push({
    name: "parseKaryo handles commas in numbers",
    run: ()=>{
      const txt = "Chr Start End CE_start CE_end\nchr21 1 46,709,983 10,900,000 14,400,000";
      const out = parseKaryo(txt);
      if (out.length !== 1) throw new Error("expected 1 row");
      const r = out[0];
      if (r.end !== 46709983 || r.ceStart !== 10900000 || r.ceEnd !== 14400000) throw new Error("numeric parse failed");
    }
  });
  cases.push({
    name: "parseBED normalization 0-based -> 1-based inclusive",
    run: ()=>{
      const txt = "chr1 0 100 name fam";
      const r = parseBED(txt)[0];
      if (r.start !== 1 || r.end !== 100) throw new Error(`expected 1..100, got ${r.start}..${r.end}`);
    }
  });
  cases.push({
    name: "Exact mapping honors inclusive length",
    run: ()=>{
      const k = { start:1, end:1000 };
      const y0 = 0, h = 1000; // 1 px per bp for easy math
      const scale = (bp)=> y0 + ((bp - k.start)/(k.end - k.start)) * h;
      const start=101, end=200; // 100 bp long inclusive
      const yTop = scale(start);
      const yBot = scale(end+1); // [start,end+1) for inclusive
      const px = yBot - yTop;
      if (Math.abs(px - 100) > 1e-6) throw new Error(`expected 100px, got ${px}`);
    }
  });
  cases.push({
    name: "Non-overlapping inputs stay non-overlapping after mapping",
    run: ()=>{
      const k = { start:1, end:1000 };
      const y0 = 0, h = 1000; const scale = (bp)=> y0 + ((bp - k.start)/(k.end - k.start)) * h;
      const a = { start:1, end:100 };
      const b = { start:101, end:200 };
      const aY=[scale(a.start), scale(a.end+1)];
      const bY=[scale(b.start), scale(b.end+1)];
      const overlap = !(aY[1] <= bY[0] || bY[1] <= aY[0]);
      if (overlap) throw new Error("mapped bars overlap but should not");
    }
  });
  return cases.map(c=>{ try{ c.run(); return {name:c.name, pass:true}; } catch(e){ return {name:c.name, pass:false, message: e?.message || String(e)}; } });
}
