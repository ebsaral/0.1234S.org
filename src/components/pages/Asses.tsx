import { useTranslations } from "next-intl";
import Image from "next/image"
import HomePageLink from "@/components/links/HomePageLink";
import GoogleFormLink from "../links/GoogleFormLink";
import PublishDate from "../dates/PublishDate";
import LastUpdate from "../dates/LastUpdate";


export default function Asses() {
    const t = useTranslations("Pages.Asses");
    
    return (
        <main className="flex flex-col gap-8 row-start-2 items-center">
          <Image
            className="rounded-3xl"
            src="/images/asses/main.jpg"
            alt="Barberini Faun statue"
            width={350}
            height={350}
            priority
          />
          <HomePageLink />
          <div className="row-start-3 flex gap-6 text-4xl text-center font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
            {t("title")}
          </div>
          <div className="flex flex-row text-center text-lg ml-6 mr-6">
            {t("subtitle")}
          </div>
          <GoogleFormLink language="en" />
          <div className="row-start-3 flex-row space-y-2 gap-6 text-sm text-justify p-5 font-[family-name:var(--font-geist-mono)] whitespace-pre-line max-w-4xl">
            <div className="flex flex-col gap-6">
          
              <div className="flex flex-col gap-6 sm:flex-row [&:not(:first-child)]:mt-10 sm:[&:not(:first-child)]:mt-2">
                <div className="sm:basis-1/3 font-bold text-2xl sm:text-right text-left">{t("info.purpose.title")}</div>
                <div className="sm:basis-2/3 col-span-2">{t("info.purpose.text")}</div>  
              </div>

              <div className="flex flex-col gap-6 sm:flex-row [&:not(:first-child)]:mt-10 sm:[&:not(:first-child)]:mt-2">
                <div className="sm:basis-1/3 font-bold text-2xl sm:text-right text-left">{t("info.description.title")}</div>
                <div className="sm:basis-2/3 col-span-2">{t("info.description.text")}</div>  
              </div>

              <div className="flex flex-col gap-6 sm:flex-row [&:not(:first-child)]:mt-10 sm:[&:not(:first-child)]:mt-2">
                <div className="sm:basis-1/3 font-bold text-2xl sm:text-right text-left">{t("info.result.title")}</div>
                <div className="sm:basis-2/3 col-span-2">{t("info.result.text")}</div>  
              </div>
            </div>
          </div>
          <div className="flex flex-col text-sm gap-2 mb-5">
            <PublishDate date={new Date("2023-04-17T12:00")} />
            <LastUpdate date={new Date("2024-12-17T14:13")} />
          </div>
        </main>
    )
}