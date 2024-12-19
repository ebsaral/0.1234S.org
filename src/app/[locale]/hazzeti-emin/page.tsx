import { getTranslations } from "next-intl/server";
import InnerLayout from "@/components/layout/InnerLayout";
import { useTranslations } from "next-intl";
import Soundcloud from "@/components/Soundcloud";
import Info from "@/components/layout/Info";
import { InnerLayoutInterface } from "@/components/layout/types";
import { SoundcloudInterface } from "@/components/types";

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
    const params: InnerLayoutInterface = {
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

    const soundcloud: SoundcloudInterface = {
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308359738&color=%23474136&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      info: {
        artist: {
          title: "onurzan",
          url: "https://soundcloud.com/onurzan"
        },
        song: {
          title: "Zeki Müren - Bir Yangının Külünü (edit)",
          url: "https://soundcloud.com/onurzan/zeki-muren-bir-yanginin-kulunuonur-zan-edit"
        }
      }
    }
    return <InnerLayout params={params}>
      <div className="flex flex-wrap gap-6 items-center justify-center w-screen">
        <Info params={infoParams} />
        <Soundcloud src={soundcloud.src} info={soundcloud.info} />
      </div>
    </InnerLayout>;
}