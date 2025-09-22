import { t, type Dictionary } from "intlayer";
import { ContentAsses } from "./types";



const pageContent = {
  key: "page-asses",
  content: {
    image: {
      src: "/images/asses-logo.jpg",
      alt: "image 1",
    },
    title: t({
      en: "Asses of Glyptothek",
      tr: "Asses of Glyptothek"
    }),
    description: t({
      en: "Asses of Glyptothek museum tour and a short creative document.",
      tr: "Glyptothek müzesi turu ve kısa bir yaratıcı doküman."
    }),
    subtitle: t({
      en: "To reflect a different perspective on a museum touring, I created a short document to display the details and collect opinions.",
      tr: "Müze gezisine eğlenceli bir bakış açısı getirmek amacıyla, detayları yansıtan ve görüşleri toplayan kısa bir doküman hazırladım."
    }),
    preview: t({
      en: "Another perspective\non museum touring.",
      tr: "Müze gezisine dair\nbir bakış açısı."
    }),
    href: "/asses",
    sections: [
      {
        title: t({
          en: "purpose",
          tr: "amaç"
        }),
        text: t({
          en: "Word plays & art critic.\nCombining details in different environments.\nFunny thinking.",
          tr: "Kelime oyunları ve sanat eleştirisi.\nFarklı ortamlardaki detayları birleştirme.\nKomik düşünme."
        })
      },
      {
        title: t({
          en: "description",
          tr: "tanım"
        }),
        text: t({
          en: "I realized that people only remember the faces of the statues. They usually take the photos of the front side, or just the face. They always forget about the back side, or the butt. This bothers me a bit. Imagine that you are spending hours on perfecting the curves of an ass and nobody remembers how it looks like. Such a disappointment from an artist's side.\n\nWhile I was having a regular museum tour that I found via Meetup.com, I decided to collect stories under different photos of the statues and museum visitors. Different combinations of lightnings, statue positions, statue situations, visitors' locations and carefully chosen word combinations created an interesting collection. It became more interesting when I discussed my funnywise comments on the sculptures with other visitors.",
          tr: "İnsanların heykellerin sadece yüzlerini hatırladığını fark ettim. Genellikle ön tarafın veya sadece yüzün fotoğraflarını çekiyorlar. Arka tarafı veya popo kısmını her zaman unutuyorlar. Bu beni biraz rahatsız ediyor. Bir kıçın kıvrımlarını mükemmelleştirmek için saatler harcadığınızı ve kimsenin nasıl göründüğünü hatırlamadığını düşünün. Bir sanatçı açısından ne büyük bir hayal kırıklığı.\n\nMeetup.com üzerinden bulduğum düzenli bir müze turu yaparken, heykellerin ve müze ziyaretçilerinin farklı fotoğraflarının altında hikayeler toplamaya karar verdim. Farklı ışıklandırma kombinasyonları, heykel pozisyonları, heykel durumları, ziyaretçilerin konumları ve dikkatlice seçilmiş kelime kombinasyonları ilginç bir koleksiyon oluşturdu. Heykeller hakkındaki komik yorumlarımı diğer ziyaretçilerle tartıştığımda daha da ilginç hale geldi."
        })
      },
      {
        title: t({
          en: "result",
          tr: "sonuç"
        }),
        text: t({
          en: "I wish to continue this project by guiding different museum / art tours with my creative story-telling approach. I believe museum / gallery tours could be more fun and interesting, especially for people who enjoy experiencing different perspectives.\n\n Being mostly spontaneous with commentaries could create unique gallery visits, like a live theatre with existing art collections. Exploring hidden or visible details can make anyone to broaden their perspectives; enjoy their lives and visits deeper.",
          tr: "Yaratıcı hikaye anlatma yaklaşımımla farklı müze/sanat turlarına rehberlik ederek bu projeyi sürdürmek istiyorum. Müze/galeri turlarının daha eğlenceli ve ilgi çekici olabileceğine inanıyorum, özellikle farklı bakış açılarını deneyimlemekten hoşlanan kişiler için.\n\n Çoğunlukla yorumlarla spontane olmak, mevcut sanat koleksiyonlarına sahip canlı bir tiyatro gibi benzersiz galeri ziyaretleri yaratabilir. Gizli veya görünür ayrıntıları keşfetmek, herkesin bakış açılarını genişletebilir; hayatlarından ve ziyaretlerinden daha derin bir şekilde keyif almasını sağlayabilir."
        })
      }
    ],
    gallery: {
      title: t({
        en: "Sequential photos taken in the museum",
        tr: "Müzede çekilen sıralı fotoğraflar"
      })
    },
  },
} satisfies Dictionary<ContentAsses>;

export default pageContent;