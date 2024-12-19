
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Image from "next/image"
import doodles from "@/data/gallery/doodles"
import drawings from "@/data/gallery/drawings"
import GalleryLayout from "@/components/layout/GalleryLayout";
import InnerLayout from "@/components/layout/InnerLayout";
import Soundcloud from "@/components/Soundcloud";
import { InnerLayoutInterface } from "@/components/layout/types";
import { SoundcloudInterface } from "@/components/types";


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

  const params: InnerLayoutInterface = {
    image: {
      src: "/images/gallery/eminbugrasaral-gallery-main.jpg",
      alt: "Emin Bugra Saral"
    }, 
    title: t("title"),
    subtitle: t("subtitle"),
    lastUpdateDate: "2024-12-14T13:29",
    displayHomePageLink: true
  }

  const soundcloud: SoundcloudInterface = {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/416735193&color=%23474136&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    info: {
      artist: {
        title: "Sergerdan__",
        url: "https://soundcloud.com/sergerdan62"
      },
      song: {
        title: "Azer Bülbül & Damian Marley - Dokunmayın Çok Fenayam",
        url: "https://soundcloud.com/sergerdan62/azer-bulbul-damian-marley-dokunmayin-cok-fenayam"
      }
    }
  }

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