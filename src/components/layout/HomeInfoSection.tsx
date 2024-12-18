"use client"

import { useTranslations } from "next-intl";
import { useState } from "react";
import { InfoItem } from "./Info";
import { SparkleText } from "../animations/SparkleText";

export default function HomeInfoSection() {
    const t = useTranslations();
    const [collapsed, setCollapsed] = useState(true);
    const title = collapsed ? `🫣 ${t("Pages.Home.subtitle")} 🫣` : `🤩 ${t("Pages.Home.subtitle")} 🤩`
    const infoSectionKeys = [
        "education",
        "work_experience",
        "consultancy_solutions",
        "personality_traits",
        "interests",
        "social_causes",
        "places"
        ]
    return (
        <>
        <div className="flex mb-6 text-center text-3xl font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line hover:underline underline-offset-8 select-none cursor-pointer" onClick={() => setCollapsed(!collapsed)}>
            {title}
        </div>
        <div className={`flex-row space-y-2 gap-6 text-sm text-justify pl-5 pr-5 font-[family-name:var(--font-geist-mono)] whitespace-pre-line max-w-4xl ${collapsed? "overflow-hidden":""}`}>
            <div className={`flex flex-col gap-6 ${collapsed? "h-64 sm:h-28":""}`}>
            {infoSectionKeys.map((infoKey, i)=>(
                <InfoItem key={i} wide={false} title={t(`Pages.Home.${infoKey}.title`)} text={t(`Pages.Home.${infoKey}.text`)} />
            ))}
            </div>
        </div>
        {collapsed && <div className="flex flex-col text-lg text-center justify-center">
            <div 
                className="hover:underline underline-offset-4 cursor-pointer select-none"
                onClick={() => setCollapsed(!collapsed)}
            >
                <SparkleText text={`(${t("General.show_more")})`}/>
            </div>
            <div className="text-4xl">👅</div>
            </div>}
        </>
    )
}