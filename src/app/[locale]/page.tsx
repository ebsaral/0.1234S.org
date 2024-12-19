
import { useTranslations } from "next-intl";
import {getTranslations} from 'next-intl/server';
import HomeInfoSection from "@/components/layout/HomeInfoSection";
import InnerLayout from "@/components/layout/InnerLayout";
import SectionWithItems from "@/components/layout/SectionWithItems";
import GitHubLink from "@/components/links/GitHubLink";
import Soundcloud from "@/components/Soundcloud";
import { LinksSection } from "@/data/sections/Links";
import { ProjectsSection } from "@/data/sections/Projects";
import { SoonSection } from "@/data/sections/Soon";
import { InnerLayoutInterface, SectionWithItemsType } from "@/components/layout/types";
import { SoundcloudInterface } from "@/components/types";

const Sections: SectionWithItemsType[] = [
  ProjectsSection,
  SoonSection,
  LinksSection
]

export async function generateMetadata({params}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Pages.Home.Metadata'});
  return {
    title: t('title'),
    description: t("description"),
    openGraph: {
      images: [
        {
          url:"/images/emin-bugra-saral-100.jpg"
        }
      ]
    }
  };
}

export default function Home() {
  const t = useTranslations("Pages.Home");
  const params: InnerLayoutInterface = {
    image: {
      src: "/images/logo.png", 
      alt:"Emin Bugra Saral"
    }, 
    title: t("title"),
    subtitle: t("subtitle"),
    lastUpdateDate: "2024-12-19T14:55",
    displayInfoLinks: true
  }
  
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
  return <InnerLayout params={params}>
    <>
          <hr className="page-break"></hr>
          <HomeInfoSection />
          <hr className="page-break"></hr>
          <div className="page-section">
            {Sections.map((section, i) => <SectionWithItems key={`sectionWithItems_${i}`} translationPaths={section.translationPaths} items={section.items} minCol={section.minCol} maxCol={section.maxCol} />)}      
          </div>
          <Soundcloud src={soundcloud.src} info={soundcloud.info} />
          <GitHubLink />
          </>
      </InnerLayout>;
}
