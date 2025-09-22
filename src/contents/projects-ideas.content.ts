import { t, type Dictionary } from "intlayer";
import { ContentProjects } from "./types";

const pageContent = {
  key: "projects-ideas",
  content: {
    title: t({
      en: "some ideas",
      tr: "bazı fikirlerim"
    }),
    items: [
      {
        image: {
          src: "/images/hazzeti-emin/logo.jpeg",
          alt: "Hazzeti Emin (HAV)"
        },
        title: t({
          en: "Hazzeti Emin (HAV)",
          tr: "Hazzeti Emin (HAV)"
        }),
        text: t({
          en: "Situation comedy\nin Turkish. (Audio)",
          tr: "Durum komedisi. (Ses)"
        }),
        href: "/hazzeti-emin"
      },
      {
        image: {
          src: "/images/asses-logo.jpg",
          alt: "Asses of Glyptothek",
        },
        title: t({
          en: "Asses of Glyptothek",
          tr: "Asses of Glyptothek"
        }),
        text: t({
          en: "Another perspective\non museum touring.",
          tr: "Müze gezisine dair\nbir bakış açısı."
        }),
        href: "/asses"
      }
    ]
  },
} satisfies Dictionary<ContentProjects>;

export default pageContent;