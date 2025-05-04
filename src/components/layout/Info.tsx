import { InfoSection } from "@/components/layout/types"


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

export default function Info({params}: {params: InfoSection}) {
    return <div className="flex-col space-y-2 gap-6 text-sm text-justify p-5 font-[family-name:var(--font-geist-mono)] whitespace-pre-line max-w-4xl">
    <div className="flex flex-col gap-6">
        <InfoItem wide={true} title={params.purpose.title} text={params.purpose.text} />
        <InfoItem wide={true} title={params.description.title} text={params.description.text} />
        <InfoItem wide={true} title={params.result.title} text={params.result.text} />
    </div>
  </div>
}