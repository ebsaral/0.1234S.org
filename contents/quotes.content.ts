import { t, type Dictionary } from 'intlayer';
import { ContentQuotes } from './types';

const pageContent = {
  key: 'page-quotes',
  content: {
    image: {
      src: '',
      alt: '',
    },
    title: t({
      en: 'Quotes',
      tr: 'Özlü Sözler',
    }),
    description: t({
      en: 'Quoting myself for a better self.',
      tr: 'Daha iyi bir ben için kendimden özlü sözler.',
    }),
    subtitle: t({
      en: 'Quoting myself for a better self.',
      tr: 'Daha iyi bir ben için kendimden özlü sözler.',
    }),
    preview: t({
      en: 'Quotes',
      tr: 'Özlü Sözler',
    }),
    href: '/quotes',
    items: [
      {
        title: t({
          en: 'Every being is an art piece getting shaped in all minds.',
          tr: 'Her canlı tüm zihinlerde şekil alan bir sanat eseridir.',
        }),
      },
      {
        title: t({
          en: "Any power is temporary if it isn't for good.",
          tr: 'İyilik için kullanılmayan her güç geçicidir.',
        }),
      },
      {
        title: t({
          en: 'Human is not complete without fully understanding their animality.',
          tr: 'İçindeki hayvanlığı tam anlamıyla anlayamayan bir insan yarım kalmış demektir.',
        }),
      },
      {
        title: t({
          en: 'Democracy is only an illusion if kingdoms are distributed over different companies.',
          tr: 'Eğer krallıklar farklı şirketlere dağıtılmışsa, demokrasi sadece bir yanılgıdır.',
        }),
      },
      {
        title: t({
          en: 'The best revenge is to remain a better person than any enemy. Then there is neither revenge nor enemy.',
          tr: 'En iyi intikam, her düşmandan daha iyi bir insan kalabilmektir. O vakit ne intikam kalır ne düşman.',
        }),
      },
      {
        title: t({
          en: 'Respect must be built around freedom, not slavery.',
          tr: 'Saygı, köleliğin değil, özgürlüğün etrafında inşa edilmelidir.',
        }),
      },
      {
        title: t({
          en: 'Freedom is the sacred right of every nation faithful to justice.',
          tr: "Hakkıdır, Hakk'a tapan her milletin istiklal.",
        }),
      },
      {
        title: t({
          en: 'May my existence be a gift within the universe.',
          tr: 'Varlığım evrenin varlığına armağan olsun.',
        }),
      },
    ],
  },
} satisfies Dictionary<ContentQuotes>;

export default pageContent;
