import { useTranslations } from "next-intl";
import InnerLayout from "../InnerLayout";
import Info from "../Info";
import Soundcloud, { SoundcloudInterface } from "@/components/Soundcloud";


export default function HazzetiEmin() {
    const t = useTranslations("Pages.HazzetiEmin");
    const params = {
      image: {
        src: "/images/hazzeti-emin-logo.jpeg",
        alt:"Hazzeti Emin (HAV)"
      },
      isSoon: true,
      title:t("title"),
      subtitle: t("subtitle"),
      lastUpdateDate: "2024-12-12T07:21"
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

    return (
    <InnerLayout params={params}>
      <div className="row-start-4 flex flex-wrap items-center justify-center w-screen">
        <Info params={infoParams} />
        <Soundcloud src={soundcloud.src} info={soundcloud.info} />
      </div>
    </InnerLayout>
    )
}