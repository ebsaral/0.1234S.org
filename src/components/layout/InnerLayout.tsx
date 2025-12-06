import Image from "next/legacy/image"

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
    const sharedContent = useIntlayer("page-shared", params.locale)
    const content = useIntlayer(params.intlayerKey, params.locale)
    
    return (
        <IntlayerServerProvider locale={params.locale}>
            <IntlayerClientProvider locale={params.locale}>
                <main className="flex flex-col gap-8 items-center w-full">
                    <LanguageSelection />
                    {content.image.src.value && <Image
                        className="rounded-full"
                        src={content.image.src.value}
                        alt={content.image.alt.value}
                        title={content.image.alt.value}
                        width={350}
                        height={350}
                        objectFit="cover"
                        priority
                    />}
                    {params.displayHomePageLink && <HomePageLink />}
                    {params.isSoon && <p className="text-2xl mt-2 font-bold text-cyan-400">{sharedContent.soon}</p>}
                    <div className="page-section text-center">
                        <h1>{content.title}</h1>
                        <p>{content.subtitle}</p>
                    </div>
                    {children}
                    <div className="page-footer">
                        {params.publishDate && <PublishDate date={params.publishDate} />}
                        {params.lastUpdateDate && <LastUpdate date={params.lastUpdateDate} />}
                    </div>
                    <div id="b"></div>
                </main>
            </IntlayerClientProvider>
        </IntlayerServerProvider>
    )}