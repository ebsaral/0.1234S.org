import { useFormatter, useTranslations } from "next-intl"

export default function LastUpdate({date}:{date:Date}) {
    const t = useTranslations();
    const format = useFormatter();

    return <>{t("Text.LastUpdate")}: {format.dateTime(date, {year: "numeric", month: "long", day: "2-digit", localeMatcher: "best fit", hour: "2-digit", minute: "2-digit"})}</>
}