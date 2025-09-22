import { t, type Dictionary } from "intlayer";
import { ContentHazzetiEmin } from "./types";

const pageContent = {
  key: "page-hazzeti-emin",
  content: {
    image: {
      src: "/images/hazzeti-emin/logo.jpeg",
      alt: "image 3"
    },
    title: t({
      en: "Hazzeti Emin (HAV)",
      tr: "Hazzeti Emin (HAV)"
    }),
    description: t({
      en: "A comedy podcast series where various topics are discussed with different characters. (In Turkish)",
      tr: "Çeşitli konuların farklı karakterler üzerinden mizah yoluyla ele alandığı bir podcast serisi."
    }),
    subtitle: t({
      en: "it'll be published in audio format, only in Turkish.",
      tr: "ses formatında yayınlanmak üzere"
    }),
    preview: t({
      en: "Situation comedy\nin Turkish. (Audio)",
      tr: "Durum komedisi. (Ses)"
    }),
    href: "/hazzeti-emin",
    sections: [
      {
        title: t({
          en: "purpose",
          tr: "amaç"
        }),
        text: t({
          en: "To interpret various characters in a humorous language by connecting them around the subjects of spirituality, science, social life and technology. To blend local speaking styles (dialects) and make people think while making them laugh.\nIt will be published only in Turkish.",
          tr: "Çeşitli karakterleri maneviyat, bilim, sosyal yaşam ve teknoloji konuları etrafında bağlayarak espiritüel bir dille yorumlamak.\nYöresel konuşma tarzlarını (lehçeleri) harmanlamak ve güldürürken düşündürmek."
        })
      },
      {
        title: t({
          en: "description",
          tr: "tanım"
        }),
        text: t({
          en: "I am trying to create a modern scholar character who is still in the thinking phase. It will be a voice-driven character so that he can try new things with his own audience, talk about the unspoken and make criticisms that cannot be made. I will try to discuss very different topics by connecting them, from the theory of evolution to neighborly relations. It can have a different style of narration and touch on disturbing topics delicately. I hope to make you laugh while thinking by giving quick and intelligent answers to the curious questions of different characters. I have no doubt that there will be room for slang. :)",
          tr: "Hâlâ düşünce aşamasında olan modern bir alîm karakteri yaratmaya çalışıyorum. Kendi dinleyicisi ile yeni bir şeyler denemesi, konuşulmayanları konuşması ve yapılamayan eleştirileri yapması için ses odaklı bir karakter olacak. Evrim teorisinden, komşuluk ilişkilerine kadar çok farklı konuları birbirlerine bağlayarak tartışmaya çalışacağım. Değişik bir anlatım tarzına sahip olabilir ve rahatsız edici konulara incelikle değinebilir. Farklı karakterlerin meraklı sorularına kıvrak ve zeki cevaplar vererek düşünürken güldürmeyi umuyorum. Argoya yer verileceğinden şüphem yok. :)"
        })
      },
      {
        title: t({
          en: "result",
          tr: "sonuç"
        }),
        text: t({
          en: "After publishing a few episodes in a dark comedy podcast format (only audio), I hope to develop the Hazzeti Emin character on different platforms. As I add new episodes, I want to create animations for the developing character over time. Even if the number of listeners is not high, I will continue in audio format, just as 'notes to myself'.",
          tr: "Kara Mizah Podcast'i formatında (sadece ses) birkaç bölüm yayınladıktan sonra Hazzeti Emin karakterini farklı platformlarda geliştirmeyi umuyorum. Yeni bölümler ekledikçe gelişen karaktere zamanla animasyon yaratmayı istiyorum. Dinleyici sayısı yüksek olmazsa bile, sadece 'kendime notlar' şeklinde ses formatında devam ettireceğim."
        })
      }
    ]
  },
} satisfies Dictionary<ContentHazzetiEmin>;

export default pageContent;