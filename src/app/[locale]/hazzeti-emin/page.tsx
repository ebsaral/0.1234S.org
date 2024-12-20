import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

import {InnerLayout, Info, Soundcloud} from "@/components";
import { InnerLayout as InnerLayoutType } from "@/types";

export async function generateMetadata({params}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "Pages.HazzetiEmin.Metadata"});
 
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      images: [
        {
          url:"/images/hazzeti-emin-logo-small.jpeg"
        }
      ]
    }
  };
}

export default function Page() {
    const t = useTranslations("Pages.HazzetiEmin");
    const params: InnerLayoutType = {
      image: {
        src: "/images/hazzeti-emin-logo.jpeg",
        alt:"Hazzeti Emin (HAV)"
      },
      isSoon: true,
      title:t("title"),
      subtitle: t("subtitle"),
      lastUpdateDate: "2024-12-12T07:21",
      displayHomePageLink: true
    }

    const infoParams = {
      purpose: {
        title: t("info.purpose.title"),
        text: t("info.purpose.text"),
      },
      description: {
        title: t("info.description.title"),
        text: t("info.description.text"),
      },
      result: {
        title: t("info.result.title"),
        text: t("info.result.text"),
      }
    }

    
    return <InnerLayout params={params}>
      <div className="flex flex-wrap gap-6 items-center justify-center w-screen">
        <Info params={infoParams} />
        <Soundcloud />
      </div>
    </InnerLayout>;
}