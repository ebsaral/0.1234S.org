import { useFormatter, useTranslations } from "next-intl"

export default function LastUpdate({date}:{date:Date}) {
    const t = useTranslations("General");
    const format = useFormatter();

    return <div className="flex text-sm">{t("publish_date")}: {format.dateTime(date, {year: "numeric", month: "long", day: "2-digit", localeMatcher: "best fit", hour: "2-digit", minute: "2-digit"})}</div>
}