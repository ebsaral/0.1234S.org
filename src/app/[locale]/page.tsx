import { type NextPageIntlayer, LocalPromiseParams } from 'next-intlayer';
import { InnerLayout, InfoLinks } from '@/components';
import { InnerLayout as InnerLayoutType } from '@/types';
import LinkSection from '@/components/layout/LinkSection';
import { Metadata } from 'next';
import { getPageMetadata } from '@/utils';
import HomeSection from '@/components/layout/HomeSections';
import CountdownClock from '@/components/animated/CountdownClock';

export const generateMetadata = async ({ params }: LocalPromiseParams): Promise<Metadata> => {
  const { locale } = await params;

  return getPageMetadata({ locale });
};

const Page: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  const layoutParams: InnerLayoutType = {
    intlayerKey: 'page-home',
    imgEffect: true,
    locale,
  };

  return (
    <InnerLayout params={layoutParams}>
      <>
        <InfoLinks />
        <hr className='page-break-bold mt-0 mb-8'></hr>
        <HomeSection />
        <hr className='page-break-bold'></hr>
        <LinkSection id='links' />
        <hr className='page-break '></hr>
        <CountdownClock className='mb-10 max-w-sm' targetDate={new Date('2026-09-16T23:59:59')} />
      </>
    </InnerLayout>
  );
};

export default Page;
