
import { useTranslations } from "next-intl";
import { getTranslations } from 'next-intl/server';

import { HomeInfoSection, InnerLayout, SectionWithItems, InfoLinks} from "@/components";
import { LinksSection, ProjectsSection } from "@/data";
import { InnerLayout as InnerLayoutType, SectionWithItems as SectionWithItemsType } from "@/types";

const Sections: SectionWithItemsType[] = [
  LinksSection,
  ProjectsSection,
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
  const params: InnerLayoutType = {
    title: t("title"),
    subtitle: t("subtitle")
  }

  return <InnerLayout params={params}>
    <>
      <InfoLinks />
      <hr className="page-break"></hr>
      <HomeInfoSection />
      <div className="page-section">
        {Sections.map((section, i) => <SectionWithItems key={`sectionWithItems_${i}`} displayTitle={section.displayTitle} translationPaths={section.translationPaths} items={section.items} minCol={section.minCol} maxCol={section.maxCol} id={section.id} />)}      
      </div>
    </>
    </InnerLayout>;
}
