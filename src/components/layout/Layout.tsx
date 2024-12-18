import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionWithItems, { SectionWithItemsType } from "./SectionWithItems";
import LastUpdate from "@/components/dates/LastUpdate";
import LanguageSelection from "@/components/layout/LanguageSelection";
import { ProjectsSection } from "@/utils/sections/Projects";
import { SoonSection } from "@/utils/sections/Soon";
import { LinksSection } from "@/utils/sections/Links";
import GitHubLink from "@/components/links/GitHubLink";
import Soundcloud, { SoundcloudInterface } from "../Soundcloud";
import HomeInfoSection from "./HomeInfoSection";

const Sections: SectionWithItemsType[] = [
  ProjectsSection,
  SoonSection,
  LinksSection
]

export default function Layout() {
    const t = useTranslations();
    const lastUpdateDate = new Date("2024-12-17T22:57");

    const soundcloud: SoundcloudInterface = {
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/148439599&color=%23474136&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      info: {
        artist: {
          title: "fattish",
          url: "https://soundcloud.com/fattish"
        },
        song: {
          title: "Ferdi Özbeğen - Koca Dünya (edit)",
          url: "https://soundcloud.com/fattish/ferdi-ozbegen-koca-dunya-fattish-edit"
        }
      }
    }

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
        <HomeInfoSection />
        <hr className="w-full	h-px my-8 bg-gray-400 border-0 dark:bg-gray-700"></hr>
        <div className="flex flex-col items-stretch justify-stretch gap-6 pl-5 pr-5">
          {Sections.map((section, i) => <SectionWithItems key={`sectionWithItems_${i}`} translationPaths={section.translationPaths} items={section.items} minCol={section.minCol} maxCol={section.maxCol} />)}      
        </div>
        <div className="flex gap-6 pl-5 pr-5 flex-wrap items-center justify-center text-xs text-center font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
          {t("Pages.Home.Apology.text")}
        </div>
        <Soundcloud src={soundcloud.src} info={soundcloud.info} />
        <LastUpdate date={lastUpdateDate} />
        <GitHubLink />
      </main>
    </div>
    );
}