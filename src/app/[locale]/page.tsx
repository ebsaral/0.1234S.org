
import Layout from "@/components/Layout";
import {getTranslations} from 'next-intl/server';
import { unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({params: {locale}}: {
  params: {locale: string};
}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('title'),
    description: t("description")
  };
}

export default function Home({params: {locale}}: {
  params: {locale: string};
}) {
  unstable_setRequestLocale(locale);
  return <Layout locale={locale} />;
}
