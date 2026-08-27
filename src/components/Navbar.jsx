import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Container, Button } from './ui';
import { EASE } from '../lib/motion';
import { APP_URL } from '../lib/data';

const NAV_LINKS = [
  { name: 'Solutions', path: '/solutions' },
  { name: 'Technology', path: '/technology' },
  { name: 'About', path: '/about' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // The bar starts transparent over the hero and condenses into a blurred
  // hairline once the page moves. Threshold is low so the transition happens
  // early and decisively rather than drifting.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock scroll and wire Escape while the mobile sheet is open.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300',
          scrolled || menuOpen
            ? 'border-b border-line bg-canvas/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <Container>
          <div className="flex h-[72px] items-center justify-between md:h-20">
            <Link to="/" className="flex items-center gap-2.5" aria-label="Urbor — home">
              <img src="/assets/media/logo.png" alt="" className="h-10 w-auto object-contain md:h-12" />
              <span className="font-display text-[1.0625rem] font-medium tracking-[-0.03em] text-ink">
                Urbor
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    clsx(
                      'relative rounded-sm px-3.5 py-2 text-sm font-medium transition-colors duration-200',
                      isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        // Shared layout id lets the indicator slide between
                        // items instead of cross-fading.
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-x-3.5 -bottom-px h-px bg-ink"
                          transition={{ duration: 0.3, ease: EASE }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <Button as="a" href={APP_URL} target="_blank" rel="noopener noreferrer" tone="primary" size="sm">
                Open the app
              </Button>
            </div>

            <button
              className="-mr-2 flex h-10 w-10 items-center justify-center rounded-sm text-ink md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={19} strokeWidth={1.6} /> : <Menu size={19} strokeWidth={1.6} />}
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-0 top-[72px] z-40 bg-canvas md:hidden"
          >
            <Container className="py-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i + 0.04, duration: 0.4, ease: EASE }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-line py-5 font-display text-2xl font-medium tracking-[-0.03em] text-ink"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Button
                as="a"
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="mt-8 w-full"
              >
                Open the app
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
