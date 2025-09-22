import { t, type Dictionary } from "intlayer";
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
      tr: "Belirli bir karmaşanın içindeki basitlik."
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
          tr: ""
        })
      },
      politics: {
        label: t({
          en: "Resume for Politics",
          tr: "Politika için Öz Geçmiş"
        }),
        link: t({
          en: "files/cv/politics.pdf",
          tr: ""
        })
      }
    }
  },
} satisfies Dictionary<ContentHome>;

export default pageContent;