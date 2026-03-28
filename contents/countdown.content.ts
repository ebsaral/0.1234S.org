import { t, type Dictionary } from 'intlayer';
import { CountdownContent } from './types';

const content = {
  key: 'content-countdown',
  content: {
    title: t({
      en: 'Shutdown',
      tr: 'Kapanış',
    }),
    days: t({
      en: 'Days',
      tr: 'Gün',
    }),
    hours: t({
      en: 'Hours',
      tr: 'Saat',
    }),
    minutes: t({
      en: 'Minutes',
      tr: 'Dakika',
    }),
    seconds: t({
      en: 'Seconds',
      tr: 'Saniye',
    }),
  },
} satisfies Dictionary<CountdownContent>;

export default content;
