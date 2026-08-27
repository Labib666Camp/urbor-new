import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  motion, useScroll, useTransform, useMotionValue,
  useMotionValueEvent, useReducedMotion,
} from 'framer-motion';
import clsx from 'clsx';
import { Container, SectionHead, ArrowLink } from '../ui';
import { EASE } from '../../lib/motion';
import { FigureHalophyte, FigureVerticalFarm, FigureAnalytics } from './figures';

const STEPS = [
  {
    title: 'We breed plants that restore soil from salinity',
    body: 'Salt-accumulating halophytes such as Hatishur are selected and propagated to draw salinity up out of the topsoil, supported by gypsum and organic amendments that displace sodium from soil particles.',
    Figure: FigureHalophyte,
  },
  {
    title: 'We build vertical farms for coastal communities',
    body: 'Tiered structures planted with native salt-tolerant creepers sidestep soil dependency entirely, keep growing surface above the tide line, and shade the ground to slow evaporation and surface salt crystallisation.',
    Figure: FigureVerticalFarm,
  },
  {
    title: 'We bring frontier analytics to smallholder farmers',
    body: 'Satellite telemetry, tidal records and probe readings resolve into one forward view of a single plot — delivered in the app, or over SMS where there is no data connection.',
    Figure: FigureAnalytics,
  },
];

/* Desktop: one pinned figure, scrubbed by scroll ---------------------------- */

const PinnedFigure = ({ step, index, scrollYProgress, active }) => {
  // Each figure scrubs across its own third of the section's scroll range.
  const progress = useTransform(scrollYProgress, [index / 3, (index + 1) / 3], [0, 1]);
  const { Figure } = step;
  return (
    <motion.div
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.4, ease: EASE }}
      className={clsx('absolute inset-0', active ? 'pointer-events-auto' : 'pointer-events-none')}
      aria-hidden={!active}
    >
      <Figure progress={progress} />
    </motion.div>
  );
};

const DesktopScroll = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = Math.min(STEPS.length - 1, Math.max(0, Math.floor(v * STEPS.length)));
    setActive((cur) => (cur === next ? cur : next));
  });

  return (
    <div ref={ref} className="relative hidden lg:block" style={{ height: `${STEPS.length * 100}vh` }}>
      <div className="sticky top-0 flex h-screen items-center">
        <Container className="w-full">
          <div className="grid grid-cols-12 items-center gap-16">
            <div className="col-span-5">
              {STEPS.map((s, i) => {
                const isActive = i === active;
                return (
                  <div key={s.title} className="relative border-t border-line py-7 last:border-b">
                    {isActive && (
                      <motion.span
                        layoutId="approach-marker"
                        className="absolute inset-y-0 -left-4 w-px bg-leaf"
                        transition={{ duration: 0.4, ease: EASE }}
                      />
                    )}
                    <div className="flex gap-5">
                      <span
                        className={clsx(
                          'mt-1.5 font-mono text-[0.6875rem] tracking-[0.14em] transition-colors duration-300',
                          isActive ? 'text-leaf' : 'text-ink-faint/60'
                        )}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <h3
                          className={clsx(
                            'font-display text-[1.75rem] font-medium leading-[1.15] tracking-[-0.03em] transition-colors duration-300',
                            isActive ? 'text-ink' : 'text-ink-faint/55'
                          )}
                        >
                          {s.title}
                        </h3>
                        <motion.div
                          animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                          transition={{ duration: 0.4, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 text-[0.9375rem] leading-relaxed text-ink-muted">{s.body}</p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="col-span-7">
              <div className="relative aspect-[5/4] w-full">
                {STEPS.map((s, i) => (
                  <PinnedFigure
                    key={s.title} step={s} index={i}
                    scrollYProgress={scrollYProgress} active={i === active}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

/* Mobile / reduced-motion: stacked, each figure scrubbed by its own block ---- */

const StackedStep = ({ step, index, still }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.55'] });
  const settled = useMotionValue(1);
  const { Figure } = step;

  return (
    <div ref={ref} className="border-t border-line py-12 first:border-t-0 first:pt-0">
      <div className="flex gap-5">
        <span className="mt-1.5 font-mono text-[0.6875rem] tracking-[0.14em] text-leaf">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex-1">
          <h3 className="font-display text-2xl font-medium leading-[1.15] tracking-[-0.03em]">{step.title}</h3>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-muted">{step.body}</p>
        </div>
      </div>
      <div className="mt-8">
        <Figure progress={still ? settled : scrollYProgress} />
      </div>
    </div>
  );
};

const StackedScroll = ({ still, className }) => (
  <div className={className}>
    {STEPS.map((s, i) => (
      <StackedStep key={s.title} step={s} index={i} still={still} />
    ))}
  </div>
);

/* ------------------------------------------------------------------------- */

const ApproachScroll = () => {
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-canvas py-20 md:py-24">
      <Container>
        <SectionHead
          eyebrow="The approach"
          title="Science and nature, working the same field."
          action={<ArrowLink as={Link} to="/solutions">View full methodology</ArrowLink>}
        />
      </Container>

      {reduced ? (
        <Container><StackedScroll still /></Container>
      ) : (
        <>
          <DesktopScroll />
          <Container><StackedScroll className="lg:hidden" /></Container>
        </>
      )}
    </section>
  );
};

export default ApproachScroll;
