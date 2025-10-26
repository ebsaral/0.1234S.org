"use client";

import { useIntlayer, useLocale } from "next-intlayer";
import { DATE_FORMAT_OPTIONS } from "./utils";

export default function LastUpdate({date}:{date:string}) {
    const { locale } = useLocale();
    const content = useIntlayer("page-shared");

    return <div className="flex text-sm">{content.publishDate}: {new Date(date).toLocaleDateString(locale, DATE_FORMAT_OPTIONS)}</div>
}