import Image from "next/image"

import { LastUpdate, PublishDate} from "@/components/dates";
import { HomePageLink} from "@/components/links";
import { InnerLayout as InnerLayoutType } from "@/components/layout/types";
import LanguageSelection from "./LanguageSelection";
import { IntlayerServerProvider, useIntlayer } from "next-intlayer/server";
import { IntlayerClientProvider } from "next-intlayer";

export default function PageInnerLayout({children, params}: {
    children: React.ReactNode;
    params: InnerLayoutType;
  }) {
    const content = useIntlayer("page-shared")
    return (
        <IntlayerServerProvider locale={params.locale}>
            <IntlayerClientProvider locale={params.locale}>
                <main className="flex flex-col gap-8 items-center mt-10 w-full">
                    <LanguageSelection />
                    {params.image && <Image
                        className="rounded-3xl"
                        src={params.image.src}
                        alt={params.image.alt}
                        title={params.image.alt}
                        width={350}
                        height={350}
                        priority
                    />}
                    {params.displayHomePageLink && <HomePageLink />}
                    {params.isSoon && <p className="text-2xl mt-2 font-bold text-cyan-400">{content.soon}</p>}
                    <div className="page-section text-center">
                        <h1>{params.title}</h1>
                        <p>{params.subtitle}</p>
                    </div>
                    {children}
                    <div className="page-footer">
                        {params.publishDate && <PublishDate date={new Date(params.publishDate)} />}
                        {params.lastUpdateDate && <LastUpdate date={new Date(params.lastUpdateDate)} />}
                    </div>
                    <div id="b"></div>
                </main>
            </IntlayerClientProvider>
        </IntlayerServerProvider>
    )}