
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
import { getRandomSoundcloud } from "@/data/soundcloud";
import { PAGES } from "@/data/types";

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
  
  const soundcloud = getRandomSoundcloud(PAGES.Home)

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
