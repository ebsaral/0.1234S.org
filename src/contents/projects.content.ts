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
          en: "Logical Spirituality",
          tr: "Mantıksal Maneviyat"
        }),
        text: t({
          en: "Expanding Spirituality\nwith Nature's Logic.",
          tr: "Doğanın Mantığıyla\nManeviyatı Derinleştirmek."
        }),
        href: t({
          en: "https://www.1234S.org/spirituality",
          tr: "https://www.1234S.org/maneviyat"
        }),
        spin: true
      },
      {
        image: {
          src: "/images/gallery-logo.png",
          alt: "Drawing"
        },
        title: t({
          en: "Drawing Gallery",
          tr: "Çizim Galerisi"
        }),
        text: t({
          en: "Doodles, drawings\nand paintings.",
          tr: "Karalamalar, çizimler\nve resimler."
        }),
        href: "/gallery",
      }
    ]
  },
} satisfies Dictionary<ContentProjects>;

export default pageContent;