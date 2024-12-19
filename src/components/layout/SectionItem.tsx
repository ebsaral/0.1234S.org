import { useTranslations } from "next-intl";
import Image from "next/image";

export type SectionItemType = {
    translationPaths: {
        title: string,
        text?: string
    },
    link: string,
    image: {
        src: string,
        alt: string,
        width: number
    },
    titleStyle?: string;
    descriptionStyle?: string
}

export default function SectionItem({item} : {item: SectionItemType}) {

    const t = useTranslations();

    return (
          <a
              className="flex flex-col items-center p-5 text-sm text-left font-[family-name:var(--font-geist-mono)] whitespace-pre-line border border-solid border-transparent transition-colors hover:underline hover:underline-offset-4 hover:bg-gray-800"
              href={item.link.startsWith("http")?item.link:t(item.link)}
              target={item.link.startsWith("http")?"_blank":"_self"}
              rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <Image
                className="flex rounded-2xl"
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.width}
                priority
              />
              <div className="flex flex-col gap-2 items-center justify-center">
                <div className={`flex text-center font-bold ${item.titleStyle}`}>{t(item.translationPaths.title)}</div>
                {item.translationPaths.text && (t(item.translationPaths.text) ??<div className={`flex text-center hover:no-underline ${item.descriptionStyle}`}>{t(item.translationPaths.text)}</div>)}
              </div>
            
            </div>
          </a>
    
    )
}