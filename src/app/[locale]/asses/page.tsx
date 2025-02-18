import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

import { InnerLayout, Info, GalleryLayout, GoogleFormLink } from "@/components";
import { asses } from "@/data"
import { InnerLayout as InnerLayoutType } from "@/types";


export async function generateMetadata({params}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "Pages.Asses.Metadata"});
 
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      images: [
        {
          url:"/images/asses-logo-small.png"
        }
      ]
    }
  };
}

export default function Page() {
    const t = useTranslations("Pages.Asses");
    const params: InnerLayoutType = {
      image: {
        src: "/images/asses-logo.jpg", 
        alt:"Barberini Faun statue"
      }, 
      title: t("title"),
      subtitle: t("subtitle"),
      publishDate: "2023-04-17T12:00",
      lastUpdateDate: "2024-12-17T21:55",
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
    return (  
        <InnerLayout params={params}>
          <>
          <Info params={infoParams} />
          <GoogleFormLink language="en" />
          <GalleryLayout albums={[{title:`${t("gallery_title")}`, photos: asses}]}/>
          </>
        </InnerLayout>
    );
}