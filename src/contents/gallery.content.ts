import { t, type Dictionary } from "intlayer";
import { ContentGallery } from "./types";

const pageContent = {
  key: "page-gallery",
  content: {
    image: {
      src: "/images/gallery/eminbugrasaral-gallery-main.jpg",
      alt: "image 2"
    },
    title: t({
      en: "Drawing Gallery",
      tr: "Çizim Galerisi"
    }),
    description: t({
      en: "The gallery section where I share my randomly scattered drawings, paintings and doodles.",
      tr: "Rastgele savrulan çizimlerimi, resimlerimi ve karalamalarımı paylaştığım galeri bölümü."
    }),
    subtitle: t({
      en: "The gallery section where I share my randomly scattered drawings, paintings and doodles.",
      tr: "Rastgele savrulan çizimlerimi, resimlerimi ve karalamalarımı paylaştığım galeri bölümü."
    }),
    preview: t({
      en: "Doodles, drawings\nand paintings.",
      tr: "Karalamalar, çizimler\nve resimler."
    }),
    href: "/gallery",
    doodles: t({
      en: "Doodles",
      tr: "Karalamalar"
    }),
    drawings: t({
      en: "Paintings & Drawings",
      tr: "Resimler & Çizimler"
    }),
  },
} satisfies Dictionary<ContentGallery>;

export default pageContent;