import React from 'react';
import { Container, Eyebrow } from './ui';

const PARTNERS = [
  { name: 'UNICEF', logo: 'unicef.png' },
  { name: 'ICT Division', logo: 'ict.png' },
  { name: 'Startup Bangladesh', logo: 'startup_bd.png' },
  { name: 'Wageningen University', logo: 'wageningen.png' },
  { name: 'Youth4Climate', logo: 'youth4climate.png' },
  { name: 'ICCCAD', logo: 'icccad.png' },
  { name: 'Generation Unlimited', logo: 'genu.png' },
  { name: 'JAAGO Foundation', logo: 'jaago.jpeg' },
];

// Logos run at a uniform optical height in flat grey, lifting to full colour
// only on hover — so a wall of mismatched marks reads as one calm row.
const PartnerMarquee = () => (
  <div className="border-y border-line bg-canvas pb-14 pt-10">
    <Container>
      <Eyebrow className="mb-8 block text-center">Supported by</Eyebrow>
    </Container>

    <div className="pause-on-hover mask-fade-x overflow-hidden">
      <div className="marquee-track flex w-max animate-marquee items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {PARTNERS.map((p) => (
              <div key={`${copy}-${p.name}`} className="flex w-[240px] shrink-0 items-center justify-center px-6">
                <img
                  src={`/assets/partners/${p.logo}`}
                  alt={copy === 0 ? p.name : ''}
                  className="h-16 w-auto max-w-full object-contain transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 md:h-20"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PartnerMarquee;
