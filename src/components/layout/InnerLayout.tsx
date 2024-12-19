import Image from "next/image"
import { useTranslations } from "next-intl";
import LastUpdate from "@/components/dates/LastUpdate";
import PublishDate from "@/components/dates/PublishDate";
import HomePageLink from "@/components/links/HomePageLink";
import InfoLinks from "@/components/links/InfoLinks";
import { InnerLayoutInterface } from "./types";

export default function PageInnerLayout({children, params}: {
    children: React.ReactNode;
    params: InnerLayoutInterface;
  }) {
    const t = useTranslations("General")
    return (<main className="flex flex-col gap-8 items-center">
        {params.image && <Image
            className="rounded-3xl"
            src={params.image.src}
            alt={params.image.alt}
            width={350}
            height={350}
            priority
        />}
        {params.displayHomePageLink && <HomePageLink />}
        {params.isSoon && <p className="text-2xl mt-2 font-bold text-cyan-400">{t("soon")}</p>}
        <div className="page-section text-center">
            <h1>{params.title}</h1>
            <p>{params.subtitle}</p>
        </div>
        {params.displayInfoLinks && <InfoLinks />}
        {children}
        <div className="page-footer">
            {params.publishDate && <PublishDate date={new Date(params.publishDate)} />}
            {params.lastUpdateDate && <LastUpdate date={new Date(params.lastUpdateDate)} />}
        </div>
    </main>)
}