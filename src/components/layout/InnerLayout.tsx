import { InnerLayout as InnerLayoutType } from '@/components/layout/types';
import { IntlayerServerProvider } from 'next-intlayer/server';
import { IntlayerClientProvider } from 'next-intlayer';
import Main from './Main';

export default function PageInnerLayout({ children, params }: { children: React.ReactNode; params: InnerLayoutType }) {
  return (
    <IntlayerServerProvider locale={params.locale}>
      <IntlayerClientProvider locale={params.locale}>
        <Main params={params}>{children}</Main>
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
}
