import {InnerLayout, Info} from "@/components";
import { InnerLayout as InnerLayoutType } from "@/types";
import { getPageMetadata } from "@/utils";
import { getIntlayer } from "intlayer";
import { Metadata } from "next";
import { LocalPromiseParams, NextPageIntlayer } from "next-intlayer";

export const generateMetadata = async ({
  params,
}: LocalPromiseParams): Promise<Metadata> => {
  const { locale } = await params;
  return getPageMetadata({locale, customPageKey: "page-hazzeti-emin"})
};

const Page: NextPageIntlayer = async ({ params }) => {
    const { locale } = await params;
    const intlayerKey = "page-hazzeti-emin"
    const content = getIntlayer(intlayerKey, locale)

    const layoutParams: InnerLayoutType = {
      intlayerKey,
      locale,
      isSoon: true,
      lastUpdateDate: "2024-12-12T07:21",
      displayHomePageLink: true
    }
 
    return <InnerLayout params={layoutParams}>
      <div className="flex flex-wrap gap-6 items-center justify-center w-screen">
        <Info sections={content.sections} />
      </div>
    </InnerLayout>;
}

export default Page;