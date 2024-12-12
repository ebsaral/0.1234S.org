import { useTranslations } from "next-intl";
import Image from "next/image"
import LastUpdate from "@/components/LastUpdate";
import HomePageLink from "./HomePageLink";


export default function HazzetiEmin() {
    const t = useTranslations();
    const lastUpdateDate = new Date("2024-12-12T07:21");
    
    return <div className="w-auto mr-3 ml-3">
    <div className="flex-col flex gap-6 mt-2 flex-wrap items-center justify-center text-center w-auto m-auto mb-10">
      <HomePageLink />  
      <Image
        className="rounded-3xl"
        src="/images/hazzeti-emin-logo.jpeg"
        alt="Hazzeti Emin (HAV)"
        width={450}
        height={450}
        priority
      />
      
      <div className="flex flex-col gap-10 items-center justify-center">
          <h1 className="text-2xl mt-2 font-bold">{t("Soon.title")}</h1>
          <p className="text-center text-lg font-bold">{t("Projects.HazzetiEmin.title")}</p>
          <p>{t("Soon.HazzetiEmin")}</p>
      </div>
    </div>
    

    <div className="text-center mt-10 mb-5 text-sm"><LastUpdate date={lastUpdateDate} isDivine={true} /></div>
    <div className="row-start-4 flex flex-wrap items-center justify-center">
      <iframe
        width="100%"
        height={166}
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308359738&color=%23474136&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
    </div>
    
  </div>  
}