import { getIntlayer } from 'intlayer';
import { useLocale } from 'next-intlayer/server';
import Link from 'next/link';
import {
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandFlickr,
  TbBrandCouchsurfing,
  TbBrandWhatsapp,
  TbBrandFacebook,
  TbBrandGithub,
  TbBrandSoundcloud,
  TbBrandBluesky,
  TbBrandTelegram,
} from 'react-icons/tb';
import { ContentHome } from '@/types';
import { IconType } from 'react-icons';

export default function LinkSection({ id, className }: { id: string; className?: string }) {
  const { locale } = useLocale();
  const content = getIntlayer('page-home', locale) as ContentHome;

  const getIconClass = (index: number): IconType | null => {
    const icons = [
      TbBrandLinkedin,
      TbBrandGithub,
      TbBrandFlickr,
      TbBrandCouchsurfing,
      TbBrandSoundcloud,
      TbBrandInstagram,
      TbBrandFacebook,
      TbBrandBluesky,
      TbBrandWhatsapp,
      TbBrandTelegram,
    ];

    return icons[index];
  };

  return (
    <div id={id} className={`page-section w-full mx-auto flex items-center mt-5 mb-10 ${className}`}>
      <div className={`flex flex-wrap items-center justify-center gap-8 sm:gap-6 w-auto sm:w-96`}>
        {content.links.social.map((props, index) => {
          const Icon = getIconClass(index);
          if (!Icon) {
            return;
          }
          return (
            <Link
              key={index}
              className='group w-[calc(28%-15px)] sm:w-[calc(20%)] flex flex-col items-center justify-center gap-3'
              title={props.label}
              href={props.url as string}
            >
              <div
                key={index}
                className='rounded-full w-12 h-12 flex flex-col items-center justify-center gap-3 text-gray-100 bg-gray-900'
              >
                <Icon className='group-hover:text-white group-hover:scale-110 transform-all duration-300 w-full h-full p-3' />
              </div>
              <div className='text-xs group-hover:scale-105 transform-all duration-300'>{props.label}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
