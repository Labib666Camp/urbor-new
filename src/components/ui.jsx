import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import clsx from 'clsx';
import { reveal, revealStatic, revealStagger, inView } from '../lib/motion';

// Framer Motion writes inline styles via rAF, so the CSS `prefers-reduced-motion`
// block in index.css cannot reach it. Reveals must opt out in JS instead —
// otherwise reduced-motion users still get the travel, and content that starts
// at opacity 0 depends on an animation they asked not to run.
const useRevealVariants = () => (useReducedMotion() ? revealStatic : reveal);

/* Layout ------------------------------------------------------------------ */

export const Container = ({ className, children, width = 'default' }) => (
  <div
    className={clsx(
      'mx-auto w-full px-6 md:px-10',
      width === 'default' && 'max-w-[1180px]',
      width === 'narrow' && 'max-w-[760px]',
      width === 'wide' && 'max-w-[1400px]',
      className
    )}
  >
    {children}
  </div>
);

export const Section = ({ className, children, tone = 'canvas', id, ...rest }) => (
  <section
    id={id}
    className={clsx(
      'relative py-20 md:py-24',
      tone === 'canvas' && 'bg-canvas text-ink',
      tone === 'sunk' && 'bg-sunk text-ink',
      tone === 'surface' && 'bg-surface text-ink',
      tone === 'dark' && 'bg-moss text-canvas',
      className
    )}
    {...rest}
  >
    {children}
  </section>
);

/* Reveal wrappers --------------------------------------------------------- */

export const Reveal = ({ children, className, delay = 0, as = 'div' }) => {
  const Comp = motion[as] || motion.div;
  const variants = useRevealVariants();
  return (
    <Comp
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Comp>
  );
};

// Parent for staggered children. Children must use <RevealItem>.
export const RevealGroup = ({ children, className, stagger = 0.06, delay = 0 }) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      variants={revealStagger(reduced ? 0 : stagger, reduced ? 0 : delay)}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const RevealItem = ({ children, className }) => {
  const variants = useRevealVariants();
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
};

/* Typography -------------------------------------------------------------- */

export const Eyebrow = ({ children, className, tone = 'faint' }) => (
  <span
    className={clsx(
      'eyebrow inline-flex items-center gap-2',
      tone === 'faint' && 'text-ink-faint',
      tone === 'leaf' && 'text-leaf',
      tone === 'amber' && 'text-amber',
      tone === 'onDark' && 'text-canvas/45',
      className
    )}
  >
    {children}
  </span>
);

// Section header: eyebrow + headline + optional lede and trailing action.
export const SectionHead = ({ eyebrow, title, lede, action, tone = 'light', align = 'left', className }) => (
  <div
    className={clsx(
      'mb-12 flex flex-col gap-6 md:mb-14',
      align === 'left' && action && 'md:flex-row md:items-end md:justify-between',
      align === 'center' && 'items-center text-center',
      className
    )}
  >
    <div className={clsx('max-w-2xl', align === 'center' && 'mx-auto')}>
      {eyebrow && (
        <Reveal>
          <Eyebrow tone={tone === 'dark' ? 'onDark' : 'faint'}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={clsx('text-headline mt-5', tone === 'dark' && 'text-canvas')}>{title}</h2>
      </Reveal>
      {lede && (
        <Reveal delay={0.1}>
          <p className={clsx('mt-5 text-lg leading-relaxed', tone === 'dark' ? 'text-canvas/60' : 'text-ink-muted')}>
            {lede}
          </p>
        </Reveal>
      )}
    </div>
    {action && <Reveal delay={0.15} className="shrink-0">{action}</Reveal>}
  </div>
);

/* Controls ---------------------------------------------------------------- */

// Buttons lift 1px and shift border contrast. No scaling, no shadow bloom.
const BUTTON_BASE =
  'group inline-flex items-center justify-center gap-2 rounded-md font-medium ' +
  'transition-[transform,background-color,border-color,color] duration-200 ' +
  'ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px active:translate-y-0';

const BUTTON_SIZES = {
  sm: 'h-9 px-4 text-[0.8125rem]',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-[0.9375rem]',
};

const BUTTON_TONES = {
  primary: 'bg-ink text-canvas hover:bg-moss',
  onDark: 'bg-canvas text-ink hover:bg-mint',
  outline: 'border border-line-strong bg-transparent text-ink hover:border-ink hover:bg-ink/[0.03]',
  outlineDark: 'border border-canvas/20 bg-transparent text-canvas hover:border-canvas/45 hover:bg-canvas/5',
  ghost: 'text-ink hover:bg-ink/[0.04]',
};

export const Button = ({
  as: Tag = 'button',
  tone = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}) => (
  <Tag className={clsx(BUTTON_BASE, BUTTON_SIZES[size], BUTTON_TONES[tone], className)} {...rest}>
    {children}
  </Tag>
);

// Text link with an arrow that translates on hover.
export const ArrowLink = ({ as: Tag = 'a', children, className, tone = 'light', ...rest }) => (
  <Tag
    className={clsx(
      'group inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200',
      tone === 'dark' ? 'text-canvas/70 hover:text-canvas' : 'text-ink hover:text-leaf',
      className
    )}
    {...rest}
  >
    {children}
    <svg
      width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
      className="transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5"
    >
      <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4"
            strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </Tag>
);

/* Surfaces ---------------------------------------------------------------- */

// The workhorse card. Elevation reads through border contrast, not shadow.
export const Card = ({ className, children, interactive = true, tone = 'light', ...rest }) => (
  <div
    className={clsx(
      'relative overflow-hidden rounded-lg border transition-[border-color,background-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
      tone === 'light' && 'border-line bg-surface',
      tone === 'dark' && 'border-canvas/10 bg-canvas/[0.03]',
      interactive && tone === 'light' && 'hover:-translate-y-0.5 hover:border-line-strong',
      interactive && tone === 'dark' && 'hover:-translate-y-0.5 hover:border-canvas/25 hover:bg-canvas/[0.06]',
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

// Small status pill — the live-data cue, kept to one per view.
export const LiveTag = ({ children, className, tone = 'light' }) => (
  <span
    className={clsx(
      'eyebrow inline-flex items-center gap-2 rounded-full border px-3 py-1.5',
      tone === 'light' ? 'border-line bg-surface/80 text-ink-muted' : 'border-canvas/15 bg-moss-deep/60 text-canvas/70',
      'backdrop-blur-md',
      className
    )}
  >
    <span className="relative flex h-1.5 w-1.5">
      <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-leaf" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-leaf" />
    </span>
    {children}
  </span>
);

/* Data -------------------------------------------------------------------- */

// Figures are set in display type at weight 400 so they read as data, not as
// marketing shouting.
export const Stat = ({ value, label, tone = 'light' }) => (
  <div className={clsx('border-t pt-5', tone === 'dark' ? 'border-canvas/12' : 'border-line')}>
    <div
      className={clsx(
        'font-display text-4xl font-normal tracking-[-0.03em] tabular-nums md:text-5xl',
        tone === 'dark' ? 'text-canvas' : 'text-ink'
      )}
    >
      {value}
    </div>
    <div className={clsx('eyebrow mt-3', tone === 'dark' ? 'text-canvas/45' : 'text-ink-faint')}>{label}</div>
  </div>
);

/* Decoration -------------------------------------------------------------- */

// Faint ruled grid — structural texture borrowed from Linear, dialled to
// near-invisible so it reads as paper, not as a chart.
export const GridLines = ({ className, tone = 'light' }) => (
  <div
    aria-hidden="true"
    className={clsx('pointer-events-none absolute inset-0', className)}
    style={{
      backgroundImage: `linear-gradient(to right, ${
        tone === 'dark' ? 'rgba(250,250,242,0.05)' : 'rgba(22,36,29,0.045)'
      } 1px, transparent 1px)`,
      backgroundSize: '88px 100%',
    }}
  />
);
