
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

import { GalleryLayout, InnerLayout } from "@/components";
import { doodles, drawings } from "@/data";
import { InnerLayout as InnerLayoutType } from "@/types";


export async function generateMetadata({params}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "Pages.Gallery.Metadata"});
 
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      images: [
        {
          url:"/images/gallery-logo.png"
        }
      ]
    }
  };
}

export default function Page() {
  const t = useTranslations("Pages.Gallery");
    
  const albums = [
    {
      title: t("doodles"),
      photos: doodles
    },
    {
      title: t("drawings"),
      photos: drawings
    },
    
  ]

  const params: InnerLayoutType = {
    image: {
      src: "/images/logo.png", 
      alt:"Emin Bugra Saral, 2023. Caption: 'Tire(d) a lot'"
    }, 
    title: t("title"),
    subtitle: t("subtitle"),
    displayHomePageLink: true
  }


  return <InnerLayout params={params}>
    <GalleryLayout albums={albums} />
  </InnerLayout>;
}