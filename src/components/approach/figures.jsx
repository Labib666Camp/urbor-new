import React, { useRef, useState } from 'react';
import { motion, useTransform, useSpring } from 'framer-motion';

/* Shared chrome ----------------------------------------------------------- */

const Frame = ({ children, readout, onPointerMove, onPointerLeave }) => (
  <div
    className="relative aspect-[5/4] w-full overflow-hidden rounded-xl border border-line bg-surface"
    onPointerMove={onPointerMove}
    onPointerLeave={onPointerLeave}
  >
    {children}
    {readout && (
      <div className="pointer-events-none absolute left-5 top-5 rounded-sm border border-line bg-canvas/85 px-3 py-2 backdrop-blur-md">
        {readout}
      </div>
    )}
  </div>
);

const Readout = ({ label, children }) => (
  <>
    <div className="eyebrow text-ink-faint">{label}</div>
    <div className="mt-1 font-mono text-sm tabular-nums text-ink">{children}</div>
  </>
);

/* 01 — Halophytes drawing salt out of the topsoil -------------------------- */

// Each grain owns its hooks so the map stays hook-safe and scroll updates never
// trigger a React re-render.
const SaltGrain = ({ progress, x, y, delay, boost }) => {
  const t = useTransform(progress, [delay, Math.min(1, delay + 0.55)], [0, 1]);
  const cx = useTransform(t, [0, 1], [x, 200]);
  const cy = useTransform(t, [0, 1], [y, 96]);
  const opacity = useTransform(t, [0, 0.15, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(t, [0, 1], [1, 0.4]);
  const lift = useSpring(boost ? -8 : 0, { stiffness: 200, damping: 20 });

  return (
    <motion.rect
      width="5" height="5" rx="1"
      style={{ x: cx, y: cy, opacity, scale, translateY: lift }}
      className="fill-[#D8D2BE]"
    />
  );
};

const GRAINS = [
  { x: 118, y: 250, d: 0.02 }, { x: 152, y: 268, d: 0.10 }, { x: 186, y: 244, d: 0.05 },
  { x: 214, y: 272, d: 0.16 }, { x: 248, y: 250, d: 0.08 }, { x: 282, y: 266, d: 0.20 },
  { x: 134, y: 288, d: 0.26 }, { x: 200, y: 292, d: 0.32 }, { x: 266, y: 286, d: 0.22 },
  { x: 168, y: 232, d: 0.30 }, { x: 232, y: 230, d: 0.36 }, { x: 300, y: 240, d: 0.40 },
];

const Leaf = ({ progress, at, side, y }) => {
  const t = useTransform(progress, [at, at + 0.22], [0, 1]);
  const opacity = useTransform(t, [0, 0.3], [0, 1]);
  const d = side === 'l'
    ? `M200 ${y} C 168 ${y - 6}, 150 ${y - 22}, 148 ${y - 40} C 172 ${y - 34}, 192 ${y - 20}, 200 ${y}`
    : `M200 ${y} C 232 ${y - 6}, 250 ${y - 22}, 252 ${y - 40} C 228 ${y - 34}, 208 ${y - 20}, 200 ${y}`;
  return (
    <motion.path
      d={d}
      style={{ scale: t, opacity, originX: '200px', originY: `${y}px` }}
      className="fill-leaf/85"
    />
  );
};

export const FigureHalophyte = ({ progress }) => {
  const [boost, setBoost] = useState(false);
  const crustOpacity = useTransform(progress, [0, 0.75], [1, 0]);
  const stemLength = useTransform(progress, [0.05, 0.55], [0, 1]);
  const ec = useTransform(progress, (v) => (8.2 - v * 5.1).toFixed(1));

  return (
    <Frame
      onPointerMove={() => setBoost(true)}
      onPointerLeave={() => setBoost(false)}
      readout={<Readout label="Topsoil salinity">EC <motion.span>{ec}</motion.span> dS/m</Readout>}
    >
      <svg viewBox="0 0 400 320" className="h-full w-full" role="img"
           aria-label="A halophyte drawing salt grains up out of saline topsoil">
        <rect x="0" y="216" width="400" height="104" className="fill-[#3B2E23]" />
        <motion.rect x="0" y="216" width="400" height="104" style={{ opacity: crustOpacity }} className="fill-[#DCD6C2]" />
        <line x1="0" y1="216" x2="400" y2="216" className="stroke-line-strong" strokeWidth="1" />

        {GRAINS.map((g, i) => (
          <SaltGrain key={i} progress={progress} x={g.x} y={g.y} delay={g.d} boost={boost} />
        ))}

        <motion.path
          d="M200 220 C 200 190, 200 150, 200 92"
          className="stroke-leaf" strokeWidth="3" strokeLinecap="round" fill="none"
          style={{ pathLength: stemLength }}
        />
        <Leaf progress={progress} at={0.30} side="l" y={186} />
        <Leaf progress={progress} at={0.42} side="r" y={162} />
        <Leaf progress={progress} at={0.54} side="l" y={138} />
        <Leaf progress={progress} at={0.66} side="r" y={116} />
      </svg>
    </Frame>
  );
};

/* 02 — Vertical farm standing above the tide ------------------------------- */

const TIERS = [
  { y: 96, label: 'Salt-tolerant creepers' },
  { y: 148, label: 'Leafy greens' },
  { y: 200, label: 'Seedling nursery' },
  { y: 252, label: 'Root crops' },
];

const Tier = ({ progress, index, y, active, onEnter }) => {
  const at = 0.12 + index * 0.16;
  const t = useTransform(progress, [at, at + 0.2], [0, 1]);
  const opacity = useTransform(t, [0, 0.25], [0, 1]);

  return (
    <motion.g style={{ opacity }} onPointerEnter={onEnter} className="cursor-pointer">
      {/* Forgiving hit area */}
      <rect x="96" y={y - 28} width="208" height="36" fill="transparent" />
      <motion.rect
        x="100" y={y} width="200" height="7" rx="2"
        style={{ scaleX: t, originX: '200px' }}
        className={active ? 'fill-leaf' : 'fill-ink/25'}
      />
      {[0, 1, 2, 3, 4].map((n) => {
        const px = 122 + n * 39;
        return (
          <motion.path
            key={n}
            d={`M${px} ${y} C ${px - 9} ${y - 9}, ${px - 11} ${y - 20}, ${px} ${y - 24} C ${px + 11} ${y - 20}, ${px + 9} ${y - 9}, ${px} ${y}`}
            style={{ scale: t, originX: `${px}px`, originY: `${y}px` }}
            className={active ? 'fill-leaf/80' : 'fill-leaf/35'}
          />
        );
      })}
    </motion.g>
  );
};

export const FigureVerticalFarm = ({ progress }) => {
  const [hovered, setHovered] = useState(1);
  const postLength = useTransform(progress, [0, 0.3], [0, 1]);

  return (
    <Frame readout={<Readout label={`Tier ${hovered + 1} of 4`}>{TIERS[hovered].label}</Readout>}>
      <svg viewBox="0 0 400 320" className="h-full w-full" role="img"
           aria-label="A four-tier vertical farm standing above a rising tide line">
        <motion.path
          d="M-40 296 C 20 288, 60 304, 120 296 C 180 288, 220 304, 280 296 C 340 288, 380 304, 440 296 L440 320 L-40 320 Z"
          className="fill-sky/60"
          animate={{ x: [0, -80, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <line x1="0" y1="296" x2="400" y2="296" className="stroke-line-strong" strokeWidth="1" />

        {[100, 300].map((x) => (
          <motion.line
            key={x} x1={x} y1="296" x2={x} y2="80"
            className="stroke-ink/45" strokeWidth="4" strokeLinecap="round"
            style={{ pathLength: postLength }}
          />
        ))}

        {TIERS.map((t, i) => (
          <Tier key={t.y} progress={progress} index={i} y={t.y}
                active={hovered === i} onEnter={() => setHovered(i)} />
        ))}
      </svg>
    </Frame>
  );
};

/* 03 — A forecast the smallholder can act on ------------------------------- */

const HISTORY = [
  [40, 210], [76, 198], [112, 204], [148, 182], [184, 190], [220, 166], [256, 172], [292, 150],
];
const FORECAST = [[292, 150], [322, 132], [352, 140], [382, 112]];
const toPath = (pts) => pts.map((p, i) => `${i ? 'L' : 'M'}${p[0]} ${p[1]}`).join(' ');

export const FigureAnalytics = ({ progress }) => {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState(null);

  const histLength = useTransform(progress, [0.05, 0.5], [0, 1]);
  const foreLength = useTransform(progress, [0.5, 0.85], [0, 1]);
  const foreOpacity = useTransform(progress, [0.48, 0.58], [0, 1]);

  // Snap the pointer to the nearest sampled reading.
  const onMove = (e) => {
    const r = svgRef.current?.getBoundingClientRect();
    if (!r) return;
    const x = ((e.clientX - r.left) / r.width) * 400;
    const all = [...HISTORY, ...FORECAST.slice(1)];
    let best = all[0];
    for (const p of all) if (Math.abs(p[0] - x) < Math.abs(best[0] - x)) best = p;
    setCursor({ x: best[0], y: best[1], forecast: best[0] > 292 });
  };

  const value = cursor ? (2.4 + (216 - cursor.y) / 26).toFixed(1) : null;

  return (
    <Frame
      onPointerMove={onMove}
      onPointerLeave={() => setCursor(null)}
      readout={
        <Readout label={cursor ? (cursor.forecast ? 'Forecast' : 'Recorded') : 'Salinity trend'}>
          {cursor ? `${value} dS/m` : 'Hover the chart'}
        </Readout>
      }
    >
      <svg ref={svgRef} viewBox="0 0 400 320" className="h-full w-full" role="img"
           aria-label="A salinity chart with recorded readings and a dashed forward forecast">
        {[110, 150, 190, 230].map((y) => (
          <line key={y} x1="24" y1={y} x2="384" y2={y} className="stroke-line" strokeWidth="1" />
        ))}
        <line x1="24" y1="256" x2="384" y2="256" className="stroke-line-strong" strokeWidth="1" />

        <motion.g style={{ opacity: foreOpacity }}>
          <line x1="292" y1="88" x2="292" y2="256" className="stroke-ink/25" strokeWidth="1" strokeDasharray="3 4" />
          <text x="298" y="100" className="fill-ink-faint font-mono" fontSize="10" letterSpacing="1.4">TODAY</text>
        </motion.g>

        <motion.path d={toPath(HISTORY)} fill="none" strokeWidth="2.5" strokeLinecap="round"
          strokeLinejoin="round" className="stroke-leaf" style={{ pathLength: histLength }} />
        <motion.path d={toPath(FORECAST)} fill="none" strokeWidth="2.5" strokeLinecap="round"
          strokeDasharray="5 5" className="stroke-amber"
          style={{ pathLength: foreLength, opacity: foreOpacity }} />

        {cursor && (
          <g>
            <line x1={cursor.x} y1="88" x2={cursor.x} y2="256" className="stroke-ink/30" strokeWidth="1" />
            <circle cx={cursor.x} cy={cursor.y} r="5" className={cursor.forecast ? 'fill-amber' : 'fill-leaf'} />
            <circle cx={cursor.x} cy={cursor.y} r="9" fill="none"
              className={cursor.forecast ? 'stroke-amber/40' : 'stroke-leaf/40'} strokeWidth="1.5" />
          </g>
        )}
      </svg>
    </Frame>
  );
};
