import Link from "next/link";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { InnerLayout } from "@/components";
import { InnerLayout as InnerLayoutType } from "@/types";

export async function generateMetadata({params}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "Pages.Files"});
 
  return {
    title: t("title"),
    description: t("title")
  };
}

export default function Page() {
  const t = useTranslations("Pages.Files");
  const params: InnerLayoutType = {
    title: t("title"),
    subtitle: t("subtitle"),
    publishDate: "2023-04-17T12:00",
    lastUpdateDate: "2024-12-29T13:24",
    displayHomePageLink: true
  }

  return <InnerLayout params={params}>
    <>
      <div className="flex flex-col divide-y divide-slate-700 border-1 border-white">
          <div className="grid grid-cols-3 gap-6 p-6">
              <div>{t("file_cv.filename")}</div>
              <div>{t("file_cv.type")}</div>
              <div>{t("Links.link")}</div>
          </div>
          <div className="grid grid-cols-3 gap-6 p-6">
              <div>cv/english</div>
              <div>pdf</div>
              <div><Link className="underline underline-offset-2" href="/files/cv/english.pdf" target="_blank">/files/cv/english.pdf</Link></div>
          </div>
          <div className="grid grid-cols-3 gap-6 p-6">
              <div>cv/english</div>
              <div>docx</div>
              <div><Link className="underline underline-offset-2" href="/files/cv/english.docx" target="_blank">/files/cv/english.docx</Link></div>
          </div>
              <div className="grid grid-cols-3 gap-6 p-6">
              <div>cv/politics</div>
              <div>docx</div>
              <div><Link className="underline underline-offset-2" href="/files/cv/politics.pdf" target="_blank">/files/cv/politics.pdf</Link></div>
          </div>
      </div>
    </>
    </InnerLayout>;
}