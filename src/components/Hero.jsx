import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-slate-900/60 z-10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/assets/media/site_bg.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-16">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                    Cultivating Hope in <span className="text-brand-primary">Saline Soils</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">
                    Urbor empowers coastal communities to combat salinity and reclaim their livelihood through data-driven agriculture.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-brand-primary/25 flex items-center justify-center">
                        Explore Solutions
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center">
                        Watch the Story
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
