import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionWithItems, { SectionWithItemsType } from "./SectionWithItems";
import LastUpdate from "@/components/LastUpdate";
import LanguageSelection from "@/components/LanguageSelection";
import { ProjectsSection } from "@/utils/sections/Projects";
import { SoonSection } from "@/utils/sections/Soon";
import { LinksSection } from "@/utils/sections/Links";


const Sections: SectionWithItemsType[] = [
  ProjectsSection,
  SoonSection,
  LinksSection
]

export default function Layout() {
    const t = useTranslations();
    const lastUpdateDate = new Date("2024-12-07T14:33");

    return (
    <div className="grid grid-rows-[16px_1fr_20px] items-center gap-6 justify-items-center min-h-screen w-auto pb-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <LanguageSelection />
        <Image
          className="rounded-3xl"
          src="/images/logo.png"
          alt="Emin Bugra Saral"
          width={350}
          height={350}
          priority
        />
        <div className="row-start-3 flex gap-6 text-4xl text-center font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
          {t("Metadata.name")}
        </div>
        <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={t("Link.cvLink")}
            target="_blank"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            {t("Link.cvName")}
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="mailto:eminbugrasaral@me.com"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            {t("Link.contact")}
          </a>
        </div>
        <hr className="w-full	h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"></hr>
        <div className="flex mb-6 text-center text-3xl font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
          {t("Info.title")}
        </div>
        <div className="row-start-3 flex-row space-y-2 gap-6 text-sm text-justify pl-5 pr-5 font-[family-name:var(--font-geist-mono)] whitespace-pre-line max-w-4xl">
          <div className="grid grid-rows sm:grid-cols-3 gap-6">
            <div className="font-bold text-2xl sm:text-right text-left">{t("Info.title1")}</div>
            <div className="col-span-2">{t("Info.text1")}</div>  

            <div className="font-bold text-2xl sm:text-right text-left mt-10 sm:mt-0">{t("Info.title2")}</div>
            <div className="col-span-2">{t("Info.text2")}</div>  

            <div className="font-bold text-2xl sm:text-right text-left mt-10 sm:mt-0">{t("Info.title3")}</div>
            <div className="col-span-2">{t("Info.text3")}</div> 

            <div className="font-bold text-2xl sm:text-right text-left mt-10 sm:mt-0">{t("Info.title4")}</div>
            <div className="col-span-2">{t("Info.text4")}</div> 
            
            <div className="font-bold text-2xl sm:text-right text-left mt-10 sm:mt-0">{t("Info.title5")}</div>
            <div className="col-span-2">{t("Info.text5")}</div> 
            
            <div className="font-bold text-2xl sm:text-right text-left mt-10 sm:mt-0">{t("Info.title6")}</div>
            <div className="col-span-2">{t("Info.text6")}</div> 
            
            <div className="font-bold text-2xl sm:text-right text-left mt-10 sm:mt-0">{t("Info.title7")}</div>
            <div className="col-span-2">{t("Info.text7")}</div> 
          </div>
        </div>
        <hr className="w-full	h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"></hr>
        <div className="flex flex-col gap-6 row-start-2 items-justify pl-5 pr-5">
          {Sections.map((section, i) => <SectionWithItems key={`sectionWithItems_${i}`} translationPaths={section.translationPaths} items={section.items} minCol={section.minCol} maxCol={section.maxCol} />)}      
        </div>
        <hr className="w-full	h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"></hr>
        <div className="flex gap-6 pl-5 pr-5 text-xs text-center justify-center font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line max-w-4xl">
          {t("LegalWarning.title")}<br></br>
          {t("LegalWarning.text")}
        </div>
        <div className="row-start-3 flex gap-6 pl-5 pr-5 flex-wrap items-center justify-center text-xs text-center font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
          {t("Apology.text")}
        </div>
        <div className="row-start-4 flex flex-wrap items-center justify-center"><LastUpdate date={lastUpdateDate} /></div>
      </main>
    </div>
    );
}