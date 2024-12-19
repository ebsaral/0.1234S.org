
import Layout from "@/components/layout/Layout";
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params}: {
  params: {locale: string};
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
  return <Layout />;
}
