import { GalleryLayout, InnerLayout } from "@/components";
import { doodles, drawings, graphics } from "@/data";
import { InnerLayout as InnerLayoutType } from "@/types";
import { getPageMetadata } from "@/utils";
import { getIntlayer } from "intlayer";
import { Metadata } from "next";
import { LocalPromiseParams, NextPageIntlayer } from "next-intlayer";

export const generateMetadata = async ({
  params,
}: LocalPromiseParams): Promise<Metadata> => {
  const { locale } = await params;
  return getPageMetadata({locale, customPageKey: "page-gallery"})
};

const Page: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;
  const intlayerKey = "page-gallery";
  const content = getIntlayer(intlayerKey, locale);

  const albums = [
    {
      title: content.doodles,
      photos: doodles
    },
    {
      title: content.drawings,
      photos: drawings
    },
    {
      title: content.graphics,
      photos: graphics
    }
  ]

  const layoutParams: InnerLayoutType = {
    intlayerKey,
    locale,
    displayHomePageLink: true,
  }

  return <InnerLayout params={layoutParams}>
    <GalleryLayout albums={albums} />
  </InnerLayout>;
}

export default Page;