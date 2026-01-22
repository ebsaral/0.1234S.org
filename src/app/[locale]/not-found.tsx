import { getIntlayer } from 'intlayer';

export default function NotFoundPage() {
  const content = getIntlayer('page');
  return <h1>{content.notFound}</h1>;
}
