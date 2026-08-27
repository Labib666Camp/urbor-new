import React from 'react';
import { Link } from 'react-router-dom';
import { Satellite, Wifi, Cpu, Smartphone, CloudLightning, Shield, Layers, Database } from 'lucide-react';
import {
  Container, Section, SectionHead, Reveal, RevealGroup, RevealItem,
  Eyebrow, Button, Card, GridLines,
} from '../components/ui';
import DeviceDeck from '../components/DeviceDeck';

// The loop, stated as four stages so the claim is legible rather than asserted.
const PIPELINE = [
  { step: 'Sense', body: 'Sentinel-2 multispectral passes and LoRaWAN soil probes reading electro-conductivity and pH.' },
  { step: 'Ingest', body: 'Readings normalised against a decade of tidal records and hyper-local weather telemetry.' },
  { step: 'Predict', body: 'LSTM models resolve intrusion risk per plot with a fourteen-day forecast horizon.' },
  { step: 'Act', body: 'A single recommendation reaches the farmer — in the app, or by SMS where there is no data.' },
];

const SPECS = [
  { icon: Satellite, title: 'Remote sensing', body: 'Sentinel-2 multispectral imagery drives NDVI and NDWI computation for macro-scale salinity mapping.' },
  { icon: Wifi, title: 'IoT mesh network', body: 'LoRaWAN soil probes measuring electro-conductivity and pH, built for low-power long-range transmission in rural connectivity dead-zones.' },
  { icon: Cpu, title: 'LSTM predictive models', body: 'Recurrent networks trained on ten-plus years of tidal and salinity data, forecasting saltwater intrusion with a fourteen-day lead time.' },
  { icon: Smartphone, title: 'Edge computing', body: 'On-device TensorFlow Lite vision models let farmers diagnose plant stress from leaf images without cloud processing.' },
  { icon: CloudLightning, title: 'Real-time sync', body: 'A progressive web app caches locally and synchronises with the central database the moment a network returns.' },
  { icon: Shield, title: 'Data sovereignty', body: 'End-to-end encryption on all farmer data. Anonymised aggregation is used solely for regional climate modelling.' },
  { icon: Layers, title: 'Micro-climate API', body: 'Hyper-local weather integrated with soil moisture to generate irrigation schedules that minimise capillary salt rise.' },
  { icon: Database, title: 'Legacy integration', body: 'Compatible with existing government agricultural databases for reporting and subsidy verification.' },
];

const Technology = () => (
  <>
    <section className="relative overflow-hidden pt-28 pb-14 md:pt-32 md:pb-16">
      <GridLines className="opacity-70" />
      <Container className="relative z-10">
        <Reveal><Eyebrow>Architecture</Eyebrow></Reveal>
        <Reveal delay={0.05}>
          <h1 className="text-display mt-7 max-w-[14ch]">
            The data-to-action <span className="text-ink-faint">loop.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
            Satellite imagery, ground-truth sensors and predictive models
            synthesised into one platform for coastal resilience — and reduced
            to a decision that fits on a feature phone.
          </p>
        </Reveal>
      </Container>
    </section>

    {/* Pipeline */}
    <Section tone="dark" className="overflow-hidden">
      <GridLines tone="dark" />
      <Container className="relative z-10">
        <RevealGroup className="grid gap-px overflow-hidden rounded-xl border border-canvas/12 bg-canvas/10 md:grid-cols-4" stagger={0.08}>
          {PIPELINE.map((p, i) => (
            <RevealItem key={p.step} className="bg-moss">
              <div className="h-full p-8">
                <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-mint">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-display text-xl font-medium tracking-[-0.02em] text-canvas">{p.step}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-canvas/55">{p.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>

    {/* App screens */}
    <Section tone="canvas">
      <Container>
        <SectionHead
          eyebrow="Interfaces"
          align="center"
          title="Full-fidelity, offline-first, localised."
        />
        <Reveal>
          <DeviceDeck />
        </Reveal>
      </Container>
    </Section>

    {/* Specs */}
    <Section tone="sunk">
      <Container>
        <SectionHead eyebrow="Specifications" title="What the system is built on." />

        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
          {SPECS.map(({ icon: Icon, title, body }) => (
            <RevealItem key={title}>
              <Card className="h-full p-7">
                <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-line bg-canvas text-ink-muted">
                  <Icon size={16} strokeWidth={1.6} />
                </div>
                <h3 className="mt-6 font-display text-base font-medium tracking-[-0.02em]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{body}</p>
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
                Try the analytics platform.
              </h2>
              <p className="mt-3 text-ink-muted">
                The live dashboard coastal farmers and field teams use today.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <Button
                as="a"
                href="https://urboranalytics-117932446247.asia-south1.run.app/"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                Open the app
              </Button>
              <Button as={Link} to="/solutions" tone="outline" size="lg">Methodology</Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  </>
);

export default Technology;
