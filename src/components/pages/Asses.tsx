import { useTranslations } from "next-intl";
import GoogleFormLink from "../links/GoogleFormLink";
import InnerLayout from "./InnerLayout";

export default function Asses() {
    const t = useTranslations("Pages.Asses");
    const params = {
      image: {
        src: "/images/asses/main.jpg", 
        alt:"Barberini Faun statue"
      }, 
      title: t("title"),
      subtitle: t("subtitle"),
      publishDate: "2023-04-17T12:00",
      lastUpdateDate: "2024-12-17T14:13"
    }

    return (
        <InnerLayout params={params}>
          <>
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
          </>
        </InnerLayout>
    )
}