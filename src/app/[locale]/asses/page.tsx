import { InnerLayout, Info, GalleryLayout, GoogleFormLink } from "@/components";
import { asses } from "@/data"
import { InnerLayout as InnerLayoutType } from "@/types";
import { getPageMetadata } from "@/utils";
import { getIntlayer } from "intlayer";
import { Metadata } from "next";
import { LocalPromiseParams, NextPageIntlayer } from "next-intlayer";


export const generateMetadata = async ({
  params,
}: LocalPromiseParams): Promise<Metadata> => {
  const { locale } = await params;
  return getPageMetadata({locale, customPageKey: "page-asses"})
};

const Page: NextPageIntlayer = async ({ params }) => {
    const { locale } = await params;
    const intlayerKey = "page-asses";
    const content = getIntlayer(intlayerKey, locale);

    const layoutParams: InnerLayoutType = {
      intlayerKey,
      locale,
      publishDate: "2023-04-17T12:00",
      lastUpdateDate: "2024-12-17T21:55",
      displayHomePageLink: true
    }

    return (  
        <InnerLayout params={layoutParams}>
          <>
          <Info sections={content.sections} />
          <GoogleFormLink language="en" />
          <GalleryLayout albums={[{title:`${content.gallery.title}`, photos: asses}]}/>
          </>
        </InnerLayout>
    );
}

export default Page;