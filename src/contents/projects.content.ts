import { nest, t, type Dictionary } from "intlayer";
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
          en: "Expanding Spirituality\nwith Logic in Nature.",
          tr: "Doğadaki Mantıkla\nManeviyatı Derinleştirmek."
        }),
        href: "https://www.1234s.org"
      },
      {
        image: {
          src: nest("page-gallery", "image.src"),
          alt: nest("page-gallery", "image.alt")
        },
        title: nest("page-gallery", "title"),
        text: nest("page-gallery", "preview"),
        href: nest("page-gallery", "href")
      },
      {
        image: {
          src: "/images/touch-sensei-logo.png",
          alt: "Touch Sensei logo"
        },
        title: t({
          en: "Touch Sensei",
          tr: "Touch Sensei"
        }),
        text: t({
          en: "A simple mobile game.\nTry it now. (Only in iOS)",
          tr: "Basit bir mobil oyun.\nŞimdi deneyin. (Sadece iOS)"
        }),
        href: "https://touch-sensei-web.vercel.app"
      }
    ]
  },
} satisfies Dictionary<ContentProjects>;

export default pageContent;