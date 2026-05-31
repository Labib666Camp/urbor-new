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
        transition={{ delay, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="group relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 bg-brand-moss"
    >
        {/* Full Image Background */}
        <div className="absolute inset-0">
            <img loading="lazy" decoding="async" src={img} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        </div>

        {/* Floating Badge */}
        <div className="absolute top-6 left-6 z-20">
            <div className="bg-white/20 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold text-white uppercase tracking-widest shadow-xl">
                {badge}
            </div>
        </div>
        
        {/* Floating Icon */}
        <div className={`absolute top-6 right-6 z-20 w-12 h-12 rounded-full ${colorClass} flex items-center justify-center text-brand-moss shadow-xl transition-transform duration-500 group-hover:rotate-12`}>
            <Icon size={24} strokeWidth={2} />
        </div>

        {/* Content Section */}
        <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end z-20 transition-transform duration-500 group-hover:-translate-y-4">
            <h3 className="text-3xl font-serif font-bold text-brand-cream mb-4 group-hover:text-brand-mustard transition-colors duration-300 drop-shadow-md">{title}</h3>
            <p className="text-brand-cream/80 leading-relaxed font-sans text-lg md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-sm">
                {desc}
            </p>
        </div>
    </motion.div>
);


const mediaGrid = [
    { type: "img", src: "/assets/media/team_1.jpg", alt: "Field Activity" },
    { type: "img", src: "/assets/media/team_2.png", alt: "Field Activity" },
    { type: "img", src: "/assets/media/activities/IMG_1907.JPG", alt: "Field Activity" },
    { type: "img", src: "/assets/media/activities/IMG_1934.JPG", alt: "Field Activity" },
    { type: "img", src: "/assets/media/activities/IMG_1916.JPG", alt: "Field Activity" },
    { type: "img", src: "/assets/media/activities/78ce5696072a4bd1ad9c225c0f77c071.webp", alt: "Field Activity" },
    { type: "img", src: "/assets/media/activities/IMG_1918.JPG", alt: "Field Activity" },
    { type: "img", src: "/assets/media/activities/7cb217603173487e99d9a1aeca24f003.webp", alt: "Field Activity" },
    { type: "video", src: "/assets/media/activities/fun-1.mp4" },
    { type: "video", src: "/assets/media/activities/fun-2.mp4" },
    { type: "video", src: "/assets/media/activities/fun-3.mp4" },
];

const Home = () => {
    // List of partner logos
    const partners = [
        "genu.png", "icccad.png", "ict.png", "jaago.jpeg",
        "startup_bd.png", "unicef.png", "wageningen.png", "youth4climate.png"
    ];

    const team = [
        { name: "Ritu", role: "Field Implementation", img: "RITU.webp", linkedin: "https://www.linkedin.com/in/rituporna-dey-a65845286/" },
        { name: "Labib", role: "Research & Technology", img: "LABIB.webp", linkedin: "https://www.linkedin.com/in/mainul-islam-labib-4a70771a7/" },
        { name: "Sadia", role: "Communication & Marketing", img: "SADIA.webp", linkedin: "https://www.linkedin.com/in/sadia-afrin-048956319/" },
        { name: "Shahriar", role: "Product & Design", img: "SHAHRIAR.webp", linkedin: "https://www.linkedin.com/in/shahriarshaishab/" },
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
                        <source src="/assets/media/site_bg_compressed.mp4" type="video/mp4" />
                    </video>

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-black/60 pointer-events-none" />

                    {/* Content Overlay */}
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
                        }}
                        className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4"
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="inline-flex items-center gap-2 bg-brand-mustard/90 text-brand-moss px-5 py-2 rounded-full font-bold text-xs mb-8 border border-brand-mustard/30 uppercase tracking-widest backdrop-blur-sm shadow-lg"
                        >
                            <Star size={14} className="text-brand-moss fill-brand-moss" />
                            Empowering 5,000+ Farmers
                        </motion.div>

                        <motion.h1 
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
                            }}
                            className="text-6xl md:text-8xl font-serif text-brand-cream mb-8 leading-[1] drop-shadow-2xl tracking-tight"
                        >
                            Restoring Soil <br />
                            <span className="italic font-light text-brand-mustard text-shadow-sm font-[family-name:var(--font-display)]">from salinity.</span>
                        </motion.h1>

                        <motion.p 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="text-xl text-brand-cream/90 max-w-2xl mx-auto mb-12 font-sans leading-relaxed drop-shadow-xl font-medium tracking-wide"
                        >
                            Transforming saline wastelands into arable goldmines using <strong>AI</strong> and <strong>community-led bio-remediation.</strong>
                        </motion.p>

                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
                            }}
                            className="flex flex-col md:flex-row gap-4 items-center"
                        >
                            <Link to="/solutions" className="bg-brand-mustard text-brand-moss px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-brand-cream hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group shadow-lg">
                                Start Recovery
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>


                </div>

                {/* Partner Marquee */}
                <div className="container mx-auto">
                    <p className="text-center text-brand-moss/50 font-bold uppercase tracking-widest text-xs mb-8">Supported By</p>
                    <div className="flex overflow-hidden group space-x-16">
                        <div className="flex animate-loop-scroll group-hover:pause items-center gap-16 px-8">
                            {partners.map((logo, index) => (
                                <img loading="lazy" decoding="async" key={index} src={`/assets/partners/${logo}`} alt="Partner" className="h-20 md:h-32 w-auto object-contain max-w-[200px] transition-transform hover:scale-110 flex-shrink-0" />
                            ))}
                        </div>
                        {/* Second duplicated row for seamless loop */}
                        <div className="flex animate-loop-scroll group-hover:pause items-center gap-16 px-8" aria-hidden="true">
                            {partners.map((logo, index) => (
                                <img loading="lazy" decoding="async" key={`dup-${index}`} src={`/assets/partners/${logo}`} alt="Partner" className="h-20 md:h-32 w-auto object-contain max-w-[200px] transition-transform hover:scale-110 flex-shrink-0" />
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
                            desc="Deploying salt-accumulating halophytes like Hatishur to naturally extract salt"
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
                                <img loading="lazy" decoding="async" src="/assets/app_screens/homepage.png" alt="App Analytics" className="relative z-10 rounded-[2.5rem] shadow-2xl border-4 border-brand-moss/50 mx-auto" />

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
                                <img loading="lazy" decoding="async" src="/assets/app_screens/tidal.png" alt="Tidal Alerts" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
                                <img loading="lazy" decoding="async" src="/assets/app_screens/soil_recovery.png" alt="Soil Recovery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
                            <img loading="lazy" decoding="async" src="/assets/app_screens/analytics.png" alt="Analytics" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
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
                                <img loading="lazy" decoding="async" src="/assets/awards/imagen_ventures.jpg" alt="ImaGen Ventures" className="h-full object-contain drop-shadow-2xl grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 relative z-10" />
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
                                <img loading="lazy" decoding="async" src="/assets/awards/youth4climate.png" alt="Youth4Climate" className="h-full object-contain drop-shadow-2xl grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 relative z-10" />
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
                                <img loading="lazy" decoding="async" src="/assets/awards/SAFFAL.png" alt="SAFFAL Accelerator" className="h-full object-contain drop-shadow-2xl grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 relative z-10" />
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







            {/* Activity Gallery */}
            <section className="py-24 px-6 bg-brand-cream border-t border-brand-sand/50">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-brand-leaf font-bold tracking-widest uppercase text-sm mb-4 block">In the Field</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-moss mb-4">Life at Urbor</h2>
                        <p className="text-brand-moss/60 text-lg max-w-xl mx-auto">
                            From lab to land, from dashboard to dirt — we're always in the field.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {mediaGrid.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden shadow-md aspect-square group grayscale hover:grayscale-0 transition-all duration-500"
                            >
                                {item.type === 'video' ? (
                                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                                        <source src={item.src} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img loading="lazy" decoding="async" src={item.src} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                )}
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
                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <a
                                href="mailto:contact.urbor.ag@gmail.com"
                                className="bg-brand-mustard text-brand-moss px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl inline-block"
                            >
                                Become a Partner
                            </a>
                            <a
                                href="https://linkedin.com/company/urbor-ag/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-transparent text-brand-cream border-2 border-brand-cream/30 px-12 py-6 rounded-full font-bold text-xl hover:bg-brand-cream/10 transition-all inline-block"
                            >
                                Follow on LinkedIn
                            </a>
                        </div>

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
