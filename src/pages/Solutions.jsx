import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Section, SectionHead, Reveal, RevealGroup, RevealItem,
  Eyebrow, Button, Card, LiveTag, GridLines,
} from '../components/ui';

const METHODS = [
  {
    index: '01',
    title: 'Soil remediation',
    body: 'A multi-step bio-remediation process. Gypsum and organic amendments displace sodium ions from soil particles, while halophytes like Hatishur are planted to actively draw salt out of the topsoil.',
    video: '/assets/media/section_1.mp4',
    poster: '/assets/media/section_1.jpg',
    tags: ['Gypsum amendment', 'Halophyte planting', 'Topsoil extraction'],
  },
  {
    index: '02',
    title: 'Native vertical farming',
    body: 'Vertical structures planted with native salt-tolerant creepers bypass strict soil dependency and maximise land-use efficiency, forming a micro-climate that slows evaporation and surface salt crystallisation.',
    video: '/assets/media/site_bg.mp4',
    poster: '/assets/media/section_3.jpg',
    tags: ['Salt-tolerant creepers', 'Micro-climate', 'Land efficiency'],
  },
];

const CAPABILITIES = [
  { title: 'Real-time monitoring', body: 'Soil salinity, pH and moisture tracked continuously through IoT probes placed across the plot.' },
  { title: 'Predictive alerts', body: 'AI-generated warnings for tidal surges and salinity spikes, issued up to fourteen days ahead.' },
  { title: 'Crop recommendations', body: 'Salt-tolerant crop guidance matched to the specific soil profile of an individual field.' },
];

const SCREENS = [
  { src: '/assets/app_screens/homepage.png', alt: 'Farmer dashboard', label: 'Dashboard' },
  { src: '/assets/app_screens/analytics.png', alt: 'Salinity analytics', label: 'Analytics' },
  { src: '/assets/app_screens/tools.png', alt: 'Field tools', label: 'Tools' },
];

// Alternating media/text rows. The index number does the structural work that
// heavy rules and borders used to do.
const MethodRow = ({ method, reverse }) => (
  <div className="grid items-center gap-10 border-t border-line py-14 md:grid-cols-12 md:gap-16 md:py-20">
    <Reveal className={reverse ? 'md:order-2 md:col-span-7' : 'md:col-span-7'}>
      <figure className="relative overflow-hidden rounded-xl border border-line">
        <video
          autoPlay loop muted playsInline poster={method.poster}
          className="aspect-[4/3] w-full object-cover"
        >
          <source src={method.video} type="video/mp4" />
        </video>
        <div className="absolute left-5 top-5">
          <LiveTag tone="dark">Field footage</LiveTag>
        </div>
      </figure>
    </Reveal>

    <Reveal delay={0.08} className={reverse ? 'md:order-1 md:col-span-5' : 'md:col-span-5'}>
      <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-ink-faint">{method.index}</span>
      <h2 className="text-headline mt-5">{method.title}</h2>
      <p className="mt-5 text-lg leading-relaxed text-ink-muted">{method.body}</p>
      <ul className="mt-8 flex flex-wrap gap-2">
        {method.tags.map((t) => (
          <li key={t} className="rounded-full border border-line px-3.5 py-1.5 text-[0.8125rem] text-ink-muted">
            {t}
          </li>
        ))}
      </ul>
    </Reveal>
  </div>
);

const Solutions = () => (
  <>
    <section className="relative overflow-hidden pt-28 pb-14 md:pt-32 md:pb-16">
      <GridLines className="opacity-70" />
      <Container className="relative z-10">
        <Reveal><Eyebrow>Methodology</Eyebrow></Reveal>
        <Reveal delay={0.05}>
          <h1 className="text-display mt-7 max-w-[15ch]">
            Restoring balance to <span className="text-ink-faint">coastal soil.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
            An integrated approach combining physical remediation, adaptive
            farming and applied data science — designed to be run by the
            communities who farm the land.
          </p>
        </Reveal>
      </Container>
    </section>

    <Section tone="canvas" className="py-0">
      <Container>
        {METHODS.map((m, i) => (
          <MethodRow key={m.title} method={m} reverse={i % 2 === 1} />
        ))}
      </Container>
    </Section>

    {/* Analytics */}
    <Section tone="sunk">
      <Container>
        <SectionHead
          eyebrow="Precision analytics"
          align="center"
          title="Data-driven insight for proactive farm management."
          lede="The same field readings that guide remediation drive the app farmers carry."
        />

        <RevealGroup className="grid gap-6 sm:grid-cols-3" stagger={0.08}>
          {SCREENS.map((s) => (
            <RevealItem key={s.label}>
              <figure>
                <div className="overflow-hidden rounded-lg border border-line bg-surface">
                  <img src={s.src} alt={s.alt} className="w-full object-cover" />
                </div>
                <figcaption className="eyebrow mt-4 block text-center text-ink-faint">{s.label}</figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.06}>
          {CAPABILITIES.map((c) => (
            <RevealItem key={c.title}>
              <Card className="h-full p-7">
                <h3 className="font-display text-lg font-medium tracking-[-0.02em]">{c.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">{c.body}</p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>

    <Section tone="canvas" className="pb-24">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-xl border border-line bg-surface p-10 md:flex-row md:items-center md:p-14">
            <div className="max-w-lg">
              <h2 className="font-display text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                See the architecture behind it.
              </h2>
              <p className="mt-3 text-ink-muted">
                Remote sensing, IoT mesh networks and the predictive models that tie them together.
              </p>
            </div>
            <Button as={Link} to="/technology" size="lg" className="shrink-0">
              View the technology
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  </>
);

export default Solutions;
