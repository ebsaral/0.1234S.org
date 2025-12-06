import Image from "next/legacy/image";

import { FaLink } from "react-icons/fa6";
import { LocalizedLink } from "../links";


export default function SectionItem({href, title, titleStyle, text, textStyle, imgSrc, imgAlt, spin} : {href: string, title: string, titleStyle: string, text: string, textStyle: string, imgSrc: string, imgAlt: string, spin?: boolean}) {

    const isHttp = (link: string) => {
      return link.startsWith("http")
    }

    const getLinkText = (itemLink: string) => {
      let link = itemLink;

      if(isHttp(link)) {
        link = link.substring(8)
        if(link.startsWith("www.")){
          link = link.substring(4)
        }
      }

      return link;
    }

    return (
          <LocalizedLink
              href={href}
              className="flex flex-col items-center p-5 text-sm text-left font-[family-name:var(--font-geist-mono)] whitespace-pre-line border border-solid border-transparent transition-colors hover:bg-gray-800 rounded-xl"
              target={isHttp(href)?"_blank":"_self"}
              rel="noopener noreferrer"
              title={title}
              prefetch={true}
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <Image
                src={imgSrc}
                alt={imgAlt}
                className={"rounded-full" + (spin ? " animate-spin" : "")}
                width={120}
                height={120}
                objectFit="cover"
                priority
              />
              <div className="flex flex-col gap-2 items-center justify-center">
                <div className="flex flex-row gap-2 items-center justify-center text-center font-thin flex-wrap">
                  <FaLink /> {getLinkText(href)}
                </div>
                <div className={`flex text-center font-bold ${titleStyle}`}>{title}</div>
                <div className={`flex text-center hover:no-underline ${textStyle}`}>{text}</div>
              </div>

            </div>
          </LocalizedLink>
    
    )
}