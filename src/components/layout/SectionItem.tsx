import Image from "next/image";

import { FaLink } from "react-icons/fa6";


export default function SectionItem({href, title, titleStyle, text, textStyle, imgSrc, imgAlt} : {href: string, title: string, titleStyle: string, text: string, textStyle: string, imgSrc: string, imgAlt: string}) {

    const isHttp = (link: string) => {
      return link.startsWith("http")
    }

    const trimText = (text: string, max: number = 20) => {
      return text.substring(0, max)
    }

    const getLink = (itemLink: string, options: {short?: boolean, trim?: boolean} = {short: false, trim: false}) => {
      
      const isLocal = itemLink.startsWith("/en") || itemLink.startsWith("/tr");
      const link = isLocal || isHttp(itemLink) ? itemLink : itemLink;
      
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
              href={getLink(href)}
              target={isHttp(getLink(href))?"_blank":"_self"}
              rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <Image
                className="flex rounded-2xl"
                src={imgSrc}
                alt={imgAlt}
                width={120}
                height={120}
                priority
              />
              <div className="flex flex-col gap-2 items-center justify-center">
                <div className="flex flex-row gap-2 items-center justify-center text-center font-thin flex-wrap">
                  <FaLink /> {getLink(href, {short: true})}
                </div>
                <div className={`flex text-center font-bold ${titleStyle}`}>{title}</div>
                <div className={`flex text-center hover:no-underline ${textStyle}`}>{text}</div>
              </div>

            </div>
          </a>
    
    )
}