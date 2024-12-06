
import Layout from "@/components/Layout";
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {
  params: {locale: string};
}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('title'),
    description: t("description"),
    opengraph: {
      images: [
        {
          url:"https://saral.me/images/emin-bugra-saral-100.jpg"
        }
      ]
    }
  };
}

export default function Home() {
  return <Layout />;
}
