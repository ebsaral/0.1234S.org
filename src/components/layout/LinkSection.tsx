import { getIntlayer } from 'intlayer';
import { useLocale } from 'next-intlayer/server';
import { SocialIcon } from 'react-social-icons';
import { ContentHome } from '@/types';

export default function LinkSection({ id }: { id: string }) {
  const { locale } = useLocale();
  const content = getIntlayer('page-home', locale) as ContentHome;

  return (
    <div id={id} className='page-section w-full mx-auto flex items-center'>
      <div className={`grid grid-cols-3 sm:grid-cols-6 justify-center items-center gap-10 sm:gap-8`}>
        {content.links.social.map((props, index) => (
          <SocialIcon
            key={index}
            title={props.label}
            target='_blank'
            className='opacity-80	hover:opacity-100 hover:scale-110 transform-all duration-300 hover:p-[1]'
            {...props}
          />
        ))}
      </div>
    </div>
  );
}
