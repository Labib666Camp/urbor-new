import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Sprout, BarChart3, ArrowUpRight } from 'lucide-react';

const VideoCard = ({ title, text, video, reverse }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 mb-32`}
    >
        <div className="md:w-1/2 relative group">
            {/* Video Container */}
            <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-brand-white">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s]"
                >
                    <source src={video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-brand-moss/20 mix-blend-multiply" />
            </div>

            {/* Badge */}
            <div className={`absolute top-8 ${reverse ? 'left-8' : 'right-8'} bg-brand-white/90 backdrop-blur text-brand-moss px-5 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 text-sm`}>
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Live Feed
            </div>
        </div>

        <div className="md:w-1/2">
            <h3 className="text-4xl md:text-5xl font-serif text-brand-moss mb-6 leading-tight">{title}</h3>
            <p className="text-xl text-brand-moss/70 mb-8 leading-relaxed font-sans">
                {text}
            </p>

            <div className="flex flex-wrap gap-3">
                {['Eco-Friendly', 'Cost Effective', 'Scalable'].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-brand-moss/5 border border-brand-moss/10 rounded-full text-brand-moss/80 text-sm font-bold">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const AnalyticsSection = () => (
    <div className="mb-32 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-moss mb-6">Precision Analytics</h2>
            <p className="text-xl text-brand-moss/60">
                Data-driven insights for proactive farm management.
            </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Yellow Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-brand-mustard/20 -rotate-3 rounded-[4rem] blur-3xl -z-10" />

            {/* Screen 1 */}
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative z-10"
            >
                <div className="absolute -inset-4 bg-brand-mustard rounded-[2.5rem] rotate-3 -z-10 shadow-xl" />
                <img src="/assets/app_screens/homepage.png" alt="Home Screen" className="w-full rounded-[2rem] border-4 border-brand-white shadow-2xl" />
            </motion.div>

            {/* Screen 2 (Center - Prominent) */}
            <motion.div
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative z-20 md:-mt-12"
            >
                <div className="absolute -inset-4 bg-brand-moss rounded-[2.5rem] -rotate-2 -z-10 shadow-2xl" />
                <img src="/assets/app_screens/analytics.png" alt="Analytics Screen" className="w-full rounded-[2rem] border-4 border-brand-white shadow-2xl" />
            </motion.div>

            {/* Screen 3 */}
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative z-10"
            >
                <div className="absolute -inset-4 bg-brand-leaf/40 rounded-[2.5rem] rotate-6 -z-10 shadow-xl" />
                <img src="/assets/app_screens/tools.png" alt="Tools Screen" className="w-full rounded-[2rem] border-4 border-brand-white shadow-2xl" />
            </motion.div>
        </div>

        {/* Feature List */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: "Real-time Monitoring", desc: "Track soil salinity, pH, and moisture levels instantly via IoT sensors." },
                { title: "Predictive Alerts", desc: "Receive AI-generated warnings for tidal surges and salinity spikes up to 14 days ahead." },
                { title: "Crop Recommendations", desc: "Get tailored advice on salt-tolerant crops based on your specific soil profile." }
            ].map((item, idx) => (
                <div key={idx} className="bg-brand-white p-8 rounded-3xl shadow-sm border border-brand-sand">
                    <h4 className="text-xl font-bold font-serif text-brand-moss mb-3">{item.title}</h4>
                    <p className="text-brand-moss/70">{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
);

const Solutions = () => {
    return (
        <div className="bg-brand-cream min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-6">

                <div className="text-center max-w-4xl mx-auto mb-24">
                    <span className="text-brand-leaf font-bold tracking-widest uppercase text-sm mb-4 block">Comprehensive Care</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-brand-moss mb-8">
                        Restoring Balance to<br />
                        <span className="text-brand-mustard decoration-wavy underline decoration-brand-moss/10">Coastal Soil.</span>
                    </h1>
                    <p className="text-xl text-brand-moss/60 max-w-2xl mx-auto font-sans">
                        Our integrated approach combines physical remediation, adaptive farming, and advanced data science.
                    </p>
                </div>

                <VideoCard
                    title="Soil Remediation"
                    text="We employ a multi-step bio-remediation process. By introducing gypsum and organic amendments, we displace sodium ions from the soil particles. This chemical intervention is supported by the strategic planting of halophytes like Hatishur, which actively extract salt from the topsoil."
                    video="/assets/media/section_1.mp4"
                />

                <VideoCard
                    title="Native Vertical Farming"
                    text="To maximize land use efficiency in saline-prone areas, we implement vertical farming structures using native, salt-tolerant creepers. This method not only bypasses strict soil dependency but also creates a micro-climate that reduces evaporation and salt crystallization on the soil surface."
                    video="/assets/media/site_bg.mp4"
                    reverse={true}
                />

                <AnalyticsSection />

            </div>
        </div>
    );
};

export default Solutions;
