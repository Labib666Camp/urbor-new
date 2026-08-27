import React from 'react';
import clsx from 'clsx';
import { RevealGroup, RevealItem } from './ui';

// Ordered so the first eight stand on their own as a compact strip, while the
// full set keeps the larger anchor tile and its editorial rhythm.
const GALLERY = [
  { type: 'img', src: '/assets/media/activities/IMG_1907.JPG', span: 'col-span-2 row-span-2', alt: 'Field work in the coastal belt' },
  { type: 'img', src: '/assets/media/team_1.jpg', span: 'col-span-1 row-span-1', alt: 'The Urbor team on site' },
  { type: 'video', src: '/assets/media/activities/fun-1.mp4', span: 'col-span-1 row-span-1', alt: '' },
  { type: 'img', src: '/assets/media/web/soil-mixing.jpg', span: 'col-span-1 row-span-1', alt: 'Mixing soil amendments' },
  { type: 'img', src: '/assets/media/activities/IMG_1916.JPG', span: 'col-span-1 row-span-1', alt: 'Community session' },
  { type: 'video', src: '/assets/media/activities/fun-2.mp4', span: 'col-span-1 row-span-1', alt: '' },
  { type: 'img', src: '/assets/media/activities/78ce5696072a4bd1ad9c225c0f77c071.webp', span: 'col-span-1 row-span-1', alt: 'Field activity' },
  { type: 'img', src: '/assets/media/activities/IMG_1934.JPG', span: 'col-span-2 row-span-1', alt: 'Working with farmers' },
  { type: 'img', src: '/assets/media/team_2.png', span: 'col-span-1 row-span-1', alt: 'Team portrait' },
  { type: 'video', src: '/assets/media/activities/fun-3.mp4', span: 'col-span-1 row-span-1', alt: '' },
  { type: 'img', src: '/assets/media/activities/IMG_1918.JPG', span: 'col-span-1 row-span-1', alt: 'Field activity' },
  { type: 'img', src: '/assets/media/activities/7cb217603173487e99d9a1aeca24f003.webp', span: 'col-span-1 row-span-1', alt: 'Field activity' },
];

const MEDIA_CLASS =
  'h-full w-full object-cover grayscale transition-[filter,transform] duration-700 ' +
  'ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-hover:grayscale-0';

const Tile = ({ item }) => (
  <div className="group h-full w-full overflow-hidden rounded-md border border-line bg-sunk">
    {item.type === 'video' ? (
      <video autoPlay loop muted playsInline className={MEDIA_CLASS}>
        <source src={item.src} type="video/mp4" />
      </video>
    ) : (
      <img src={item.src} alt={item.alt} loading="lazy" className={MEDIA_CLASS} />
    )}
  </div>
);

/**
 * `full` keeps the varied spans for the About page. `compact` is a uniform
 * eight-tile strip for the homepage, where the gallery is a taste rather than
 * the whole archive.
 */
const FieldGallery = ({ variant = 'full', className }) => {
  const compact = variant === 'compact';
  const items = compact ? GALLERY.slice(0, 8) : GALLERY;

  return (
    <RevealGroup
      className={clsx(
        'grid gap-3',
        compact
          ? 'auto-rows-[132px] grid-cols-2 md:auto-rows-[168px] md:grid-cols-4'
          : 'auto-rows-[150px] grid-cols-2 md:auto-rows-[190px] md:grid-cols-4',
        className
      )}
      stagger={0.04}
    >
      {items.map((item) => (
        <RevealItem key={item.src} className={compact ? undefined : item.span}>
          <Tile item={item} />
        </RevealItem>
      ))}
    </RevealGroup>
  );
};

export default FieldGallery;
