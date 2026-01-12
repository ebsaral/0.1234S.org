import { t, type Dictionary } from "intlayer";
import { ContentGallery } from "./types";

const pageContent = {
  key: "page-gallery",
  content: {
    image: {
      src: "/images/gallery-logo.png",
      alt: "Emin Buğra Saral, 2023."
    },
    title: t({
      en: "Gallery",
      tr: "Galerisi"
    }),
    description: t({
      en: "The gallery section where I share my randomly scattered drawings, paintings, doodles and graphics.",
      tr: "Rastgele savrulan çizimlerimi, resimlerimi, karalamalarımı ve grafiklerimi paylaştığım galeri bölümü."
    }),
    subtitle: t({
      en: "The gallery section where I share my randomly scattered drawings, paintings, doodles and graphics.",
      tr: "Rastgele savrulan çizimlerimi, resimlerimi, karalamalarımı ve grafiklerimi paylaştığım galeri bölümü."
    }),
    preview: t({
      en: "Doodles, drawings,\npaintings and graphics.",
      tr: "Karalamalar, çizimler,\nresimler ve grafikler."
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
    graphics: t({
      en: "Graphics",
      tr: "Grafiks"
    })
  },
} satisfies Dictionary<ContentGallery>;

export default pageContent;