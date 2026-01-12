import { t, type Dictionary } from "intlayer";
import { ContentProjects } from "./types";

const pageContent = {
  key: "projects",
  content: {
    title: t({
      en: "some projects",
      tr: "bazı projelerim"
    }),
    items: [
      {
        image: {
          src: "/images/logical-spirituality-logo.png",
          alt: "logical spirituality"
        },
        title: t({
          en: "1234 Science & Art Association",
          tr: "1234 Sanat ve İlim Derneği"
        }),
        text: t({
          en: "Interconnectedness, Justice and Health in Nature.",
          tr: "Doğada Bütünlük, Adalet ve Sağlık."
        }),
        href: t({
          en: "https://www.1234S.org",
          tr: "https://www.1234S.org"
        }),
        spin: true
      },
      {
        image: {
          src: "/images/gallery-logo.png",
          alt: "Drawing"
        },
        title: t({
          en: "Gallery",
          tr: "Galeri"
        }),
        text: t({
          en: "Doodles, drawings, paintings and graphics.",
          tr: "Karalamalar, çizimler, resimler ve grafikler."
        }),
        href: "/gallery",
        spin: true
      }
    ]
  },
} satisfies Dictionary<ContentProjects>;

export default pageContent;