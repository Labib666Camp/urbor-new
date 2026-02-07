import React from 'react';
import { motion } from 'framer-motion';

// Dynamically import all images from partners folder
// Note: In Vite, we can use import.meta.glob, but to keep it simple with existing files we will list them or try dynamic.
// For now, I'll list the known ones from the list_dir output earlier.
// unicef.png, ict.png, startup_bd.png, wageningen.png, youth4climate.png, etc.

const PartnerMarquee = () => {
    const partners = [
        { name: 'UNICEF', logo: '/assets/partners/unicef.png' },
        { name: 'ICT Division', logo: '/assets/partners/ict.png' },
        { name: 'Startup Bangladesh', logo: '/assets/partners/startup_bd.png' },
        { name: 'Wageningen University', logo: '/assets/partners/wageningen.png' },
        { name: 'Youth4Climate', logo: '/assets/partners/youth4climate.png' },
        { name: 'ICCCAD', logo: '/assets/partners/icccad.png' },
        { name: 'Genu', logo: '/assets/partners/genu.png' },
    ];

    return (
        <div className="w-full bg-slate-50 border-b border-slate-100 py-10 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />

            <div className="flex w-full items-center">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap px-8 md:pl-24 z-20 hidden md:block">
                    Trusted By
                </h3>

                <div className="flex overflow-hidden relative w-full mask-gradient">
                    <motion.div
                        className="flex gap-16 items-center pr-16"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30,
                        }}
                        style={{ width: "max-content" }}
                    >
                        {[...partners, ...partners, ...partners].map((partner, index) => (
                            <div key={index} className="h-12 w-auto flex-shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                                <img src={partner.logo} alt={partner.name} className="h-full w-auto object-contain" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default PartnerMarquee;
