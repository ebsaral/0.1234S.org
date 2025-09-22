import { type NextPageIntlayer, LocalPromiseParams } from "next-intlayer";
import { useIntlayer } from "next-intlayer/server";

import { InnerLayout, InfoLinks } from "@/components";
import { InnerLayout as InnerLayoutType } from "@/types";
import LinkSection from "@/components/layout/LinkSection";
import { Metadata } from "next";
import { getPageMetadata } from "@/utils";
import HomeSection from "@/components/layout/HomeSections";

export const generateMetadata = async ({
  params,
}: LocalPromiseParams): Promise<Metadata> => {
  const { locale } = await params;

  return getPageMetadata({locale})
};

const Page: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  const content = useIntlayer("page-home", locale);
  
  const layoutParams: InnerLayoutType = {
    locale,
    image: {
      src: content.image.src.value,
      alt: content.image.alt.value
    }, 
    title: content.title.value,
    subtitle: content.subtitle.value
  }

  return (
    <InnerLayout params={layoutParams}>
      <>
        <InfoLinks />
        <hr className="page-break-bold"></hr>
        <HomeSection />
        <LinkSection id="links" />
      </>
      </InnerLayout>
    )
}

export default Page;