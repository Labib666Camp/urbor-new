import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import clsx from 'clsx';

const COLS = 9;
const ROWS = 4;
const TOTAL = COLS * ROWS;

// Baseline and target electro-conductivity for the readout, in dS/m.
const EC_SALINE = 8.2;
const EC_RESTORED = 3.1;

// The idle demo stops well short of a full field, so a visitor arriving at any
// point still finds saline ground left to reclaim rather than a finished grid.
const DEMO_CEILING = Math.floor(TOTAL * 0.45);

/**
 * A plot of coastal farmland the visitor can restore by dragging across it.
 * Cells spread to their neighbours, so a single pass reclaims a swathe rather
 * than a pixel — the point being that restoration propagates.
 */
const RestorationField = ({ className }) => {
  const reduced = useReducedMotion();
  const [restored, setRestored] = useState(() => new Set());
  const touched = useRef(false);
  const timers = useRef([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  // One batched state update for any set of cells.
  const addCells = useCallback((indices) => {
    setRestored((prev) => {
      let changed = false;
      const next = new Set(prev);
      indices.forEach((i) => {
        if (i >= 0 && i < TOTAL && !next.has(i)) {
          next.add(i);
          changed = true;
        }
      });
      return changed ? next : prev;
    });
  }, []);

  // Restoring a cell bleeds into its four orthogonal neighbours a beat later.
  // The spread is deliberately one level deep, so no recursion is involved.
  const restore = useCallback((i) => {
    if (i < 0 || i >= TOTAL) return;
    addCells([i]);
    if (reduced) return;
    const col = i % COLS;
    const neighbours = [
      col > 0 ? i - 1 : -1,
      col < COLS - 1 ? i + 1 : -1,
      i - COLS,
      i + COLS,
    ];
    const t = setTimeout(() => addCells(neighbours), 130);
    timers.current.push(t);
  }, [addCells, reduced]);

  // Idle demo so the panel is alive before anyone touches it.
  useEffect(() => {
    if (reduced) return undefined;
    const id = setInterval(() => {
      if (touched.current) return clearInterval(id);
      setRestored((prev) => {
        if (prev.size >= DEMO_CEILING) return prev;
        const open = [];
        for (let i = 0; i < TOTAL; i += 1) if (!prev.has(i)) open.push(i);
        const next = new Set(prev);
        next.add(open[Math.floor(Math.random() * open.length)]);
        return next;
      });
    }, 280);
    return () => clearInterval(id);
  }, [reduced]);

  const engage = (i) => {
    touched.current = true;
    restore(i);
  };

  const pct = Math.round((restored.size / TOTAL) * 100);
  const ec = (EC_SALINE - (EC_SALINE - EC_RESTORED) * (restored.size / TOTAL)).toFixed(1);
  const complete = restored.size >= TOTAL;

  const cells = useMemo(() => Array.from({ length: TOTAL }, (_, i) => i), []);

  return (
    <div
      className={clsx('rounded-xl border border-line bg-surface p-5', className)}
      role="group"
      aria-label="Interactive demonstration of coastal farmland recovering from salinity"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="eyebrow text-ink-faint">Field recovery</span>
        <button
          type="button"
          onClick={() => {
            touched.current = true;
            timers.current.forEach(clearTimeout);
            timers.current = [];
            setRestored(complete ? new Set() : new Set(cells));
          }}
          className="rounded-sm px-2 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-faint transition-colors duration-200 hover:bg-ink/[0.04] hover:text-ink"
        >
          {complete ? 'Reset' : 'Restore all'}
        </button>
      </div>

      <div
        className="mt-4 grid gap-1"
        style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
        onPointerLeave={() => { touched.current = true; }}
        aria-hidden="true"
      >
        {cells.map((i) => {
          const on = restored.has(i);
          return (
            <span
              key={i}
              onPointerEnter={() => engage(i)}
              onPointerDown={() => engage(i)}
              className={clsx(
                'aspect-square cursor-crosshair rounded-[2px] transition-[background-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                on ? 'bg-leaf' : 'bg-[#E3DDC7] hover:bg-[#D6CFB4]'
              )}
              style={on ? { transform: 'scale(1)' } : undefined}
            />
          );
        })}
      </div>

      <div className="mt-4 flex items-end justify-between border-t border-line pt-3">
        <div>
          <div className="eyebrow text-ink-faint">Reclaimed</div>
          <div className="mt-0.5 font-display text-xl font-normal tabular-nums tracking-[-0.03em]">
            {pct}%
          </div>
        </div>
        <div className="text-right">
          <div className="eyebrow text-ink-faint">Topsoil salinity</div>
          <div className="mt-1 font-mono text-sm tabular-nums text-ink">{ec} dS/m</div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {pct}% of the field reclaimed, topsoil salinity {ec} decisiemens per metre.
      </p>
    </div>
  );
};

export default RestorationField;
