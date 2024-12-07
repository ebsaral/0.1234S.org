import HomePageLink from "@/components/HomePageLink";
import LanguageSelection from "@/components/LanguageSelection";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

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
    const t = useTranslations();
    return (  
    <div className="flex flex-col gap-6 items-center font-[family-name:var(--font-geist-sans)]">
        <LanguageSelection className="mt-10" />    
        <HomePageLink />    
        <h1 className="text-2xl font-bold">{t("Files.title")} (1)</h1>
        <div className="flex flex-col divide-y divide-slate-700 border-1 border-white">
            <div className="grid grid-cols-3 gap-6 p-6">
                <div>{t("Files.file_cv.filename")}</div>
                <div>{t("Files.file_cv.type")}</div>
                <div>{t("Files.Links.link")}</div>
            </div>
            <div className="grid grid-cols-3 gap-6 p-6">
                <div>ebsaral_cv_english</div>
                <div>pdf</div>
                <div><Link className="underline underline-offset-2" href="/files/ebsaral_cv_english.pdf" target="_blank">/files/ebsaral_cv_english.pdf</Link></div>
            </div>
        </div>
    </div>
  );
}