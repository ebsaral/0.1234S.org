import Asses from "@/components/layout/pages/Asses";
import LanguageSelection from "@/components/layout/LanguageSelection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({params: {locale}}: {
  params: {locale: string};
}) {
  const t = await getTranslations({locale, namespace: "Pages.Asses.Metadata"});
 
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      images: [
        {
          url:"/images/asses-logo-small.png"
        }
      ]
    }
  };
}

export default function Page() {
    return (  
        <div className="flex flex-col gap-6 items-center font-[family-name:var(--font-geist-sans)]">
        <LanguageSelection className="mt-10" /> 
        <Asses />
        </div>
    );
}