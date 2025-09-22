import { useIntlayer } from "next-intlayer/server";

export default function LastUpdate({date, isDivine=false}:{date:Date, isDivine?: boolean}) {
    const content = useIntlayer("page-shared");

    return <div className="flex text-sm">{isDivine?content.lastRevelation:content.lastUpdate}: {date}</div>
}