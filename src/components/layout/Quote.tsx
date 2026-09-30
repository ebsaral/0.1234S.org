'use client';

import { useState } from 'react';
import { useIntlayer } from 'next-intlayer';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { GrBlockQuote } from 'react-icons/gr';

export default function Quote({ className }: { className?: string }) {
  const content = useIntlayer('page-quotes');
  const [index, setIndex] = useState(0);

  function next() {
    if (index + 1 < content.items.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <div
      onClick={() => next()}
      className={`relative flex align-middle items-center justify-center-80 p-6 rounded-xl shadow-lg select-none cursor-pointer stars-box min-h-72 sm:min-h-64 max-w-max mx-6 sm:w-96 sm:mx-auto ${className || ''}`}
    >
      <div className='stars' />
      <GrBlockQuote className='absolute left-1/2 -translate-x-3 top-7' size={28} />
      <p className='text-center text-base font-[family-name:var(--font-geist-mono)] whitespace-pre-line'>
        {content.items[index].title}
      </p>

      <p className='flex flex-inline gap-1 items-center absolute left-1/2 -translate-x-4 bottom-7 text-xs text-right w-12'>
        {index}
        {' / '}
        {content.items.length}
        <MdKeyboardDoubleArrowRight className='animate-slide-to-right' size={16} />
      </p>
    </div>
  );
}
