import { GalleryLayout, InnerLayout } from "@/components";
import { doodles, drawings } from "@/data";
import { InnerLayout as InnerLayoutType } from "@/types";
import { NextPageIntlayer } from "next-intlayer";
import { useIntlayer } from "next-intlayer/server";


const Page: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;
  const content = useIntlayer("page-gallery", locale);
    
  const albums = [
    {
      title: content.doodles.value,
      photos: doodles
    },
    {
      title: content.drawings.value,
      photos: drawings
    }
  ]

  const layoutParams: InnerLayoutType = {
    locale,
    title: content.title.value,
    subtitle: content.subtitle.value,
    displayHomePageLink: true,
    image: {
      src: "/images/gallery/eminbugrasaral-gallery-main.jpg",
      alt: "Emin Bugra Saral, 2023."
    }, 
  }


  return <InnerLayout params={layoutParams}>
    <GalleryLayout albums={albums} />
  </InnerLayout>;
}

export default Page;