'use client';

import { useIntlayer } from "next-intlayer";

export default function Error() {
  const content = useIntlayer('page');
 
  return (
    <div>
      <h1>{content.notFound}</h1>
    </div>
  );
}