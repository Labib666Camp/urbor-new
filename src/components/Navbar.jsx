import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Solutions', path: '/solutions' },
        { name: 'Technology', path: '/technology' },
        { name: 'About', path: '/about' },
    ];

    return (
        <nav
            className={clsx(
                'fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-6'
            )}
        >
            <div className="pointer-events-auto w-full container mx-auto flex items-start justify-between">

                {/* 1. Logo (Outside the pill) */}
                <Link
                    to="/"
                    className="transition-transform hover:scale-105 drop-shadow-2xl"
                >
                    <img src="/assets/media/logo.png" alt="Urbor" className="h-24 md:h-32 w-auto object-contain" />
                </Link>

                {/* 2. Navbar Pill (Wider span) */}
                <div className={clsx(
                    "rounded-full px-12 py-4 flex items-center gap-8 transition-all duration-500 mx-auto",
                    "bg-brand-mustard shadow-2xl border-2 border-brand-moss/10 backdrop-blur-sm"
                )}>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    clsx(
                                        'text-lg font-bold transition-colors hover:text-brand-white font-sans',
                                        isActive ? 'text-brand-white' : 'text-brand-moss'
                                    )
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block pl-8 border-l border-brand-moss/20">
                        <a
                            href="https://urboranalytics-117932446247.asia-south1.run.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-moss text-brand-mustard px-8 py-3 rounded-full font-bold transition-all text-base shadow-lg hover:scale-105 active:scale-95 font-sans border-2 border-brand-moss hover:bg-transparent hover:text-brand-moss inline-block"
                        >
                            Get the App
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-brand-moss"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="md:hidden absolute top-28 right-6 left-6 bg-brand-mustard rounded-[2rem] shadow-2xl overflow-hidden p-8 z-50 pointer-events-auto border-2 border-brand-moss/10"
                    >
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-serif text-brand-moss hover:bg-brand-moss/10 p-4 rounded-2xl font-bold text-center"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-brand-moss/10 w-full my-2" />
                            <a
                                href="https://urboranalytics-117932446247.asia-south1.run.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-brand-moss text-brand-mustard w-full py-4 rounded-2xl font-bold text-xl text-center block"
                            >
                                Get the App
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
