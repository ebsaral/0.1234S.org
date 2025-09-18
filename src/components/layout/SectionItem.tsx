import Image from "next/image";
import { useTranslations } from "next-intl";

import { SectionItem as SectionItemType } from "@/components/layout/types";
import { FaLink } from "react-icons/fa6";


export default function SectionItem({item} : {item: SectionItemType}) {

    const t = useTranslations();

    const isHttp = (link: string) => {
      return link.startsWith("http")
    }

    const getLink = (item: SectionItemType, short: boolean = false) => {
      const isLocal = item.link.startsWith("/en") || item.link.startsWith("/tr");
      const link = isLocal || isHttp(item.link) ? item.link : t(item.link);
      
      if(!short){
        return link
      }

      if(isHttp(link)) {
        const webLink = link.substring(8);
        if(webLink.startsWith("www")){
          return webLink.substring(4)
        }
        return webLink
      }
      else {
        return link.substring(3);
      }
    }

    return (
          <a
              className="flex flex-col items-center p-5 text-sm text-left font-[family-name:var(--font-geist-mono)] whitespace-pre-line border border-solid border-transparent transition-colors hover:bg-gray-800"
              href={getLink(item)}
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
                {item.displayLink && <div className="flex flex-row gap-2 items-center justify-center font-thin">
                  <FaLink /> {getLink(item, true)}
                </div>}
                <div className={`flex text-center font-bold ${item.titleStyle}`}>{t(item.translationPaths.title)}</div>
                {item.translationPaths.text && (t(item.translationPaths.text) ??<div className={`flex text-center hover:no-underline ${item.descriptionStyle}`}>{t(item.translationPaths.text)}</div>)}
              </div>

            </div>
          </a>
    
    )
}