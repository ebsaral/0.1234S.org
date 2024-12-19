import Gallery from "@/components/layout/pages/Gallery"
import LanguageSelection from "@/components/layout/LanguageSelection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({params}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "Pages.Gallery.Metadata"});
 
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      images: [
        {
          url:"/images/gallery-logo.png"
        }
      ]
    }
  };
}

export default function Page() {
  return (  
    <div className="flex flex-col gap-6 items-center font-[family-name:var(--font-geist-sans)]">
      <LanguageSelection className="mt-10" />      
      <Gallery />
    </div>
  );
}