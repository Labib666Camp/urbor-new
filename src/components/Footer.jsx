import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Eyebrow, GridLines } from './ui';

const COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'Solutions', to: '/solutions' },
      { label: 'Technology', to: '/technology' },
      { label: 'About', to: '/about' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Facebook', href: 'https://www.facebook.com/urbor.ag' },
      { label: 'LinkedIn', href: 'https://linkedin.com/company/urbor-ag/' },
      { label: 'Email', href: 'mailto:contact.urbor.ag@gmail.com' },
    ],
  },
];

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-canvas/10 bg-moss-deep text-canvas grain">
    <GridLines tone="dark" className="opacity-60" />

    <Container className="relative z-10">
      <div className="grid grid-cols-2 gap-x-8 gap-y-14 py-20 md:grid-cols-12 md:py-24">
        <div className="col-span-2 md:col-span-5">
          <div className="flex items-center gap-2.5">
            <img src="/assets/media/logo.png" alt="" className="h-11 w-auto object-contain" />
            <span className="font-display text-lg font-medium tracking-[-0.03em]">Urbor</span>
          </div>
          <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-canvas/55">
            Turning saline coastal land back into productive ground — with bio-remediation
            in the field and predictive analytics in the farmer's hand.
          </p>
        </div>

        <div className="hidden md:col-span-2 md:block" />

        {COLUMNS.map((col) => (
          <div key={col.title} className="md:col-span-2">
            <Eyebrow tone="onDark">{col.title}</Eyebrow>
            <ul className="mt-6 space-y-3.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="text-[0.9375rem] text-canvas/60 transition-colors duration-200 hover:text-canvas"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target={link.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="text-[0.9375rem] text-canvas/60 transition-colors duration-200 hover:text-canvas"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 border-t border-canvas/10 py-8 text-[0.8125rem] text-canvas/35 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Urbor. All rights reserved.</p>
        <p className="font-mono text-[0.6875rem] tracking-[0.14em] uppercase">
          Khulna · Bangladesh
        </p>
      </div>
    </Container>
  </footer>
);

export default Footer;
