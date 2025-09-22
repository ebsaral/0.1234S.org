"use client";

import { useIntlayer, useLocale } from "next-intlayer";
import { DATE_FORMAT_OPTIONS } from "./utils";

export default function LastUpdate({date, isDivine=false}:{date:string, isDivine?: boolean}) {
    const {locale} = useLocale();
    const content = useIntlayer("page-shared");

    return <div className="flex text-sm">{isDivine?content.lastRevelation:content.lastUpdate}: {new Date(date).toLocaleDateString(locale, DATE_FORMAT_OPTIONS)}</div>
}