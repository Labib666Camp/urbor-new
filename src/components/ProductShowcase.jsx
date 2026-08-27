import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Container, SectionHead, GridLines } from './ui';
import { EASE } from '../lib/motion';

const FEATURES = [
  {
    key: 'analytics',
    label: 'Analyse',
    title: 'AI farm analytics',
    body: 'Satellite imagery and micro-climatic data resolved down to a single plot, so advice reflects the field a farmer actually works.',
    meta: '98% classification accuracy',
    image: '/assets/app_screens/homepage.png',
  },
  {
    key: 'tidal',
    label: 'Warn',
    title: 'Tidal alerts',
    body: 'SMS warnings three days ahead of a salinity intrusion event — delivered on feature phones, no app or data plan required.',
    meta: '3-day lead time · SMS',
    image: '/assets/app_screens/tidal.png',
  },
  {
    key: 'recovery',
    label: 'Recover',
    title: 'Soil recovery tracking',
    body: 'Salinity reduction and nutrient replenishment charted over successive harvest cycles, so progress is measured rather than assumed.',
    meta: 'Per-cycle EC & pH history',
    image: '/assets/app_screens/soil_recovery.png',
  },
  {
    key: 'predictive',
    label: 'Forecast',
    title: 'Predictive intrusion model',
    body: 'Salinity intrusion zones forecast fourteen days out from satellite telemetry and a decade of tidal records.',
    meta: '14-day forecast horizon',
    image: '/assets/app_screens/analytics.png',
  },
];

const CYCLE_MS = 7000;

const ProductShowcase = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const advance = useCallback(() => setActive((i) => (i + 1) % FEATURES.length), []);

  // Auto-advance, but yield to the reader: hovering the panel or picking a tab
  // by hand stops the carousel from moving under them.
  useEffect(() => {
    if (paused) return undefined;
    timer.current = setTimeout(advance, CYCLE_MS);
    return () => clearTimeout(timer.current);
  }, [active, paused, advance]);

  const select = (i) => {
    setActive(i);
    setPaused(true);
  };

  const feature = FEATURES[active];

  return (
    <section
      className="relative overflow-hidden bg-moss py-20 text-canvas md:py-24 grain"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <GridLines tone="dark" />

      <Container className="relative z-10">
        <SectionHead
          eyebrow="The platform"
          tone="dark"
          title="One system, from satellite to seedling."
          lede="Everything Urbor measures in orbit or in the soil resolves to a single decision a farmer can act on this week."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Tab rail */}
          <div className="lg:col-span-5">
            <div role="tablist" aria-label="Platform capabilities" className="flex flex-col">
              {FEATURES.map((f, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={f.key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => select(i)}
                    className={clsx(
                      'group relative border-t border-canvas/12 py-6 text-left transition-colors duration-300',
                      i === FEATURES.length - 1 && 'border-b',
                      !isActive && 'hover:bg-canvas/[0.03]'
                    )}
                  >
                    {/* Progress rule doubles as the active indicator. */}
                    {isActive && (
                      <motion.span
                        key={`${f.key}-${active}-${paused}`}
                        className="absolute inset-x-0 -top-px h-px origin-left bg-mint"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: paused ? 0.4 : CYCLE_MS / 1000, ease: paused ? EASE : 'linear' }}
                      />
                    )}

                    <div className="flex items-baseline gap-4">
                      <span
                        className={clsx(
                          'font-mono text-[0.6875rem] tracking-[0.14em] transition-colors duration-300',
                          isActive ? 'text-mint' : 'text-canvas/30'
                        )}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <h3
                          className={clsx(
                            'font-display text-xl font-medium tracking-[-0.02em] transition-colors duration-300',
                            isActive ? 'text-canvas' : 'text-canvas/50 group-hover:text-canvas/75'
                          )}
                        >
                          {f.title}
                        </h3>

                        {/* Body copy is revealed only for the active tab, so the
                            rail stays scannable instead of becoming a wall. */}
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: EASE }}
                              className="overflow-hidden"
                            >
                              <p className="pt-3 text-[0.9375rem] leading-relaxed text-canvas/60">{f.body}</p>
                              <p className="eyebrow pt-4 text-mint/70">{f.meta}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Screen */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-xl border border-canvas/12 bg-moss-deep/60 lg:max-w-none">
              <AnimatePresence mode="wait">
                <motion.img
                  key={feature.key}
                  src={feature.image}
                  alt={feature.title}
                  initial={{ opacity: 0, scale: 1.015 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.995 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-canvas/[0.06]" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductShowcase;
