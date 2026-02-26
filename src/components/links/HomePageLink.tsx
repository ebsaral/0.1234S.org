'use client';

import NextLink from 'next/link';
import { useIntlayer, useLocale } from 'next-intlayer';
import { GrDomain } from 'react-icons/gr';
import { getLocalizedUrl } from 'intlayer';

export default function HomePageLink() {
  const { locale } = useLocale();
  const content = useIntlayer('page-shared');
  const href = '/';
  const hrefI18n = getLocalizedUrl(href.toString(), locale);

  return (
    <NextLink className='flex items-center gap-2 underline underline-offset-4 hover:no-underline' href={hrefI18n}>
      <GrDomain />
      {content.home}
    </NextLink>
  );
}
