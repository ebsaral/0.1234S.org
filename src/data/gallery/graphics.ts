import type { Photo } from 'react-photo-album';

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const graphics = [
  {
    asset: '/images/gallery/graphics/1.jpg',
    width: 1422,
    height: 800,
    alt: 'Then I emin you.',
    title: 'Then I emin you.',
  },
  {
    asset: '/images/gallery/graphics/2.jpg',
    width: 1422,
    height: 800,
    alt: 'İki İşlem',
    title: 'İki İşlem',
  },
  {
    asset: '/images/gallery/graphics/3.jpg',
    width: 480,
    height: 514,
    alt: 'Sonsuzluk',
    title: 'Sonsuzluk',
  },
  {
    asset: '/images/gallery/graphics/4.jpg',
    width: 1422,
    height: 800,
    alt: 'Looking for a real God nowadays? 🙄',
    title: 'Looking for a real God nowadays? 🙄',
  },
  {
    asset: '/images/gallery/graphics/5.jpg',
    width: 866,
    height: 486,
    alt: '50%50',
    title: '50%50',
  },
  {
    asset: '/images/gallery/graphics/6.jpg',
    width: 1422,
    height: 800,
    alt: 'S',
    title: 'S',
  },
].map(
  ({ asset, alt, width, height, title }) =>
    ({
      src: asset,
      alt,
      title: title ?? '',
      description: title,
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => ({
        src: asset,
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    }) as Photo,
);

export default graphics;
