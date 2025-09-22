import { useIntlayer } from "next-intlayer/server";

export default function LastUpdate({date}:{date:Date}) {
    const content = useIntlayer("page-shared");

    return <div className="flex text-sm">{content.publishDate}: {date}</div>
}