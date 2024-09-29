import Image from "next/image";
import {Link} from '@/i18n/routing';
import { useTranslations, useFormatter } from "next-intl";
import SectionWithItems, { SectionWithItemsType } from "./SectionWithItems";
import { CareerSection } from "@/sections/Career";
import { ProjectsSection } from "@/sections/Projects";
import { SocialMediaSection } from "@/sections/SocialMedia";
import { HobbiesSection } from "@/sections/Hobbies";

export type LayoutParams = {
    locale: string
}

const Sections: SectionWithItemsType[] = [
  ProjectsSection,
  HobbiesSection,
  CareerSection,
  SocialMediaSection
]

export default function Layout({locale}: LayoutParams) {
    const t = useTranslations();
    const format = useFormatter();

    return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen w-full pb-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
          />
          <Link
            className={`flex items-center gap-2 hover:underline hover:underline-offset-4` + `${locale === 'tr' && '  font-bold'}`}
            href="/"
            locale="tr"
          >
            Türkçe
          </Link>
          {" | "}
          <Link
            className={`flex items-center gap-2 hover:underline hover:underline-offset-4` + `${locale === 'en' && '  font-bold'}`}
            href="/"
            locale="en"
          >
            English
          </Link>
        </div>
        <Image
          className="rounded-3xl"
          src="/images/logo.png"
          alt="Emin Bugra Saral"
          width={400}
          height={400}
          priority
        />
        <div className="row-start-3 flex gap-6 text-4xl text-center font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
          {t("Metadata.name")}
        </div>
        <div className="row-start-3 flex gap-6 text-2xl text-center font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
          {t('Info.title')}
        </div>
        <div className="row-start-3 flex gap-6 text-sm text-justify pl-5 pr-5 font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
          {t('Info.text')}
        </div>
        <div className="flex flex-col gap-8 row-start-2 items-justify pl-5 pr-5">
          {Sections.map((section, i) => <SectionWithItems key={i} translationPaths={section.translationPaths} items={section.items} />)}      
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
      </footer>
      <div className="row-start-4 flex flex-wrap items-center justify-center">{t("Text.LastUpdate")}: {format.dateTime(new Date("2024-09-28"))}</div>
    </div>
    );
}