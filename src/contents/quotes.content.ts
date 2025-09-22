import { t, type Dictionary } from "intlayer";
import { ContentQuotes } from "./types";

const pageContent = {
  key: "page-quotes",
  content: {
    image: {
      src: "",
      alt: ""
    },
    title: t({
      en: "Quotes",
      tr: "Özlü Sözler"
    }),
    description: t({
      en: "Quoting myself for a better self.",
      tr: "Daha iyi bir ben için kendimden özlü sözler."
    }),
    subtitle: t({
      en: "Quoting myself for a better self.",
      tr: "Daha iyi bir ben için kendimden özlü sözler."
    }),
    preview: t({
      en: "Quotes",
      tr: "Özlü Sözler"
    }),
    href: "/quotes",
    items: [
      {
        title: t({
          en: "someone going to something tosome where",
          tr: "bir birbirilerine birlerei birileri."
        }),
        text: t({
          en: "sadsad asdsadsa dsa dsa",
          tr: "sdad sadsa das das das "
        })
      }
    ]
  },
} satisfies Dictionary<ContentQuotes>;

export default pageContent;