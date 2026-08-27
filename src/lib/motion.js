// Shared motion language.
//
// The rule this file encodes: motion should feel *fast and settled*, not
// springy. Everything eases out on a quintic curve, travels a short distance
// (12-20px, never 40+), and finishes in well under half a second. Nothing
// scales, rotates, or bounces on entry.

export const EASE = [0.22, 1, 0.36, 1];

export const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

// Reduced-motion counterpart: same end state, no travel, no duration. Keeps
// content visible without animating it.
export const revealStatic = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 0 } },
};

export const revealStagger = (stagger = 0.06, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

// Fade only — for elements where vertical travel would fight the layout
// (full-bleed media, absolutely positioned overlays).
export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

// Standard viewport trigger. `once` so sections don't re-animate on scroll-up,
// and a negative bottom margin so reveals fire slightly before the element
// reaches the fold rather than after.
export const inView = { once: true, margin: "0px 0px -12% 0px" };
