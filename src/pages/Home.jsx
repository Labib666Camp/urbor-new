import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Sprout, Smartphone, MapPin, Droplets, Leaf, BarChart3, Layers, Bell, TrendingUp, Coins, AlertTriangle, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sticker = ({ children, className, delay = 0 }) => (
    <motion.div
        initial={{ scale: 0, rotate: -10 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay }}
        className={`absolute z-20 bg-brand-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2 font-bold text-xs text-brand-moss border border-brand-sand ${className}`}
    >
        {children}
    </motion.div>
);

const BentoCard = ({ children, className, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        className={`rounded-[2.5rem] shadow-sm overflow-hidden relative ${className}`}
    >
        {children}
    </motion.div>
);

const HolisticCard = ({ title, desc, img, icon: Icon, badge, colorClass, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        className="group relative h-[520px] w-full rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-brand-white hover:shadow-2xl hover:border-brand-sand transition-all duration-500 bg-brand-sand/20"
    >
        {/* Image Layer */}
        <div className="absolute inset-0 overflow-hidden rounded-[2.2rem]">
            <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
        </div>

        {/* Top Badge */}
        <div className="absolute top-6 right-6 z-20">
            <span className="bg-brand-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-brand-moss uppercase tracking-widest shadow-md">
                {badge}
            </span>
        </div>

        {/* Floating Info Card */}
        <div className="absolute inset-x-4 bottom-4 z-20">
            <div className={`bg-brand-cream/95 backdrop-blur-xl rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-white transition-all duration-300 group-hover:translate-y-[-5px]`}>

                <div className="flex justify-between items-start mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${colorClass} flex items-center justify-center text-brand-moss shadow-inner`}>
                        <Icon size={24} strokeWidth={2} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-brand-sand/50 flex items-center justify-center group-hover:bg-brand-mustard transition-colors duration-300">
                        <ArrowRight size={16} className="text-brand-moss opacity-50 group-hover:opacity-100 -rotate-45 group-hover:rotate-0 transition-all duration-500" />
                    </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-brand-moss mb-2 group-hover:text-brand-leaf transition-colors duration-300">{title}</h3>
                <p className="text-sm text-brand-moss/70 leading-relaxed font-sans line-clamp-3">
                    {desc}
                </p>
            </div>
        </div>
    </motion.div>
);

const Home = () => {
    // List of partner logos
    const partners = [
        "genu.png", "icccad.png", "ict.png", "jaago.jpeg",
        "startup_bd.png", "unicef.png", "wageningen.png", "youth4climate.png"
    ];

    const team = [
        { name: "Ritu", role: "Field Implementation", img: "RITU.png", linkedin: "https://www.linkedin.com/in/rituporna-dey-a65845286/" },
        { name: "Labib", role: "Research & Technology", img: "LABIB.png", linkedin: "https://www.linkedin.com/in/mainul-islam-labib-4a70771a7/" },
        { name: "Sadia", role: "Communication & Marketing", img: "SADIA.png", linkedin: "https://www.linkedin.com/in/sadia-afrin-048956319/" },
        { name: "Shahriar", role: "Product & Design", img: "SHAHRIAR.png", linkedin: "https://www.linkedin.com/in/shahriarshaishab/" },
    ];

    return (
        <div className="bg-brand-cream min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-48 pb-12 px-6 overflow-hidden">


                {/* Hero Video Container */}
                <div className="container mx-auto relative h-[600px] md:h-[800px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-brand-white group mb-24">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s]"
                        poster="/assets/media/section_1.jpg"
                    >
                        <source src="/assets/media/site_bg.mp4" type="video/mp4" />
                    </video>

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-black/60 pointer-events-none" />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 bg-brand-mustard/90 text-brand-moss px-5 py-2 rounded-full font-bold text-sm mb-8 border border-brand-mustard/30 uppercase tracking-widest backdrop-blur-sm shadow-lg"
                        >
                            <Star size={14} className="text-brand-moss fill-brand-moss" />
                            Empowering 50,000+ Farmers
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl font-serif text-brand-cream mb-8 leading-[1] drop-shadow-2xl">
                            Soil Recovery <br />
                            <span className="italic font-light text-brand-mustard text-shadow-sm font-[family-name:var(--font-display)]">without the hassle.</span>
                        </h1>

                        <p className="text-xl text-brand-cream/90 max-w-2xl mx-auto mb-12 font-sans leading-relaxed drop-shadow-xl font-medium">
                            Urbor transforms saline wastelands into arable goldmines.
                            We combine <strong>community-led bio-remediation</strong> with <strong>AI-driven tidal forecasts</strong> to secure the future of agriculture.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 items-center">
                            <Link to="/solutions" className="bg-brand-mustard text-brand-moss px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 shadow-lg">
                                Start Recovery
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>

                    <Sticker className="top-10 right-10 rotate-6" delay={0.5}>
                        <ShieldCheck size={16} className="text-brand-leaf" /> Live Monitoring
                    </Sticker>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="absolute bottom-10 left-10 text-white text-left max-w-md hidden md:block z-20"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest opacity-80 text-shadow-sm">Real-time Data</span>
                        </div>
                        <p className="font-serif text-2xl leading-tight drop-shadow-xl">
                            "We've seen a 40% reduction in soil salinity within just two harvest cycles."
                        </p>
                        <p className="mt-2 opacity-70 text-sm drop-shadow-md">— Rahim Uddin, Khulna</p>
                    </motion.div>
                </div>

                {/* Partner Marquee */}
                <div className="container mx-auto">
                    <p className="text-center text-brand-moss/50 font-bold uppercase tracking-widest text-xs mb-8">Supported By</p>
                    <div className="flex overflow-hidden group space-x-16">
                        <div className="flex animate-loop-scroll group-hover:pause items-center gap-16 px-8">
                            {partners.map((logo, index) => (
                                <img key={index} src={`/assets/partners/${logo}`} alt="Partner" className="h-20 md:h-32 w-auto object-contain max-w-[200px] transition-transform hover:scale-110 flex-shrink-0" />
                            ))}
                        </div>
                        {/* Second duplicated row for seamless loop */}
                        <div className="flex animate-loop-scroll group-hover:pause items-center gap-16 px-8" aria-hidden="true">
                            {partners.map((logo, index) => (
                                <img key={`dup-${index}`} src={`/assets/partners/${logo}`} alt="Partner" className="h-20 md:h-32 w-auto object-contain max-w-[200px] transition-transform hover:scale-110 flex-shrink-0" />
                            ))}
                        </div>
                    </div>
                    {/* Fade Edges */}
                    <div className="absolute left-0 bottom-0 w-32 h-32 bg-gradient-to-r from-brand-cream to-transparent pointer-events-none" />
                    <div className="absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-l from-brand-cream to-transparent pointer-events-none" />
                </div>
            </section>

            {/* Solutions Summary (Brief) */}
            <section className="py-24 px-6 bg-brand-white border-y border-brand-sand/50">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                        <div className="max-w-xl">
                            <span className="text-brand-leaf font-bold tracking-widest uppercase text-sm mb-4 block">Holistic Approach</span>
                            <h2 className="text-5xl font-serif text-brand-moss leading-tight">
                                Science met Nature <br />in the field.
                            </h2>
                        </div>
                        <Link to="/solutions" className="text-brand-moss font-bold text-lg hover:text-brand-mustard transition-colors flex items-center gap-2">
                            View Full Methodology <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <HolisticCard
                            title="Bio-Remediation"
                            desc="Deploying salt-accumulating halophytes like Hatishur to naturally extract salinity from the topsoil."
                            img="/assets/media/plant-hatishur.png"
                            icon={Leaf}
                            colorClass="bg-green-100"
                            badge="Nature Based"
                            delay={0.1}
                        />
                        <HolisticCard
                            title="Native Vertical Farming"
                            desc="Maximizing yield in limited spaces using salt-tolerant creepers on vertical structures."
                            img="/assets/media/vertical.jpeg"
                            icon={Layers}
                            colorClass="bg-orange-100"
                            badge="Space Efficient"
                            delay={0.2}
                        />
                        <HolisticCard
                            title="Precision Analytics"
                            desc="AI-driven dashboard for real-time salinity monitoring and yield prediction."
                            img="/assets/app_screens/analytics.png"
                            icon={BarChart3}
                            colorClass="bg-blue-100"
                            badge="Data Driven"
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* "Urbor Ecosystem" Bento Grid */}
            <section className="py-24 px-6 bg-brand-sand/30">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-serif text-brand-moss mb-4">Urbor Ecosystem</h2>
                        <p className="text-xl text-brand-moss/60">From satellite to seedling.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 grid-rows-2 h-auto md:h-[650px]">

                        {/* Feature 1: AI Analytics (Tall) - Motion Enhanced */}
                        <BentoCard className="md:col-span-2 md:row-span-2 p-12 flex flex-col items-center text-center bg-brand-moss text-brand-cream border-2 border-brand-moss shadow-xl relative overflow-hidden" delay={0.1}>

                            {/* Background Grid Animation */}
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                            <h3 className="text-4xl font-serif text-brand-cream mb-6">AI based Farm Analytics</h3>
                            <p className="text-brand-cream/70 mb-10 max-w-sm text-lg leading-relaxed">
                                Integrating Satellite Imaging and Micro-climatic Data for Precision Analytics for Coastal Farmers.
                            </p>

                            {/* Animated Phone */}
                            <motion.div
                                initial={{ y: 20 }}
                                whileInView={{ y: 0 }}
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-full max-w-xs mt-auto"
                            >
                                <div className="absolute inset-0 bg-brand-leaf/20 blur-3xl rounded-full scale-125" />
                                <img src="/assets/app_screens/homepage.png" alt="App Analytics" className="relative z-10 rounded-[2.5rem] shadow-2xl border-4 border-brand-moss/50 mx-auto" />

                                {/* Floating Analytics Badges */}
                                <Sticker className="top-10 -right-4 rotate-12 bg-brand-mustard text-brand-moss" delay={0.2}>
                                    <Smartphone size={14} /> 98% Accuracy
                                </Sticker>
                                <Sticker className="bottom-20 -left-6 -rotate-6 bg-brand-white text-brand-moss" delay={0.4}>
                                    <MapPin size={14} /> Localized
                                </Sticker>
                            </motion.div>
                        </BentoCard>

                        {/* Feature 2: Tidal Alerts (Small) - Image Overlay */}
                        <BentoCard className="md:col-span-1 p-0 flex flex-col justify-end bg-white border border-blue-100 shadow-md hover:shadow-xl hover:border-blue-200 transition-all group overflow-hidden relative" delay={0.2}>
                            <div className="absolute inset-0">
                                <img src="/assets/app_screens/tidal.png" alt="Tidal Alerts" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>

                            <div className="relative z-10 p-6">
                                <div className="bg-blue-500/20 backdrop-blur-md border border-blue-400/30 w-fit p-2 rounded-lg mb-3">
                                    <AlertTriangle size={20} className="text-blue-200" />
                                </div>
                                <h3 className="text-2xl font-bold font-serif text-white mb-2">Tidal Alerts</h3>
                                <p className="text-white/80 text-sm leading-normal">
                                    SMS warnings 3 days before salinity intrusion events.
                                </p>
                            </div>
                        </BentoCard>

                        {/* Feature 3: Soil Recovery (Small) - Image Overlay */}
                        <BentoCard className="md:col-span-1 p-0 flex flex-col justify-end bg-brand-mustard shadow-md hover:shadow-xl transition-all relative overflow-hidden group" delay={0.3}>
                            <div className="absolute inset-0">
                                <img src="/assets/app_screens/soil_recovery.png" alt="Soil Recovery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </div>

                            <div className="relative z-10 p-6">
                                <div className="bg-brand-mustard/20 backdrop-blur-md border border-brand-mustard/30 w-fit p-2 rounded-lg mb-3">
                                    <Sprout size={20} className="text-brand-mustard" />
                                </div>
                                <h3 className="text-2xl font-bold font-serif text-white mb-2">Soil Recovery</h3>
                                <p className="text-white/80 text-sm font-medium leading-normal">
                                    Track salinity reduction and nutrient replenishment over time.
                                </p>
                            </div>
                        </BentoCard>

                        {/* Feature 4: Analytics (Wide) - Image Overlay */}
                        <BentoCard className="md:col-span-2 p-0 overflow-hidden group border border-brand-sand" delay={0.4}>
                            <img src="/assets/app_screens/analytics.png" alt="Analytics" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-moss via-brand-moss/50 to-transparent opacity-90" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-brand-mustard mb-2 text-sm font-bold uppercase tracking-widest">
                                        <BarChart3 size={16} /> Data Engine
                                    </div>
                                    <h3 className="text-3xl font-serif text-white font-bold mb-2">Predictive AI</h3>
                                    <p className="text-white/70 max-w-sm text-sm">Forecasting salinity intrusion zones 14 days in advance using satellite telemetry.</p>
                                </div>

                                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 text-white group-hover:bg-brand-mustard group-hover:text-brand-moss transition-colors">
                                    <ArrowRight size={24} />
                                </div>
                            </div>
                        </BentoCard>

                    </div>
                </div>
            </section>

            {/* Premium Awards Section - Relocated & Redesigned */}
            <section className="py-24 px-6 bg-brand-moss relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-mustard/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-leaf/10 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-brand-mustard font-bold tracking-widest uppercase text-sm mb-4 block flex items-center gap-2">
                                <Star size={16} className="fill-brand-mustard" /> Global Recognition
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif text-brand-cream leading-tight">
                                Award-winning impact <br /> <span className="text-brand-mustard/90">recognized worldwide.</span>
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Award 1 */}
                        <motion.a
                            href="https://url-shortener.me/BFNV"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-brand-mustard/30 transition-all duration-500 overflow-hidden block"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                                <ArrowRight className="text-brand-mustard -rotate-45 group-hover:rotate-0 transition-transform duration-500" size={24} />
                            </div>

                            <div className="h-48 w-full flex items-center justify-center mb-8 relative">
                                <div className="absolute inset-0 bg-brand-mustard/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <img src="/assets/awards/imagen_ventures.jpg" alt="ImaGen Ventures" className="h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700 relative z-10" />
                            </div>

                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mustard/20 text-brand-mustard text-xs font-bold uppercase tracking-wider mb-2 border border-brand-mustard/20">
                                    Global Winner
                                </div>
                                <h3 className="text-2xl font-serif text-brand-cream font-bold group-hover:text-brand-mustard transition-colors">ImaGen Ventures</h3>
                                <p className="text-brand-cream/60">Youth Challenge 2024</p>
                            </div>
                        </motion.a>

                        {/* Award 2 */}
                        <motion.a
                            href="https://www.instagram.com/p/DPjSzpXDBmY/"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-brand-mustard/30 transition-all duration-500 overflow-hidden block"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                                <ArrowRight className="text-brand-mustard -rotate-45 group-hover:rotate-0 transition-transform duration-500" size={24} />
                            </div>

                            <div className="h-48 w-full flex items-center justify-center mb-8 relative">
                                <div className="absolute inset-0 bg-brand-leaf/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <img src="/assets/awards/youth4climate.png" alt="Youth4Climate" className="h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700 relative z-10" />
                            </div>

                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-leaf/20 text-brand-leaf text-xs font-bold uppercase tracking-wider mb-2 border border-brand-leaf/20">
                                    Global Awardee
                                </div>
                                <h3 className="text-2xl font-serif text-brand-cream font-bold group-hover:text-brand-leaf transition-colors">Youth4Climate</h3>
                                <p className="text-brand-cream/60">Grant Recipient 2025</p>
                            </div>
                        </motion.a>

                        {/* Award 3 */}
                        <motion.a
                            href="https://massivefoundation.org/saffal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-brand-mustard/30 transition-all duration-500 overflow-hidden block"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                                <ArrowRight className="text-brand-mustard -rotate-45 group-hover:rotate-0 transition-transform duration-500" size={24} />
                            </div>

                            <div className="h-48 w-full flex items-center justify-center mb-8 relative">
                                <div className="absolute inset-0 bg-blue-500/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <img src="/assets/awards/SAFFAL.png" alt="SAFFAL Accelerator" className="h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700 relative z-10" />
                            </div>

                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-500/20">
                                    Cohort 2025
                                </div>
                                <h3 className="text-2xl font-serif text-brand-cream font-bold group-hover:text-blue-300 transition-colors">SAFFAL Accelerator</h3>
                                <p className="text-brand-cream/60">Selected Startup</p>
                            </div>
                        </motion.a>
                    </div>
                </div>

            </section>

            {/* Team Section */}
            <section className="py-24 px-6 bg-brand-cream/50">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-brand-mustard font-bold tracking-widest uppercase text-sm mb-4 block">The People</span>
                        <h2 className="text-5xl font-serif text-brand-moss mb-4">Minds Behind Urbor</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="relative overflow-hidden rounded-[2rem] shadow-lg mb-6 aspect-[3/4] bg-brand-sand/20">
                                    {/* Image */}
                                    <img
                                        src={`/assets/teams/${member.img}`}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-moss/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* LinkedIn Button */}
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-6 right-6 bg-white text-brand-moss p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-brand-mustard hover:text-brand-moss shadow-xl"
                                        aria-label={`Connect with ${member.name} on LinkedIn`}
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                </div>

                                <div className="text-center">
                                    <h3 className="text-2xl font-serif font-bold text-brand-moss">{member.name}</h3>
                                    <p className="text-brand-moss/60 font-medium uppercase text-xs tracking-widest mt-1">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>





            {/* "Ready to start?" Banner */}
            <section className="py-24 px-6 pb-40">
                <div className="container mx-auto">
                    <div className="bg-brand-moss rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">

                        {/* Abstract Shapes */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-mustard rounded-full blur-[100px] opacity-20" />
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-leaf rounded-full blur-[100px] opacity-20" />

                        <h2 className="text-5xl md:text-7xl font-serif text-brand-cream mb-8 relative z-10">
                            Join the Restoration.
                        </h2>
                        <button className="bg-brand-mustard text-brand-moss px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform relative z-10 shadow-xl">
                            Become a Partner
                        </button>

                        {/* Floating App Icons */}
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-20 left-20 hidden md:block opacity-30">
                            <Smartphone size={48} className="text-brand-white" />
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
