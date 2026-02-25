import { GalleryLayout, InnerLayout, LastUpdate, PublishDate } from '@/components';
import Sea from '@/components/animated/Sea';
import { doodles, drawings, graphics } from '@/data';
import { InnerLayout as InnerLayoutType } from '@/types';
import { getPageMetadata } from '@/utils';
import { getIntlayer } from 'intlayer';
import { Metadata } from 'next';
import { LocalPromiseParams, NextPageIntlayer } from 'next-intlayer';

export const generateMetadata = async ({ params }: LocalPromiseParams): Promise<Metadata> => {
  const { locale } = await params;
  return getPageMetadata({ locale, customPageKey: 'page-gallery' });
};

const Page: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;
  const intlayerKey = 'page-gallery';
  const content = getIntlayer(intlayerKey, locale);

  const albums = [
    {
      title: content.doodles.title,
      subtitle: content.doodles.subtitle,
      photos: doodles,
    },
    {
      title: content.drawings.title,
      subtitle: content.drawings.subtitle,
      photos: drawings,
    },
    {
      title: content.graphics.title,
      subtitle: content.graphics.subtitle,
      photos: graphics,
    },
  ];

  const layoutParams: InnerLayoutType = {
    intlayerKey,
    locale,
    displayHomePageLink: true,
  };

  const publishDate = '';
  const lastUpdateDate = '2026-02-07';

  return (
    <InnerLayout params={layoutParams}>
      <GalleryLayout albums={albums} />

      <div className='page-footer'>
        <PublishDate date={publishDate} />
        <LastUpdate date={lastUpdateDate} />
      </div>
      {content.quote && <p className='text-center text-xl italic'>{content.quote}</p>}
      <Sea className='mx-auto w-full -mt-24 -mb-40' />
    </InnerLayout>
  );
};

export default Page;
