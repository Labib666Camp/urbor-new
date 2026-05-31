import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ArrowRight, Star, MapPin, Users, Leaf, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const team = [
    {
        name: "Ritu",
        fullName: "Rituporna Dey",
        role: "Field Implementation",
        img: "/assets/teams/RITU.webp",
        linkedin: "https://www.linkedin.com/in/rituporna-dey-a65845286/"
    },
    {
        name: "Labib",
        fullName: "Mainul Islam Labib",
        role: "Research & Technology",
        img: "/assets/teams/LABIB.webp",
        linkedin: "https://www.linkedin.com/in/mainul-islam-labib-4a70771a7/"
    },
    {
        name: "Sadia",
        fullName: "Sadia Afrin",
        role: "Communication & Marketing",
        img: "/assets/teams/SADIA.webp",
        linkedin: "https://www.linkedin.com/in/sadia-afrin-048956319/"
    },
    {
        name: "Shahriar",
        fullName: "Shahriar Shaishab",
        role: "Product & Design",
        img: "/assets/teams/SHAHRIAR.webp",
        linkedin: "https://www.linkedin.com/in/shahriarshaishab/"
    },
];

const stats = [
    { value: "5,000+", label: "Farmers Empowered", icon: Users },
    { value: "40%", label: "Salinity Reduction", icon: Leaf },
    { value: "14 Days", label: "Forecast Lead Time", icon: Globe },
    { value: "3", label: "Global Awards", icon: Star },
];

const awards = [
    {
        img: "/assets/awards/imagen_ventures.jpg",
        alt: "ImaGen Ventures",
        badge: "Global Winner",
        badgeColor: "bg-brand-mustard/20 text-brand-mustard border-brand-mustard/20",
        title: "ImaGen Ventures",
        subtitle: "Youth Challenge 2024",
        hoverText: "text-brand-mustard",
        glowColor: "bg-brand-mustard/20",
        href: "https://url-shortener.me/BFNV",
    },
    {
        img: "/assets/awards/youth4climate.png",
        alt: "Youth4Climate",
        badge: "Global Awardee",
        badgeColor: "bg-brand-leaf/20 text-brand-leaf border-brand-leaf/20",
        title: "Youth4Climate",
        subtitle: "Grant Recipient 2025",
        hoverText: "text-brand-leaf",
        glowColor: "bg-brand-leaf/20",
        href: "https://www.instagram.com/p/DPjSzpXDBmY/",
    },
    {
        img: "/assets/awards/SAFFAL.png",
        alt: "SAFFAL Accelerator",
        badge: "Cohort 2025",
        badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/20",
        title: "SAFFAL Accelerator",
        subtitle: "Selected Startup",
        hoverText: "text-blue-300",
        glowColor: "bg-blue-500/20",
        href: "https://massivefoundation.org/saffal/",
    },
];

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

const About = () => {
    return (
        <div className="bg-brand-cream min-h-screen">

            {/* Hero */}
            <section className="relative pt-40 pb-0 overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-brand-mustard/20 text-brand-moss px-5 py-2 rounded-full font-bold text-sm mb-8 border border-brand-mustard/30 uppercase tracking-widest"
                    >
                        <Star size={14} className="text-brand-mustard fill-brand-mustard" />
                        Founded in Bangladesh
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-serif text-brand-moss mb-6 leading-[1]"
                    >
                        This is Urbor.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-brand-moss/70 max-w-2xl mx-auto font-sans leading-relaxed"
                    >
                        A small, passionate team taking on one of the most pressing climate challenges of our time —
                        the salinity crisis destroying coastal farmlands across South Asia.
                    </motion.p>
                </div>

                {/* Full-width Team Photo */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="container mx-auto px-6"
                >
                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-brand-white">
                        <img loading="lazy" decoding="async"
                            src="/assets/media/team_photo.jpg"
                            alt="The Urbor Team"
                            className="w-full h-[400px] md:h-[560px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-moss/60 to-transparent pointer-events-none" />
                        <div className="absolute bottom-10 left-10 text-brand-cream">
                            <div className="flex items-center gap-2 mb-2 text-brand-mustard text-xs font-bold uppercase tracking-widest">
                                <MapPin size={14} /> Khulna, Bangladesh
                            </div>
                            <p className="font-serif text-2xl md:text-3xl leading-tight max-w-lg">
                                "We started Urbor because we grew up watching coastal farmers lose everything to saline intrusion."
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Stats Strip */}
            <section className="py-16 px-6 bg-brand-moss mt-12">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <stat.icon size={24} className="text-brand-mustard mx-auto mb-3" />
                                <div className="text-4xl md:text-5xl font-serif text-brand-cream font-bold mb-1">{stat.value}</div>
                                <div className="text-brand-cream/60 text-sm font-medium uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 px-6 bg-brand-white border-y border-brand-sand/50">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-brand-leaf font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-brand-moss mb-6 leading-tight">
                                Born from the fields,<br />built for the future.
                            </h2>
                            <p className="text-brand-moss/70 text-lg leading-relaxed mb-6 font-sans">
                                Over 7 million hectares of farmland in coastal Bangladesh are under threat from
                                saltwater intrusion — a crisis accelerated by rising sea levels and stronger cyclones.
                                The farmers affected have few tools and fewer resources.
                            </p>
                            <p className="text-brand-moss/70 text-lg leading-relaxed font-sans">
                                Urbor was founded to change that. We combine community-led bio-remediation with
                                AI-driven tidal forecasting, giving every coastal farmer the intelligence and support
                                to fight back against saline devastation — and win.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-brand-mustard/20 rounded-[3rem] rotate-2 -z-10" />
                            <img loading="lazy" decoding="async"
                                src="/assets/media/team_1.jpg"
                                alt="Soil Bio-Remediation"
                                className="rounded-[2.5rem] w-full shadow-2xl border-4 border-brand-white"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 px-6 bg-brand-cream">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-brand-mustard font-bold tracking-widest uppercase text-sm mb-4 block">The People</span>
                        <h2 className="text-5xl font-serif text-brand-moss mb-4">Minds Behind Urbor</h2>
                        <p className="text-brand-moss/60 text-lg max-w-xl mx-auto">
                            Four individuals. One mission. Zero compromise on impact.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="relative overflow-hidden rounded-[2rem] shadow-lg mb-6 aspect-[3/4] bg-brand-sand/20">
                                    <img loading="lazy" decoding="async"
                                        src={member.img}
                                        alt={member.fullName}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-moss/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    {/* LinkedIn Button */}
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-6 right-6 bg-white text-brand-moss p-4 rounded-full opacity-100 transition-all duration-500 hover:bg-brand-mustard hover:text-brand-moss shadow-xl"
                                        aria-label={`Connect with ${member.fullName} on LinkedIn`}
                                    >
                                        <Linkedin size={28} />
                                    </a>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-serif font-bold text-brand-moss">{member.fullName}</h3>
                                    <p className="text-brand-moss/60 font-medium uppercase text-xs tracking-widest mt-1">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards */}
            <section className="py-24 px-6 bg-brand-moss relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-mustard/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-leaf/10 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="mb-16">
                        <span className="text-brand-mustard font-bold tracking-widest uppercase text-sm mb-4 block">
                            Global Recognition
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-brand-cream leading-tight">
                            Award-winning impact<br />
                            <span className="text-brand-mustard/90">recognized worldwide.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {awards.map((award, i) => (
                            <motion.a
                                key={i}
                                href={award.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-brand-mustard/30 transition-all duration-500 overflow-hidden block"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                                    <ArrowRight className="text-brand-mustard -rotate-45 group-hover:rotate-0 transition-transform duration-500" size={24} />
                                </div>

                                <div className="h-48 w-full flex items-center justify-center mb-8 relative">
                                    <div className={`absolute inset-0 ${award.glowColor} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                                    <img loading="lazy" decoding="async"
                                        src={award.img}
                                        alt={award.alt}
                                        className="h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700 relative z-10"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border ${award.badgeColor}`}>
                                        {award.badge}
                                    </div>
                                    <h3 className={`text-2xl font-serif text-brand-cream font-bold group-hover:${award.hoverText} transition-colors`}>{award.title}</h3>
                                    <p className="text-brand-cream/60">{award.subtitle}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Activity Gallery */}
            <section className="py-24 px-6 bg-brand-cream">
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

            {/* CTA */}
            <section className="py-24 px-6 pb-40">
                <div className="container mx-auto">
                    <div className="bg-brand-moss rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-mustard rounded-full blur-[100px] opacity-20" />
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-leaf rounded-full blur-[100px] opacity-20" />

                        <h2 className="text-5xl md:text-6xl font-serif text-brand-cream mb-4 relative z-10">
                            Want to work with us?
                        </h2>
                        <p className="text-brand-cream/60 text-xl mb-10 relative z-10 max-w-xl mx-auto">
                            Whether you're a researcher, investor, NGO, or farmer — we'd love to hear from you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <a
                                href="mailto:contact.urbor.ag@gmail.com"
                                className="bg-brand-mustard text-brand-moss px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl inline-block"
                            >
                                Get in Touch
                            </a>
                            <Link
                                to="/technology"
                                className="bg-transparent text-brand-cream border-2 border-brand-cream/30 px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-cream/10 transition-all inline-flex items-center gap-2"
                            >
                                Explore the Tech <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
