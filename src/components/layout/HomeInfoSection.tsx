"use client"

import { useTranslations } from "next-intl";
import { InfoItem } from "@/components";

export default function HomeInfoSection() {
    const t = useTranslations("Pages.Home.Summary");
    const infoSectionKeys = [
        "education",
        "work_experience",
        "interests",
        "talents",
        "social_causes",
        "places"
        ]
    return (
        <>
        <div id="summary" className="flex mb-6 text-center text-3xl font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line select-none cursor-pointer">
            <div className="flex flex-row gap-4">
                <div className="gradient-purple"><h2>{t("title")}</h2></div>
            </div>
        </div>
        <div className={`flex-row space-y-2 gap-6 text-sm text-left sm:text-justify pl-5 pr-5 font-[family-name:var(--font-geist-mono)] whitespace-pre-line max-w-4xl`}>
            <div className={`flex flex-col gap-6`}>
            {infoSectionKeys.map((infoKey, i)=>(
                <InfoItem key={i} wide={false} title={t(`${infoKey}.title`)} text={t(`${infoKey}.text`)} />
            ))}
            </div>
        </div>
        </>
    )
}