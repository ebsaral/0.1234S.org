import {InnerLayout, Info} from "@/components";
import { InnerLayout as InnerLayoutType } from "@/types";
import { NextPageIntlayer } from "next-intlayer";
import { useIntlayer } from "next-intlayer/server";

const Page: NextPageIntlayer = async ({ params }) => {
    const { locale } = await params;
    const content = useIntlayer("page-hazzeti-emin", locale);

    const layoutParams: InnerLayoutType = {
      locale,
      image: {
        src: "/images/hazzeti-emin/logo.jpeg",
        alt:"Hazzeti Emin (HAV)"
      },
      isSoon: true,
      title: content.title.value,
      subtitle: content.subtitle.value,
      //lastUpdateDate: "2024-12-12T07:21",
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

    
    return <InnerLayout params={layoutParams}>
      <div className="flex flex-wrap gap-6 items-center justify-center w-screen">
        <Info params={infoParams} />
      </div>
    </InnerLayout>;
}

export default Page;