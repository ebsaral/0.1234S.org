import { Soundcloud } from "@/types";

const birYangininKulunu: Soundcloud = {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308359738&color=%23474136&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    info: {
      artist: {
        title: "onurzan",
        url: "https://soundcloud.com/onurzan"
      },
      song: {
        title: "Zeki Müren - Bir Yangının Külünü (edit)",
        url: "https://soundcloud.com/onurzan/zeki-muren-bir-yanginin-kulunuonur-zan-edit"
      }
    }
}

const kocaDunya: Soundcloud = {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/148439599&color=%23474136&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    info: {
      artist: {
        title: "fattish",
        url: "https://soundcloud.com/fattish"
      },
      song: {
        title: "Ferdi Özbeğen - Koca Dünya (edit)",
        url: "https://soundcloud.com/fattish/ferdi-ozbegen-koca-dunya-fattish-edit"
      }
    }
}

const yesOrrayt: Soundcloud = {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/311836457&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    info: {
      artist: {
        title: "Ferhat Hatan",
        url: "https://soundcloud.com/ferhathakan"
      },
      song: {
        title: "Sadri Alışık - Yes Orrayt",
        url: "https://soundcloud.com/ferhathakan/yesorrayt"
      }
    }
}

const anlaGaripHalimden: Soundcloud = {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1259974012&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    info: {
      artist: {
          title: "Dien",
          url: "https://soundcloud.com/iamdien"
      },
      song: {
        title: "Anla Garip Halimden",
        url: "https://soundcloud.com/iamdien/anla-garip-halimden"
      }
    }
}

const isteHendekIsteDeve: Soundcloud = {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/533274735&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    info: {
      artist: {
          title: "Kabus Kerim",
          url: "https://soundcloud.com/karriem"
      },
      song: {
        title: "Baris Manco - Iste Hendek Iste Deve (Edit)",
        url: "https://soundcloud.com/karriem/baris-manco-iste-hendek-iste-deve-kabus-edit"
      }
    }
}

const songs = [
    birYangininKulunu,
    kocaDunya,
    yesOrrayt,
    anlaGaripHalimden,
    isteHendekIsteDeve
]

export default songs;