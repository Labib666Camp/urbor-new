import React from 'react';
import { motion } from 'framer-motion';
import { Database, Wifi, Cpu, Layers, Satellite, Smartphone, CloudLightning, Shield } from 'lucide-react';

const TechCard = ({ title, desc, icon: Icon, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-brand-white p-8 rounded-[2.5rem] shadow-sm border border-brand-sand hover:shadow-xl hover:border-brand-mustard/30 transition-all duration-500 h-full flex flex-col"
    >
        <div className="w-14 h-14 rounded-2xl bg-brand-moss/5 flex items-center justify-center mb-6 text-brand-moss">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold font-serif text-brand-moss mb-4">{title}</h3>
        <p className="text-brand-moss/70 leading-relaxed text-sm font-sans flex-grow">
            {desc}
        </p>
    </motion.div>
);

const AppMockup = ({ src, alt, className, rotation = 0 }) => (
    <motion.div
        initial={{ y: 50, opacity: 0, rotate: rotation }}
        whileInView={{ y: 0, opacity: 1, rotate: rotation }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`relative shrink-0 w-[280px] md:w-[320px] rounded-[2.5rem] border-8 border-brand-moss bg-brand-moss overflow-hidden shadow-2xl ${className}`}
    >
        <img src={src} alt={alt} className="w-full h-auto object-contain bg-brand-sand" />
        {/* Gloss Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
    </motion.div>
);

const Technology = () => {
    return (
        <div className="bg-brand-cream min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="text-brand-mustard font-bold tracking-widest uppercase text-sm mb-4 block">The Urbor Architecture</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-brand-moss mb-6">
                        Data to Action Loop.
                    </h1>
                    <p className="text-xl text-brand-moss/60 max-w-2xl mx-auto font-sans">
                        Synthesizing satellite imagery, ground-truth sensors, and predictive AI into a unified platform for coastal resilience.
                    </p>
                </div>

                {/* App Screens Showcase - Floating Deck */}
                <div className="relative mb-32 py-10">
                    {/* Background Decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-brand-moss/5 skew-y-3 rounded-[3rem] -z-10" />

                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 perspective-1000">
                        <AppMockup
                            src="/assets/app_screens/homepage.png"
                            alt="Farmer Dashboard"
                            rotation={-6}
                            className="z-10"
                        />
                        <AppMockup
                            src="/assets/app_screens/analytics.png"
                            alt="Salinity Analytics"
                            rotation={0}
                            className="z-20 md:-mt-12 scale-110"
                        />
                        <AppMockup
                            src="/assets/app_screens/tools.png"
                            alt="IoT Tools"
                            rotation={6}
                            className="z-10"
                        />
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-sm font-bold text-brand-moss/40 uppercase tracking-widest">
                            Full-Fidelity Interfaces • Offline First • Localized
                        </p>
                    </div>
                </div>

                {/* Technical Deep Dive Cards */}
                <div className="mb-16">
                    <h2 className="text-3xl font-serif text-brand-moss mb-10 border-b border-brand-sand/50 pb-4">
                        Technical Specifications
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <TechCard
                            icon={Satellite}
                            title="Remote Sensing"
                            desc="Utilization of Sentinel-2 multispectral imagery to calculate NDVI (Normalized Difference Vegetation Index) and NDWI (Normalized Difference Water Index) for macro-scale salinity mapping."
                            delay={0.1}
                        />
                        <TechCard
                            icon={Wifi}
                            title="IoT Mesh Network"
                            desc="LoRaWAN enabled soil probes measuring Electro-Conductivity (EC) and pH levels. Designed for low-power, long-range transmission in rural connectivity dead-zones."
                            delay={0.2}
                        />
                        <TechCard
                            icon={Cpu}
                            title="LSTM Predictive Models"
                            desc="Long Short-Term Memory recurrent neural networks trained on 10+ years of tidal and salinity data to forecast saltwater intrusion events with 14-day lead time."
                            delay={0.3}
                        />
                        <TechCard
                            icon={Smartphone}
                            title="Edge Computing"
                            desc="On-device computer vision models (TensorFlow Lite) allow farmers to diagnose plant stress from leaf images without requiring heavy cloud processing."
                            delay={0.4}
                        />
                        <TechCard
                            icon={CloudLightning}
                            title="Real-time Sync"
                            desc="Progressive Web App (PWA) architecture ensures data is cached locally and synchronized with the central database immediately upon network reconnection."
                            delay={0.5}
                        />
                        <TechCard
                            icon={Shield}
                            title="Data Sovereignty"
                            desc="End-to-end encryption for all farmer data. Anonymized aggregation is used solely for regional climate modeling and resource allocation."
                            delay={0.6}
                        />
                        <TechCard
                            icon={Layers}
                            title="Micro-Climate API"
                            desc="Hyper-local weather APIs integrated with soil moisture data to generate precise irrigation schedules that minimize salinity capillary rise."
                            delay={0.7}
                        />
                        <TechCard
                            icon={Database}
                            title="Legacy Integration"
                            desc="Compatible with existing government agricultural databases for seamless reporting and subsidy verification."
                            delay={0.8}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Technology;
