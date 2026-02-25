import Image from 'next/legacy/image';

import { HomePageLink } from '@/components/links';
import LanguageSelection from './LanguageSelection';
import { useIntlayer, useLocale } from 'next-intlayer/server';
import { InnerLayout } from './types';

const Main = ({ children, params }: { children: React.ReactNode; params: InnerLayout }) => {
  const { locale } = useLocale();
  const sharedContent = useIntlayer('page-shared', locale);
  const content = useIntlayer(params.intlayerKey, locale);

  return (
    <main className='flex flex-col gap-8 items-center w-full'>
      <LanguageSelection />
      {content.image.src.value && (
        <Image
          className='rounded-full'
          src={content.image.src.value}
          alt={content.image.alt.value}
          title={content.image.alt.value}
          width={350}
          height={350}
          objectFit='cover'
          priority
        />
      )}
      {params.displayHomePageLink && <HomePageLink />}
      {params.isSoon && <p className='text-2xl mt-2 font-bold text-cyan-400'>{sharedContent.soon}</p>}
      <div className='page-section text-center'>
        <h1>{content.title}</h1>
        <p>{content.subtitle}</p>
      </div>
      {children}
    </main>
  );
};

export default Main;
