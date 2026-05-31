import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-moss text-brand-cream pt-32 pb-12 rounded-t-[3rem] mt-0">
            <div className="container mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-32 border-b border-brand-cream/10 pb-20">
                    <div className="max-w-xl">
                        <h2 className="text-6xl font-serif font-bold mb-8 tracking-tight text-brand-mustard">URBOR</h2>
                        <p className="text-brand-cream/70 text-2xl leading-relaxed font-sans font-light">
                            Empowering farmers with AI-driven insights to restore soil health and secure sustainable futures.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-16">
                        <div>
                            <h3 className="font-bold text-brand-mustard text-sm uppercase tracking-widest mb-8">Company</h3>
                            <ul className="space-y-6 text-brand-cream/60 font-medium text-lg">
                                <li><Link to="/about" className="hover:text-brand-white transition-colors flex items-center gap-2 group">About Us <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
                                <li><Link to="/solutions" className="hover:text-brand-white transition-colors flex items-center gap-2 group">Solutions <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
                                <li><Link to="/technology" className="hover:text-brand-white transition-colors flex items-center gap-2 group">Technology <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-brand-mustard text-sm uppercase tracking-widest mb-8">Connect</h3>
                            <ul className="space-y-6 text-brand-cream/60 font-medium text-lg">
                                <li><a href="https://www.facebook.com/urbor.ag" target="_blank" rel="noopener noreferrer" className="hover:text-brand-white transition-colors">Facebook</a></li>
                                <li><a href="https://linkedin.com/company/urbor-ag/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-white transition-colors">LinkedIn</a></li>
                                <li><a href="mailto:contact.urbor.ag@gmail.com" className="hover:text-brand-white transition-colors">contact.urbor.ag@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-brand-cream/40 text-sm font-medium tracking-wide">
                    <p>© {new Date().getFullYear()} Urbor. All rights reserved.</p>
                    <div className="flex space-x-8 mt-6 md:mt-0">
                        <a href="#" className="hover:text-brand-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
