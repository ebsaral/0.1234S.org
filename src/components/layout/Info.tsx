import { ContentSectionItem } from "@/types"


export function InfoItem({title, text, wide}: {title: string, text: string, wide?:boolean}) {
    let titleClass = "font-bold text-2xl sm:text-right text-left"
    let textClass = "col-span-2 text-left leading-6"
    if(wide) {
        titleClass += " sm:basis-1/5"
        textClass += " sm:basis-4/5"
    }
    else {
        titleClass += " sm:basis-1/3"
        textClass += " sm:basis-2/3"
    }
    return <div className="flex flex-col gap-2 sm:gap-6 sm:flex-row [&:not(:first-child)]:mt-4 sm:[&:not(:first-child)]:mt-2">
        <div className={titleClass}>{title}</div>
        <div className={textClass}>{text}</div>  
    </div>
}

export default function Info({sections} : {sections: ContentSectionItem[]}) {
    return <div className="flex-col space-y-2 gap-6 text-sm text-justify p-5 font-[family-name:var(--font-geist-mono)] whitespace-pre-line max-w-4xl">
    <div className="flex flex-col gap-6">
        <InfoItem wide={true} title={sections[0].title} text={sections[0].text} />
        <InfoItem wide={true} title={sections[1].title} text={sections[1].text} />
        <InfoItem wide={true} title={sections[2].title} text={sections[2].text} />
    </div>
  </div>
}