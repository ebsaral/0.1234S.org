import { Locales, t, type Dictionary } from "intlayer";
import { ContentHome } from "./types";

const pageContent = {
  key: "page-home",
  content: {
    image: {
      src: "/images/logo.png",
      alt: "Emin Bugra Saral, 2023."
    },
    title: t({
      en: "Emin Buğra Saral",
      tr: "Emin Buğra Saral"
    }),
    subtitle: t({
      en: "Simplicity within a certain complexity.",
      tr: "Belirli bir karmaşanın içindeki sadelik."
    }),
    description: t({
      en: "A funnywise human with\n engineering, feeling and artistic skills.",
      tr: "Mühendislik, hissetme ve sanatsal\n becerileri olan eğlendeli biri."
    }),
    seperators: [
      t({
        en: "───── ∞ ─────",
        tr: "───── ∞ ─────"
      })
    ],
    links: {
      cv: {
        label: t({
          en: "Resume (CV)",
          tr: "Öz Geçmiş (CV)"
        }),
        link: t({
          en: "files/cv/english.pdf",
          tr: "files/cv/turkish.pdf"
        })
      }
    },
    flags: {
      [Locales.ENGLISH]: '🇺🇸',
      [Locales.TURKISH]: '🇹🇷',
    }
  },
} satisfies Dictionary<ContentHome>;

export default pageContent;