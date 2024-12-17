import Image from "next/image"
import LastUpdate from "@/components/dates/LastUpdate";
import HomePageLink from "../links/HomePageLink";
import PublishDate from "../dates/PublishDate";
import { useTranslations } from "next-intl";

interface ImageInterface {
    src: string;
    alt: string;
}

export default function PageInnerLayout({children, params}: {
    children: React.ReactNode;
    params: {image: ImageInterface, isSoon?: boolean, title: string, subtitle: string, publishDate?: string, lastUpdateDate?: string};
  }) {
    const t = useTranslations("General")
    return (<main className="flex flex-col gap-8 items-center">
        <Image
            className="rounded-3xl"
            src={params.image.src}
            alt={params.image.alt}
            width={350}
            height={350}
            priority
        />
        <HomePageLink />
        {params.isSoon && <h1 className="text-2xl mt-2 font-bold text-cyan-400">{t("soon")}</h1>}
        <div className="flex gap-6 text-4xl text-center font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
            {params.title}
        </div>
        <div className="flex flex-row text-center text-lg ml-6 mr-6">
            {params.subtitle}
        </div>
        {children}
        <div className="flex flex-col text-sm gap-2 mb-5">
            {params.publishDate && <PublishDate date={new Date(params.publishDate)} />}
            {params.lastUpdateDate && <LastUpdate date={new Date(params.lastUpdateDate)} />}
        </div>
    </main>)
}