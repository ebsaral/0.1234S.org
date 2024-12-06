import Gallery from "@/components/Gallery"
import LanguageSelection from "@/components/LanguageSelection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({params: {locale}}: {
  params: {locale: string};
}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t("Gallery.title"),
    description: t("Gallery.description"),
    keywords: t("Gallery.keywords"),
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