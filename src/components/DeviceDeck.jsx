import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import clsx from 'clsx';
import { EASE } from '../lib/motion';

// Screens are 1170x2532 captures, so the frame carries the device aspect.
const SCREEN_RATIO = '1170 / 2532';

const SCREENS = [
  { key: 'dashboard', src: '/assets/app_screens/homepage.png', name: 'Farmer dashboard', body: 'Every plot a household works, with current conditions and health status at a glance.' },
  { key: 'analytics', src: '/assets/app_screens/analytics.png', name: 'Salinity analytics', body: 'NDVI overlays and the salinity forecast for a selected plot, with confidence bands.' },
  { key: 'tools', src: '/assets/app_screens/tools.png', name: 'Field tools', body: 'Advisory, crop health and the diagnostic tools a field officer carries between visits.' },
];

/**
 * Three device frames on one stage: the active screen sits upright at centre,
 * the other two angle back on either side. Clicking a flanking screen — or
 * pressing an arrow key — rotates it forward.
 */
const DeviceDeck = () => {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [wide, setWide] = useState(true);

  // The side offset is a share of the frame's own width, so it tracks the
  // responsive frame size; only the ratio changes between breakpoints.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // Offset is a share of the frame's own width. At ~94% the flanking frames
  // clear the front one almost entirely, so all three read as pickable rather
  // than as a stack.
  const offset = wide ? 94 : 66;
  const count = SCREENS.length;

  const step = useCallback((dir) => setActive((i) => (i + dir + count) % count), [count]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
  };

  return (
    <div>
      <div
        className="relative h-[380px] select-none md:h-[580px]"
        role="group"
        aria-label="App screens — use arrow keys to change the front screen"
        onKeyDown={onKeyDown}
      >
        {SCREENS.map((s, i) => {
          // 0 = front, 1 = right, 2 = left
          const pos = (i - active + count) % count;
          const isFront = pos === 0;
          const x = pos === 1 ? offset : pos === 2 ? -offset : 0;

          return (
            <div key={s.key} className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <motion.button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${s.name}`}
                aria-current={isFront}
                tabIndex={isFront ? -1 : 0}
                // Start at the resting transform rather than animating into it,
                // so the deck is laid out correctly on first paint.
                initial={false}
                animate={{
                  x: `${x}%`,
                  scale: isFront ? 1 : 0.86,
                  rotate: pos === 1 ? 6 : pos === 2 ? -6 : 0,
                  opacity: isFront ? 1 : 0.65,
                }}
                transition={reduced ? { duration: 0 } : { duration: 0.55, ease: EASE }}
                style={{ zIndex: isFront ? 30 : 20 }}
                className={clsx(
                  'pointer-events-auto w-[150px] rounded-[1.75rem] md:w-[236px]',
                  isFront ? 'cursor-default' : 'cursor-pointer hover:opacity-85'
                )}
              >
                <div className="overflow-hidden rounded-[1.75rem] border-[5px] border-moss-deep bg-moss-deep shadow-[0_24px_70px_-30px_rgba(22,36,29,0.55)] md:border-[6px]">
                  <img
                    src={s.src}
                    alt={s.name}
                    loading="lazy"
                    className="block w-full"
                    style={{ aspectRatio: SCREEN_RATIO }}
                  />
                </div>
              </motion.button>
            </div>
          );
        })}
      </div>

      {/* Caption + indicators */}
      <div className="mt-10 flex flex-col items-center gap-5 text-center">
        <div className="h-[86px] max-w-md md:h-[74px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={SCREENS[active].key}
              initial={reduced ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 1 } : { opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: EASE }}
            >
              <h3 className="font-display text-xl font-medium tracking-[-0.02em]">{SCREENS[active].name}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-muted">{SCREENS[active].body}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2">
          {SCREENS.map((s, i) => (
            <button
              key={s.key}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${s.name}`}
              aria-current={i === active}
              className={clsx(
                'h-1.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                i === active ? 'w-7 bg-ink' : 'w-1.5 bg-ink/20 hover:bg-ink/40'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeviceDeck;
