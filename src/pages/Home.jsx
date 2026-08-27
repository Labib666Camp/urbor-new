import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Container, Section, SectionHead, Reveal, RevealGroup, RevealItem,
  Eyebrow, Button, ArrowLink, Card, Stat, LiveTag, GridLines,
} from '../components/ui';
import PartnerMarquee from '../components/PartnerMarquee';
import ProductShowcase from '../components/ProductShowcase';
import ApproachScroll from '../components/approach/ApproachScroll';
import RestorationField from '../components/RestorationField';
import FieldGallery from '../components/FieldGallery';
import { EASE } from '../lib/motion';
import { TEAM, APP_URL, CONTACT_EMAIL } from '../lib/data';

const AWARDS = [
  { name: 'ImaGen Ventures', detail: 'Youth Challenge 2024', badge: 'Global winner', img: '/assets/awards/imagen_ventures.jpg', href: 'https://url-shortener.me/BFNV' },
  { name: 'Youth4Climate', detail: 'Grant recipient 2025', badge: 'Global awardee', img: '/assets/awards/youth4climate.png', href: 'https://www.instagram.com/p/DPjSzpXDBmY/' },
  { name: 'SAFFAL Accelerator', detail: 'Selected startup', badge: 'Cohort 2025', img: '/assets/awards/web/SAFFAL.png', href: 'https://massivefoundation.org/saffal/' },
];

/* ---------------------------------------------------------------- Hero --- */
// Type-first hero: the headline owns the fold on bare canvas, and the video
// arrives underneath as a held frame rather than as a background wash behind
// unreadable text.
const Hero = () => (
  <section className="relative overflow-hidden pt-24 md:pt-28">
    <GridLines className="opacity-70" />

    <Container className="relative z-10">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        {/* Left: the claim */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
              Working with 5,000+ coastal farmers
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.06 }}
            className="mt-6 text-[clamp(2.5rem,4.6vw,4.25rem)]"
          >
            Soil recovery,<br />
            <span className="text-ink-faint">made measurable.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button as={Link} to="/solutions" size="lg">Explore the method</Button>
            <Button as={Link} to="/technology" tone="outline" size="lg">How it works</Button>
          </motion.div>
        </div>

        {/* Right: the positioning line, made playable */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.14 }}
          className="lg:col-span-5"
        >
          <p className="text-[1.0625rem] leading-relaxed text-ink-muted">
            Urbor restores salinity affected coastal farmlands through
            community-led bioremediation and AI-based farming intelligence.
          </p>
          <RestorationField className="mt-7" />
          <p className="eyebrow mt-2 block text-ink-faint/80">
            Drag across the plot to restore it
          </p>
        </motion.div>
      </div>

      {/* Held video frame */}
      <motion.figure
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.24 }}
        className="relative mt-8 overflow-hidden rounded-xl border border-line md:mt-10"
      >
        <video
          autoPlay loop muted playsInline
          poster="/assets/media/section_1.jpg"
          className="aspect-[16/10] w-full object-cover md:aspect-[21/9]"
        >
          <source src="/assets/media/site_bg.mp4" type="video/mp4" />
        </video>

        {/* A single low gradient anchors the caption without dimming the frame. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-moss-deep/85 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 md:flex-row md:items-end md:justify-between md:p-8">
          <figcaption className="max-w-md">
            <p className="font-display text-lg font-normal leading-snug tracking-[-0.02em] text-canvas md:text-xl">
              “We've seen a 40% reduction in soil salinity within just two harvest cycles.”
            </p>
            <p className="mt-2 text-[0.8125rem] text-canvas/55">Rahim Uddin · Khulna</p>
          </figcaption>
          <LiveTag tone="dark">Live monitoring</LiveTag>
        </div>
      </motion.figure>
    </Container>
  </section>
);

/* --------------------------------------------------------------- Stats --- */
const STATS = [
  { value: '5,000+', label: 'Farmers reached' },
  { value: '40%', label: 'Salinity cut in two cycles' },
  { value: '14 days', label: 'Intrusion forecast lead' },
  { value: '98%', label: 'Model accuracy' },
];

const Home = () => (
  <>
    <Hero />

    <Section className="pt-14 pb-10 md:pt-16 md:pb-12">
      <Container>
        <RevealGroup className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          {STATS.map((s) => (
            <RevealItem key={s.label}>
              <Stat value={s.value} label={s.label} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>

    <PartnerMarquee />

    <ApproachScroll />

    <ProductShowcase />

    {/* Awards */}
    <Section tone="sunk">
      <Container>
        <SectionHead eyebrow="Recognition" title="Backed and awarded internationally." />

        <RevealGroup className="grid gap-6 md:grid-cols-3" stagger={0.08}>
          {AWARDS.map((a) => (
            <RevealItem key={a.name}>
              <Card className="group h-full">
                <a href={a.href} target="_blank" rel="noopener noreferrer" className="flex h-full flex-col p-7">
                  <div className="flex h-32 items-center justify-start">
                    <img src={a.img} alt={a.name} className="max-h-full max-w-[190px] object-contain" />
                  </div>
                  <div className="mt-8 flex items-end justify-between gap-4">
                    <div>
                      <Eyebrow tone="amber">{a.badge}</Eyebrow>
                      <h3 className="mt-3 font-display text-lg font-medium tracking-[-0.02em]">{a.name}</h3>
                      <p className="mt-1 text-sm text-ink-muted">{a.detail}</p>
                    </div>
                    <svg
                      width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true"
                      className="mb-1 shrink-0 text-ink-faint transition-[transform,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                    >
                      <path d="M4 10 10 4M10 4H5m5 0v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </a>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>

    {/* Team */}
    <Section tone="canvas">
      <Container>
        <SectionHead
          eyebrow="The team"
          title="The people behind Urbor."
          action={<ArrowLink as={Link} to="/about">More about us</ArrowLink>}
        />

        <RevealGroup className="grid grid-cols-2 gap-6 md:grid-cols-4" stagger={0.06}>
          {TEAM.map((m) => (
            <RevealItem key={m.name}>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg border border-line bg-sunk">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-4 font-display text-base font-medium tracking-[-0.02em] transition-colors duration-200 group-hover:text-leaf">
                  {m.name}
                </h3>
                <p className="mt-0.5 text-sm text-ink-faint">{m.role}</p>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>

    {/* In the field */}
    <Section tone="sunk">
      <Container>
        <SectionHead
          eyebrow="In the field"
          title="Work in progress."
          action={<ArrowLink as={Link} to="/about">See more from the field</ArrowLink>}
        />
        <FieldGallery variant="compact" />
      </Container>
    </Section>

    {/* Closing CTA */}
    <Section tone="canvas" className="pb-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-line bg-surface px-8 py-16 text-center md:px-16 md:py-20">
            <GridLines className="opacity-60" />
            <div className="relative z-10">
              <Eyebrow>Get involved</Eyebrow>
              <h2 className="text-headline mx-auto mt-6 max-w-[18ch]">
                Join the restoration.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
                We work with research institutions, funders and local
                organisations across the coastal belt.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Button as="a" href={`mailto:${CONTACT_EMAIL}`} size="lg">
                  Become a partner
                </Button>
                <Button
                  as="a"
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  tone="outline"
                  size="lg"
                >
                  Open the app
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  </>
);

export default Home;
