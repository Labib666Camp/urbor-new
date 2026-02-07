import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-brand-moss text-brand-cream pt-24 pb-12 rounded-t-[3rem] mt-12 mx-2">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-4xl font-serif font-bold mb-6 tracking-tight">URBOR</h2>
                        <p className="text-brand-cream/60 max-w-sm text-lg leading-relaxed font-sans">
                            Empowering farmers with AI-driven insights to restore soil health and secure sustainable futures.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-brand-mustard text-lg mb-6 tracking-wide">Company</h3>
                        <ul className="space-y-4 text-brand-cream/70 font-medium">
                            <li><Link to="/about" className="hover:text-brand-white transition-colors">About Us</Link></li>
                            <li><Link to="/solutions" className="hover:text-brand-white transition-colors">Solutions</Link></li>
                            <li><Link to="/technology" className="hover:text-brand-white transition-colors">Technology</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-brand-mustard text-lg mb-6 tracking-wide">Connect</h3>
                        <ul className="space-y-4 text-brand-cream/70 font-medium">
                            <li><a href="https://www.facebook.com/urbor.ag" target="_blank" rel="noopener noreferrer" className="hover:text-brand-white transition-colors">Facebook</a></li>
                            <li><a href="https://linkedin.com/company/urbor-ag/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-white transition-colors">LinkedIn</a></li>
                            <li><a href="mailto:contact.urbor.ag@gmail.com" className="hover:text-brand-white transition-colors">contact.urbor.ag@gmail.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-brand-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center text-brand-cream/40 text-sm">
                    <p>© {new Date().getFullYear()} Urbor. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-brand-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
