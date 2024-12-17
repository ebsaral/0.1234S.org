import { useTranslations } from "next-intl";
import GoogleFormLink from "../../links/GoogleFormLink";
import InnerLayout from "../InnerLayout";
import Info from "../Info";
import asses from "@/utils/gallery/asses"
import GalleryLayout from "../GalleryLayout";

export default function Asses() {
    const t = useTranslations("Pages.Asses");
    const params = {
      image: {
        src: "/images/asses-logo.jpg", 
        alt:"Barberini Faun statue"
      }, 
      title: t("title"),
      subtitle: t("subtitle"),
      publishDate: "2023-04-17T12:00",
      lastUpdateDate: "2024-12-17T20:55"
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
          <GoogleFormLink language="en" />
          <Info params={infoParams} />
          <GalleryLayout albums={[{title:`${t("gallery_title")}`, photos: asses}]}/>
          </>
        </InnerLayout>
    )
}