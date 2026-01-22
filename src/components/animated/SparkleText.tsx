'use client';
import { useIntlayer } from 'next-intlayer';
import { useEffect } from 'react';
import { PiStarFourFill } from 'react-icons/pi';

export default function SparkleText() {
  const content = useIntlayer('page-shared');

  // Source: https://ui.hextastudio.in/docs/examples/general/SparkleTextEffect
  useEffect(() => {
    let index = 0;
    const interval = 1300;

    const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = (star: HTMLElement) => {
      star.style.setProperty('--star-left', `${rand(-10, 100)}%`);
      star.style.setProperty('--star-top', `${rand(-40, 80)}%`);
    };

    const stars = Array.from(document.getElementsByClassName('magic-star'));
    for (const star of stars) {
      const htmlStar = star as HTMLElement;
      setTimeout(
        () => {
          animate(htmlStar);

          setInterval(() => animate(htmlStar), 1300);
        },
        index++ * (interval / 2),
      );
    }
  }, []);

  return (
    <div>
      <span className='inline-block magic gradient-purple font-bold relative'>
        <span>({content.showMore})</span>
        <PiStarFourFill className='magic-star [--size:clamp(20px,1.5vw,30px)] block h-[--size] w-[--size] top-[--star-top] left-[--star-left] absolute animate-starScale text-yellow-200' />
        <PiStarFourFill className='magic-star [--size:clamp(20px,1.5vw,30px)] block h-[--size] w-[--size] top-[--star-top] left-[--star-left] absolute animate-starScale text-yellow-200' />
      </span>
    </div>
  );
}
