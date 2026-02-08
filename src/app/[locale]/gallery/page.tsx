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
      title: content.doodles,
      photos: doodles,
    },
    {
      title: content.drawings,
      photos: drawings,
    },
    {
      title: content.graphics,
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
      <Sea className='mx-auto w-full -mt-24 -mb-40' />
    </InnerLayout>
  );
};

export default Page;
