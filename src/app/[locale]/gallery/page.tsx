
import Image from "next/image"
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

import { GalleryLayout, InnerLayout, Soundcloud } from "@/components";
import { doodles, drawings, getRandomSoundcloud } from "@/data";
import { InnerLayout as InnerLayoutType, PAGES } from "@/types";


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
      src: "/images/gallery/eminbugrasaral-gallery-main.jpg",
      alt: "Emin Bugra Saral"
    }, 
    title: t("title"),
    subtitle: t("subtitle"),
    lastUpdateDate: "2024-12-14T13:29",
    displayHomePageLink: true
  }

  const soundcloud = getRandomSoundcloud(PAGES.Gallery)

  return <InnerLayout params={params}>
    <>
    <GalleryLayout albums={albums} />
    <div className="page-section">
      <Image
        className="rounded-3xl"
        src="/images/eminbugrasaral-2024.jpg"
        alt="Emin Bugra Saral 2024"
        width={350}
        height={350}
        priority
      />
    </div>

  <Soundcloud src={soundcloud.src} info={soundcloud.info} />
    </>
  </InnerLayout>;
}