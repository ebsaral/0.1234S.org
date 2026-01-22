import { getIntlayer, getMultilingualUrls, LocalesValues } from 'intlayer';
import { Metadata } from 'next';

export function randomIndex<T>(arr: T[]): number {
  return Math.floor(Math.random() * arr.length);
}

export function random<T>(arr: T[]): T {
  return arr[randomIndex(arr)];
}

export function getPageMetadata({
  locale,
  customPageKey,
}: {
  locale: LocalesValues;
  customPageKey?: string;
}): Metadata {
  const metadata = getIntlayer('page-metadata', locale);
  let path = '/';
  let imageSrc = '/images/logo.png';
  let title = metadata.title;
  let description = metadata.description;

  let customContent = undefined;
  if (customPageKey) {
    customContent = getIntlayer(customPageKey, locale);
    path = customContent.href;
    imageSrc = customContent.image.src;
    title = customContent.title;
    description = customContent.description;
  }

  const url = `https://0.1234s.org${path}`;
  const multilingualUrls = getMultilingualUrls(url);

  const imageUrl = `http://0.1234s.org${imageSrc}`;
  const secureImageUrl = `https://0.1234s.org${imageSrc}`;

  return {
    ...metadata,
    alternates: {
      canonical: multilingualUrls[locale as keyof typeof multilingualUrls],
      languages: { ...multilingualUrls, 'x-default': url },
    },
    openGraph: {
      ...metadata.openGraph,
      url: multilingualUrls[locale as keyof typeof multilingualUrls],
      images: [
        {
          url: imageUrl,
          secureUrl: secureImageUrl,
        },
      ],
    },
    title,
    description,
  };
}

export function applyFontStyles(text: string) {
  return text
    .split('**')
    .map((part, index) => (index % 2 === 1 ? <strong key={index}>{part}</strong> : part))
    .map((part, index) =>
      typeof part === 'string' && part.includes('*')
        ? part.split('*').map((subpart, subindex) =>
            subindex % 2 === 1 ? (
              <em key={`${index}-${subindex}`} className='font-medium'>
                {subpart}
              </em>
            ) : (
              subpart
            ),
          )
        : part,
    );
}
