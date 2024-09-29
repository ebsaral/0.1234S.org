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
        alt: string
    }
}

export default async function SectionItem({item} : {item: SectionItemType}) {

    const t = useTranslations();

    return (
    <div className="flex text-sm text-left font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
        <div className="flex basis-3/12">
          <a
              className="rounded-full border border-solid border-transparent transition-colors"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="rounded-2xl"
                src={item.image.src}
                alt={item.image.alt}
                width={60}
                height={60}
                priority
              />
            </a>
        </div>

        <div className="flex-row basis-9/12">
          <a className="hover:underline hover:underline-offset-4" href={item.link} target="_blank">
            <div className="font-bold">
              {t(item.translationPaths.title)}
            </div>
            {t(item.translationPaths.text)}
          </a>
        </div>
    </div>
    )
}