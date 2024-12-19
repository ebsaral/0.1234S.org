import HomePageLink from "@/components/links/HomePageLink";
import LanguageSelection from "@/components/layout/LanguageSelection";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({params}: {
  params: {locale: string};
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "Pages.Files"});
 
  return {
    title: t("title"),
    description: t("title")
  };
}

export default function Page() {
    const t = useTranslations();
    return (  
    <div className="flex flex-col gap-6 items-center font-[family-name:var(--font-geist-sans)]">
        <LanguageSelection className="mt-10" />    
        <HomePageLink />    
        <h1 className="text-2xl font-bold">{t("Pages.Files.title")} (2)</h1>
        <div className="flex flex-col divide-y divide-slate-700 border-1 border-white">
            <div className="grid grid-cols-3 gap-6 p-6">
                <div>{t("Pages.Files.file_cv.filename")}</div>
                <div>{t("Pages.Files.file_cv.type")}</div>
                <div>{t("Pages.Files.Links.link")}</div>
            </div>
            <div className="grid grid-cols-3 gap-6 p-6">
                <div>cv/english</div>
                <div>pdf</div>
                <div><Link className="underline underline-offset-2" href="/files/cv/english.pdf" target="_blank">/files/cv/english.pdf</Link></div>
            </div>
            <div className="grid grid-cols-3 gap-6 p-6">
                <div>cv/turkish</div>
                <div>pdf</div>
                <div><Link className="underline underline-offset-2" href="/files/cv/turkish.pdf" target="_blank">/files/cv/turkish.pdf</Link></div>
            </div>
        </div>
    </div>
  );
}