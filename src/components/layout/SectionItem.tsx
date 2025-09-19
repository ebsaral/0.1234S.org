import Image from "next/image";
import { useTranslations } from "next-intl";

import { SectionItem as SectionItemType } from "@/components/layout/types";
import { FaLink } from "react-icons/fa6";


export default function SectionItem({item} : {item: SectionItemType}) {

    const t = useTranslations();

    const isHttp = (link: string) => {
      return link.startsWith("http")
    }

    const trimText = (text: string, max: number = 20) => {
      return text.substring(0, max)
    }

    const getLink = (item: SectionItemType, options: {short?: boolean, trim?: boolean} = {short: false, trim: false}) => {
      const isLocal = item.link.startsWith("/en") || item.link.startsWith("/tr");
      const link = isLocal || isHttp(item.link) ? item.link : t(item.link);
      
      if(!options.short){
        return link
      }

      if(isHttp(link)) {
        const webLink = link.substring(8);
        if(webLink.startsWith("www")){
          return webLink.substring(4)
        }
        return options.trim ? trimText(webLink) : webLink
      }
      else {
        const t = link.substring(3);
        return options.trim ? trimText(t) : t;
      }
    }

    return (
          <a
              className="flex flex-col items-center p-5 text-sm text-left font-[family-name:var(--font-geist-mono)] whitespace-pre-line border border-solid border-transparent transition-colors hover:bg-gray-800"
              href={getLink(item)}
              target={isHttp(getLink(item))?"_blank":"_self"}
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
                {item.displayLink && <div className="flex flex-row gap-2 items-center justify-center text-center font-thin flex-wrap">
                  <FaLink /> {getLink(item, {short: true})}
                </div>}
                <div className={`flex text-center font-bold ${item.titleStyle}`}>{t(item.translationPaths.title)}</div>
                {item.translationPaths.text && (t(item.translationPaths.text) ??<div className={`flex text-center hover:no-underline ${item.descriptionStyle}`}>{t(item.translationPaths.text)}</div>)}
              </div>

            </div>
          </a>
    
    )
}