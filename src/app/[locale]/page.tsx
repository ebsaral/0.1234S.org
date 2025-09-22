import { type NextPageIntlayer, LocalPromiseParams } from "next-intlayer";

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
  
  const layoutParams: InnerLayoutType = {
    intlayerKey: "page-home",
    locale
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