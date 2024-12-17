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
    const lastUpdateDate = new Date("2024-12-12T07:21");

    const infoSectionKeys = [
      "education",
      "work_experience",
      "consultancy_solutions",
      "personality_traits",
      "interests",
      "social_causes",
      "places"
    ]

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
          {t("Pages.Home.title")}
        </div>
        <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={t("Links.cvLink")}
            target="_blank"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            {t("Links.cvName")}
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
            {t("Links.contact")}
          </a>
        </div>
        <hr className="w-full	h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"></hr>
        <div className="flex mb-6 text-center text-3xl font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
          {t("Pages.Home.subtitle")}
        </div>
        <div className="row-start-3 flex-row space-y-2 gap-6 text-sm text-justify pl-5 pr-5 font-[family-name:var(--font-geist-mono)] whitespace-pre-line max-w-4xl">
          <div className="flex flex-col gap-6">
            {infoSectionKeys.map((infoKey, i)=>(
              (
                <div key={i} className="flex flex-col gap-6 sm:flex-row [&:not(:first-child)]:mt-10 sm:[&:not(:first-child)]:mt-2">
                  <div className="sm:basis-1/3 font-bold text-2xl sm:text-right text-left">{t(`Pages.Home.${infoKey}.title`)}</div>
                  <div className="sm:basis-2/3 col-span-2">{t(`Pages.Home.${infoKey}.text`)}</div>  
                </div>
              )
            ))}
          </div>
        </div>
        <hr className="w-full	h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"></hr>
        <div className="flex flex-col gap-6 row-start-2 items-justify pl-5 pr-5">
          {Sections.map((section, i) => <SectionWithItems key={`sectionWithItems_${i}`} translationPaths={section.translationPaths} items={section.items} minCol={section.minCol} maxCol={section.maxCol} />)}      
        </div>
        <div className="flex gap-6 pl-5 pr-5 text-xs text-center justify-center font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line max-w-4xl">
          {t("Pages.Home.LegalWarning.title")}<br></br>
          {t("Pages.Home.LegalWarning.text")}
        </div>
        <div className="row-start-3 flex gap-6 pl-5 pr-5 flex-wrap items-center justify-center text-xs text-center font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
          {t("Pages.Home.Apology.text")}
        </div>
        <div className="row-start-4 flex flex-wrap items-center justify-center"><LastUpdate date={lastUpdateDate} /></div>
        <div className="row-start-4 flex flex-wrap items-center justify-center w-screen">
        <iframe
          width="100%"
          height={166}
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/148439599&color=%23474136&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        />
        </div>

        <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100 hover:underline hover:underline-offset-2"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ebsaral/saral.me"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
              />
            </svg>
            <p className="ml-2 h-7">{t("General.github_source")}</p>
          </a>
      </main>
    </div>
    );
}