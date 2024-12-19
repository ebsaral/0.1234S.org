import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import GoogleFormLink from "@/components/links/GoogleFormLink";
import InnerLayout, { InnerLayoutInterface } from "@/components/layout/InnerLayout";
import Info from "@/components/layout/Info";
import asses from "@/data/gallery/asses"
import GalleryLayout from "@/components/layout/GalleryLayout";
import Soundcloud, {SoundcloudInterface} from "@/components/Soundcloud";


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
    const params: InnerLayoutInterface = {
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

    const soundcloud: SoundcloudInterface = {
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1961423639&color=%23474136&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      info: {
        artist: {
          title: "Lukas",
          url: "https://soundcloud.com/user-430651406"
        },
        song: {
          title: "I Like it a Lot",
          url: "https://soundcloud.com/user-430651406/i-like-it-a-lot"
        }
      }
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
          <Soundcloud src={soundcloud.src} info={soundcloud.info} />
          </>
        </InnerLayout>
    );
}