
import { useTranslations } from "next-intl";
import { getTranslations } from 'next-intl/server';

import { InnerLayout, SectionWithItems, InfoLinks} from "@/components";
import { LinksSection, ProjectsSection, SoonSection } from "@/data";
import { InnerLayout as InnerLayoutType, SectionWithItems as SectionWithItemsType } from "@/types";

const Sections: SectionWithItemsType[] = [
  LinksSection,
  ProjectsSection,
  SoonSection
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
          url:"/images/eminbugrasaral-2025-spoon.jpg"
        }
      ]
    }
  };
}

export default function Home() {
  const t = useTranslations("Pages.Home");
  const params: InnerLayoutType = {
    image: {
      src: "/images/eminbugrasaral-2025-spoon.jpg",
      alt: "Emin Bugra Saral, 2025."
    }, 
    title: t("title"),
    subtitle: t("subtitle")
  }

  return <InnerLayout params={params}>
    <>
      <InfoLinks />
      <div className="page-section">
        {Sections.map((section, i) => <SectionWithItems key={`sectionWithItems_${i}`} displayTitle={section.displayTitle} translationPaths={section.translationPaths} items={section.items} minCol={section.minCol} maxCol={section.maxCol} id={section.id} />)}      
      </div>
    </>
    </InnerLayout>;
}
