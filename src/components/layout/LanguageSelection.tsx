'use client';

import { getLocaleName, getLocalizedUrl } from 'intlayer';

import { useIntlayer, useLocale } from 'next-intlayer';
import Link from 'next/link';
import { PiGlobeSimpleDuotone } from 'react-icons/pi';

export default function LanguageSelection({ className = '' }: { className?: string; targetId?: string }) {
  const { locale, pathWithoutLocale, setLocale, availableLocales } = useLocale();
  const content = useIntlayer('page-home');

  return (
    <div className={`page-header ${className}`}>
      <PiGlobeSimpleDuotone className='text-xl' />
      {availableLocales.map((localeItem) => (
        <div key={localeItem} className='flex flex-row items-center justify-center gap-2'>
          <p>{content.flags[localeItem]}</p>
          <Link
            className={
              `flex items-center gap-2 underline-offset-4 hover:underline ` + `${locale === localeItem && ' font-bold'}`
            }
            href={getLocalizedUrl(pathWithoutLocale, localeItem)}
            hrefLang={localeItem}
            aria-current={locale === localeItem ? 'page' : undefined}
            onClick={() => setLocale(localeItem)}
            replace
          >
            {getLocaleName(localeItem)}
          </Link>
        </div>
      ))}
    </div>
  );
}
