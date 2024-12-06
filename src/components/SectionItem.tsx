import { useTranslations } from "next-intl";
import Image from "next/image";

export type SectionItemType = {
    translationPaths: {
        title: string,
        text: string
    },
    link: string,
    image: {
        src: string,
        alt: string,
        width: number
    },
}

export default async function SectionItem({item} : {item: SectionItemType}) {

    const t = useTranslations();

    return (
    <div className="flex flex-col items-center text-sm text-left font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
          <a
              className="rounded-full border border-solid border-transparent transition-colors hover:underline hover:underline-offset-4"
              href={item.link.startsWith("http")?item.link:t(item.link)}
              target={item.link.startsWith("http")?"_blank":"_self"}
              rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center justify-center gap-6">
              <Image
                className="flex rounded-2xl"
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.width}
                priority
              />
              <div className="flex flex-col gap-3">
                <div className="text-center font-bold">{t(item.translationPaths.title)}</div>
                <div className="text-center hover:no-underline">{t(item.translationPaths.text)}</div>
              </div>
            
            </div>
          </a>
    </div>
    )
}