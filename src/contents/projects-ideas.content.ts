import { nest, t, type Dictionary } from "intlayer";
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
          src: nest("page-hazzeti-emin", "image.src"),
          alt: nest("page-hazzeti-emin", "image.alt"),
        },
        title: nest("page-hazzeti-emin", "title"),
        text: nest("page-hazzeti-emin", "preview"),
        href: nest("page-hazzeti-emin", "href")
      },
      {
        image: {
          src: nest("page-asses", "image.src"),
          alt: nest("page-asses", "image.alt")
        },
        title: nest("page-asses", "title"),
        text: nest("page-asses", "preview"),
        href: nest("page-asses", "href")
      }
    ]
  },
} satisfies Dictionary<ContentProjects>;

export default pageContent;