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
        text: t({
          en: "We are shaping each other with our thoughts, cultures and actions. In a world where everybody is responsible from each other, it gets easier to understand how we sculpt each other's shapes.",
          tr: 'Düşüncelerimiz, kültürlerimiz ve eylemlerimizle birbirimizi şekillendiriyoruz. Herkesin birbirinden sorumlu olduğu bir dünyada, birbirimizin şeklini nasıl biçimlendirdiğimizi anlamak daha kolay hale geliyor.',
        }),
      },
      {
        title: t({
          en: 'Human must learn their animality before calling themselves human being truly.',
          tr: 'İçindeki hayvanlığı tam anlamıyla öğrenemeyen bir insan yarım kalmış demektir.',
        }),
        text: t({
          en: "It's crucial to understand animality in humans to build a civilization on top of nature's being.",
          tr: 'Doğanın üzerine bir uygarlık inşa edebilmek için insandaki hayvanlığı anlamak çok önemlidir.',
        }),
      },
      {
        title: t({
          en: "Any power is temporary if it isn't used for good.",
          tr: 'İyilik için kullanılmayan her güç geçicidir.',
        }),
        text: t({
          en: "Money, as an example, is a temporary power since it can't buy health.",
          tr: 'Örneğin para, sağlık satın alamadığı için geçici bir güçtür.',
        }),
      },
      {
        title: t({
          en: 'The best revenge is to be a better person than any enemy. Then there is neither revenge nor enemy.',
          tr: 'En iyi intikam, her düşmandan daha iyi bir insan olmaktır. O vakit ne intikam kalır ne düşman.',
        }),
        text: t({
          en: "An enemy is not necessarily a person; it can also be a bad experience. Returning no harm when it's done to you is a good approach to get better. It's harder to do empathy when you feel helpless because you must be patient. You must realize that you are not alone.",
          tr: 'Bir düşman illa bir kişi olmak zorunda değildir; kötü bir deneyim de olabilir. Sana zarar verildiğinde karşılık vermemek, daha iyi olmak için iyi bir yaklaşımdır. Kendini çaresiz hissettiğinde empati yapmak daha zordur çünkü sabırlı olmalısın. Yalnız olmadığını fark etmelisin.',
        }),
      },
      {
        title: t({
          en: 'Your worth is not defined by others in the scale of growing together.',
          tr: 'Paylaştığımız ortak yaşam ölçeğinde, değerini başkaları tanımlayamaz.',
        }),
        text: t({
          en: 'It takes guts to admit failure(s) and learn from them. Being humble enough to learn from mistakes is an essential item for your growth circle.',
          tr: 'Başarısızlıkları kabul edip onlardan ders almak cesaret ister. Hatalardan öğrenebilecek kadar alçakgönüllü olmak, gelişim çemberin için temel bir unsurdur.',
        }),
      },
      {
        title: t({
          en: 'Freedom is the sacred right of (every) nation faithful to justice.',
          tr: "Hakkıdır, Hakk'a tapan (her) milletimin istiklal.",
        }),
        text: t({
          en: "I don't even know when we lost our touch with nature thus each other. Let's focus on future as much as we can.",
          tr: 'Doğayla ve dolayısıyla birbirimizle temasımızı ne zaman kaybettiğimizi bile bilmiyorum. Geleceğe olabildiğince odaklanalım.',
        }),
      },
      {
        title: t({
          en: 'Time only passes to move our responsibility further.',
          tr: 'Zaman sadece sorumluluğumuzu ileriye taşımak için geçer.',
        }),
        text: t({
          en: "The universe's time is frozen at infinity since its beginning. So nature doesn't die but loops in itself. We, mostly humans, have a sense of time because we are mortals under nature's guidance.",
          tr: 'Evrenin zamanı başlangıcından beri sonsuzlukta donmuştur. Yani doğa ölmez, kendi içinde döngüye girer. Biz insanlar ise, çoğunlukla, doğanın rehberliğinde ölümlü olduğumuz için zaman algısına sahibiz.',
        }),
      },
      {
        title: t({
          en: 'Democracy is only an illusion if kingdoms are distributed over different companies.',
          tr: 'Eğer krallıklar farklı şirketlere dağıtılmışsa, demokrasi sadece bir yanılgıdır.',
        }),
        text: t({
          en: 'We heard about revolutions, industrializations and democracy in our common histories. We have never seen their capitals being shared among citizens equally. Democracy has never actually existed so far.',
          tr: 'Ortak tarihlerimizde devrimleri, sanayileşmeyi ve demokrasiyi duyduk. Sermayelerinin vatandaşlar arasında eşit paylaşıldığını hiç görmedik. Demokrasi bugüne kadar aslında hiç var olmadı.',
        }),
      },
      {
        title: t({
          en: "Time becomes more valuable when it's shared.",
          tr: 'Zaman paylaşıldığında daha değerli olur.',
        }),
        text: t({
          en: "At the moment, we value ourselves by selling our time instead of sharing it. This attitude in economy disconnects people from each other and it shortens everyone's lifetime indirectly. Because people unwillingly struggle from roadblocks in current structure. We undirectly kill each other because we don't understand nature's reality deeply.",
          tr: 'Şu anda, zamanı paylaşmak yerine satarak kendimize değer biçiyoruz. Bu ekonomik tutum, insanları birbirinden koparıyor ve dolaylı olarak herkesin ömrünü kısaltıyor. Çünkü insanlar mevcut yapının engelleriyle istemeden mücadele ediyor. Doğanın gerçekliğini derinlemesine anlamadığımız için birbirimizi dolaylı olarak öldürüyoruz.',
        }),
      },
      {
        title: t({
          en: "We don't belong to anyone or anywhere; we just try to get along with this chaotic sphere.",
          tr: 'Aslında hiçbir yere ya da kimseye ait değiliz; bu kaotik küreye uyum sağlamaya çalışıyoruz.',
        }),
        text: t({
          en: 'We must redefine ourselves to find our common path to infinity. Then we can follow bigger problems easier in peace.',
          tr: 'Sonsuzluğa giden ortak yolumuzu bulmak için kendimizi yeniden tanımlamalıyız. O zaman daha büyük sorunların peşinden huzurla gidebiliriz.',
        }),
      },
      {
        title: t({
          en: 'Respect must be built around freedom, not slavery.',
          tr: 'Saygı, köleliğin değil özgürlüğün etrafında inşa edilmelidir.',
        }),
        text: t({
          en: "Our 'so-called wise' ancestors have built our living conditions around slavery. At this time, people's respect is mostly based on slavery. People must realize that they are usually 'obeying' under superficial respect idioms.",
          tr: "'Sözde bilge' atalarımız yaşam koşullarımızı kölelik üzerine kurmuş. Günümüzde insanların saygısı çoğunlukla kölelik temellidir. İnsanlar, genellikle yüzeysel saygı kalıpları altında 'itaat ettiklerini' fark etmelidir.",
        }),
      },
      {
        title: t({
          en: 'May my existence be a gift within the universe.',
          tr: 'Varlığım evrenin varlığına armağan olsun.',
        }),
        text: t({
          en: 'Seeing life being sacred and sharing the universe as a whole is essential for a healthy future for everone.',
          tr: 'Yaşamı kutsal görmek ve evreni bir bütün olarak paylaşmak, herkesin sağlıklı bir geleceği olması için gereklidir.',
        }),
      },
    ],
  },
} satisfies Dictionary<ContentQuotes>;

export default pageContent;
