import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Technology from './pages/Technology';
import About from './pages/About';
import { EASE } from './lib/motion';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

// Route changes cross-fade with a 6px rise. Short enough that navigation still
// feels immediate — the point is continuity, not a transition people notice.
const Page = ({ children }) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduced ? { duration: 0 } : { duration: 0.32, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><Home /></Page>} />
        <Route path="/solutions" element={<Page><Solutions /></Page>} />
        <Route path="/technology" element={<Page><Technology /></Page>} />
        <Route path="/about" element={<Page><About /></Page>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <Router>
    <ScrollToTop />
    <div className="flex min-h-screen flex-col bg-canvas font-sans text-ink">
      <Navbar />
      <main className="flex-grow">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
