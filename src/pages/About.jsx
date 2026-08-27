import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import {
  Container, Section, SectionHead, Reveal, RevealGroup, RevealItem,
  Eyebrow, Button, Stat, GridLines,
} from '../components/ui';
import { TEAM, CONTACT_EMAIL } from '../lib/data';
import FieldGallery from '../components/FieldGallery';

const VALUES = [
  {
    title: 'Built with the coast, not for it',
    body: 'Remediation is run by the households who farm the land. The technology exists to make their judgement sharper, never to replace it.',
  },
  {
    title: 'Measured, not asserted',
    body: 'Every claim we make about recovered soil traces back to electro-conductivity and pH readings taken on the plot across harvest cycles.',
  },
  {
    title: 'Works without a signal',
    body: 'The coastal belt has connectivity dead-zones. Alerts reach feature phones over SMS, and the app holds its state until a network returns.',
  },
];

const About = () => (
  <>
    <section className="relative overflow-hidden pt-28 pb-14 md:pt-32 md:pb-16">
      <GridLines className="opacity-70" />
      <Container className="relative z-10">
        <Reveal><Eyebrow>About</Eyebrow></Reveal>
        <Reveal delay={0.05}>
          <h1 className="text-display mt-7 max-w-[16ch]">
            A small team on the <span className="text-ink-faint">saline coast.</span>
          </h1>
        </Reveal>
        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <Reveal delay={0.1} className="md:col-span-7">
            <p className="text-lg leading-relaxed text-ink-muted">
              Salinity intrusion is turning farmland along Bangladesh's coastal
              belt into ground that will not grow food. Urbor works on that
              problem where it happens — in the field, alongside the households
              whose livelihoods depend on the soil recovering.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>

    {/* Team photo */}
    <Section tone="canvas" className="py-0">
      <Container>
        <Reveal>
          <figure className="overflow-hidden rounded-xl border border-line">
            <img
              src="/assets/media/team_photo.jpg"
              alt="The Urbor team"
              className="aspect-[21/9] w-full object-cover"
            />
          </figure>
        </Reveal>
      </Container>
    </Section>

    {/* Stats */}
    <Section tone="canvas" className="py-14 md:py-16">
      <Container>
        <RevealGroup className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          {[
            { value: '5,000+', label: 'Farmers reached' },
            { value: '4', label: 'Core team members' },
            { value: '8', label: 'Institutional partners' },
            { value: '3', label: 'International awards' },
          ].map((s) => (
            <RevealItem key={s.label}><Stat value={s.value} label={s.label} /></RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>

    {/* Values */}
    <Section tone="sunk">
      <Container>
        <SectionHead eyebrow="How we work" title="Three things we hold to." />
        <RevealGroup className="grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3" stagger={0.08}>
          {VALUES.map((v) => (
            <RevealItem key={v.title} className="bg-surface">
              <div className="h-full p-8 md:p-10">
                <h3 className="font-display text-xl font-medium tracking-[-0.02em]">{v.title}</h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-muted">{v.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>

    {/* Team */}
    <Section tone="canvas">
      <Container>
        <SectionHead eyebrow="The team" title="Who does the work." />
        <RevealGroup className="grid grid-cols-2 gap-6 md:grid-cols-4" stagger={0.06}>
          {TEAM.map((m) => (
            <RevealItem key={m.name}>
              <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative aspect-square overflow-hidden rounded-lg border border-line bg-sunk">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  />
                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-sm border border-line bg-canvas/85 text-ink opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                    <Linkedin size={14} strokeWidth={1.6} />
                  </span>
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

    {/* Gallery */}
    <Section tone="canvas" className="pt-0">
      <Container>
        <SectionHead eyebrow="In the field" title="Work in progress." />
        <FieldGallery variant="full" />
      </Container>
    </Section>

    {/* CTA */}
    <Section tone="canvas" className="pb-24 pt-0">
      <Container>
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-xl border border-line bg-surface p-10 md:flex-row md:items-center md:p-14">
            <div className="max-w-lg">
              <h2 className="font-display text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                Work with us.
              </h2>
              <p className="mt-3 text-ink-muted">
                We partner with research institutions, funders and local organisations across the coastal belt.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <Button as="a" href={`mailto:${CONTACT_EMAIL}`} size="lg">Get in touch</Button>
              <Button as={Link} to="/solutions" tone="outline" size="lg">Our method</Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  </>
);

export default About;
