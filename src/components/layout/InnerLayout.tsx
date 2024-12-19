import Image from "next/image"
import LastUpdate from "@/components/dates/LastUpdate";
import HomePageLink from "../links/HomePageLink";
import PublishDate from "../dates/PublishDate";
import { useTranslations } from "next-intl";

interface ImageInterface {
    src: string;
    alt: string;
}

export interface InnerLayoutInterface {
    image?: ImageInterface;
    isSoon?: boolean;
    title: string;
    subtitle: string;
    publishDate?: string;
    lastUpdateDate?: string;
    displayHomePageLink?: boolean;
}

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
        {children}
        <div className="page-footer">
            {params.publishDate && <PublishDate date={new Date(params.publishDate)} />}
            {params.lastUpdateDate && <LastUpdate date={new Date(params.lastUpdateDate)} />}
        </div>
    </main>)
}