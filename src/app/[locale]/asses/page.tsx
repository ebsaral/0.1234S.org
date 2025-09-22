import { InnerLayout, Info, GalleryLayout, GoogleFormLink } from "@/components";
import { asses } from "@/data"
import { InnerLayout as InnerLayoutType } from "@/types";
import { NextPageIntlayer } from "next-intlayer";
import { useIntlayer } from "next-intlayer/server";


const Page: NextPageIntlayer = async ({ params }) => {
    const { locale } = await params;
    const content = useIntlayer("page-asses", locale);

    const layoutParams: InnerLayoutType = {
      locale,
      image: {
        src: content.image.src.value, 
        alt: content.image.alt.value
      }, 
      title: content.title.value,
      subtitle: content.subtitle.value,
      //publishDate: "2023-04-17T12:00",
      //lastUpdateDate: "2024-12-17T21:55",
      displayHomePageLink: true
    }

    const infoParams = {
      purpose: {
        title: content.sections[0].title.value,
        text: content.sections[0].text.value,
      },
      description: {
        title: content.sections[1].title.value,
        text: content.sections[1].text.value,
      },
      result: {
        title: content.sections[2].title.value,
        text: content.sections[2].text.value,
      }
    }
    return (  
        <InnerLayout params={layoutParams}>
          <>
          <Info params={infoParams} />
          <GoogleFormLink language="en" />
          <GalleryLayout albums={[{title:`${content.gallery.title.value}`, photos: asses}]}/>
          </>
        </InnerLayout>
    );
}

export default Page;