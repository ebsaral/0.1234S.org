'use client';

import { useIntlayer, useLocale } from 'next-intlayer';
import { FaRegFilePdf } from 'react-icons/fa';

export default function InfoLinks({ className }: { className?: string }) {
  const content = useIntlayer('page-home');
  const { locale } = useLocale();
  const cvLink = content.links.cv.link.value;

  const lastUpdate = new Date('2026-02-25');

  return (
    <div className={`flex gap-6 flex-wrap items-center justify-center ${className}`}>
      {cvLink !== '' && (
        <span className='flex flex-col gap-2 items-center'>
          <a className='flex items-center gap-2 underline underline-offset-4 hover:no-underline' href={cvLink}>
            <FaRegFilePdf />
            {content.links.cv.label}
          </a>
          <em className='text-xs'>
            {content.lastUpdate({
              date: lastUpdate.toLocaleDateString(locale, {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
                localeMatcher: 'best fit',
              }),
            })}
          </em>
        </span>
      )}
    </div>
  );
}
