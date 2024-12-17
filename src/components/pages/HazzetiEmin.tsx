import { useTranslations } from "next-intl";
import InnerLayout from "./InnerLayout";


export default function HazzetiEmin() {
    const t = useTranslations();
    const params = {
      image: {
        src: "/images/hazzeti-emin-logo.jpeg",
        alt:"Hazzeti Emin (HAV)"},
        isSoon: true,
        title:t("Pages.HazzetiEmin.title"),
        subtitle: t("Pages.HazzetiEmin.subtitle"),
        lastUpdateDate: "2024-12-12T07:21"
      }

    return (
    <InnerLayout params={params}>
      <div className="row-start-4 flex flex-wrap items-center justify-center w-screen">
        <iframe
          width="100%"
          height={166}
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308359738&color=%23474136&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        />
      </div>
    </InnerLayout>
    )
}