import { getIntlayer } from 'intlayer';
import { useLocale } from 'next-intlayer/server';
import Link from 'next/link';
import { TbBrandInstagram, TbBrandFlickr, TbBrandCouchsurfing, TbBrandWhatsapp, TbBrandTiktok } from 'react-icons/tb';
import { ContentHome } from '@/types';
import { IconType } from 'react-icons';

export default function LinkSection({ id }: { id: string }) {
  const { locale } = useLocale();
  const content = getIntlayer('page-home', locale) as ContentHome;

  const getIconClass = (index: number): IconType | null => {
    switch (index) {
      case 0:
        return TbBrandInstagram;
      case 1:
        return TbBrandFlickr;
      case 2:
        return TbBrandCouchsurfing;
      case 3:
        return TbBrandWhatsapp;
      case 4:
        return TbBrandTiktok;
      default:
        return null;
    }
  };

  return (
    <div id={id} className='page-section w-full mx-auto flex items-center mt-5 mb-10'>
      <div className={`grid grid-cols-5 justify-center items-center gap-5 sm:gap-10`}>
        {content.links.social.map((props, index) => {
          const Icon = getIconClass(index);
          if (!Icon) {
            return;
          }
          return (
            <Link
              key={index}
              className='group rounded-full w-12 h-12 flex items-center justify-center text-gray-100 bg-gray-900'
              title={props.label}
              href={props.url as string}
            >
              <Icon className='group-hover:text-white group-hover:scale-110 transform-all duration-300 w-full h-full p-3' />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
