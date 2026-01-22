'use client';

import { getLocaleName, getLocalizedUrl } from 'intlayer';

import { useIntlayer, useLocale, useLocaleCookie } from 'next-intlayer';
import Link from 'next/link';
import { PiGlobeSimpleDuotone } from 'react-icons/pi';

export default function LanguageSelection({
  className = '',
  targetId = '',
}: {
  className?: string;
  targetId?: string;
}) {
  const { locale, pathWithoutLocale, availableLocales } = useLocale();
  const content = useIntlayer('page-home');
  const { setLocaleCookie } = useLocaleCookie();
  return (
    <div className={`page-header ${className}`}>
      <PiGlobeSimpleDuotone className='text-xl' />
      {availableLocales.map((localeItem) => (
        <div key={localeItem} className='flex flex-row items-center justify-center gap-2'>
          <p>{content.flags[localeItem]}</p>
          <Link
            className={
              `flex items-center gap-2 underline underline-offset-4 hover:no-underline ` +
              `${locale === localeItem && ' font-bold'}`
            }
            href={getLocalizedUrl(pathWithoutLocale, localeItem)}
            hrefLang={localeItem}
            aria-current={locale === localeItem ? 'page' : undefined}
            onClick={() => setLocaleCookie(localeItem)}
            itemID={targetId}
          >
            {getLocaleName(localeItem)}
          </Link>
        </div>
      ))}
    </div>
  );
}
