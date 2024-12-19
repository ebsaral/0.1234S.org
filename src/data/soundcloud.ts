import { SoundcloudInterface } from "@/components/types";
import { PAGES, RandomSoundcloud } from "./types";
import { random } from "@/utils";

// Page: Home
const kocaDunya: SoundcloudInterface = {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/148439599&color=%23474136&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
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

// Page: Asses
const iLikeItALot: SoundcloudInterface = {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1961423639&color=%23474136&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    info: {
    artist: {
        title: "Lukas",
        url: "https://soundcloud.com/user-430651406"
    },
    song: {
        title: "I Like it a Lot",
        url: "https://soundcloud.com/user-430651406/i-like-it-a-lot"
    }
    }
}

// Page: Gallery
const dokunmayinCokFenayam: SoundcloudInterface = {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/416735193&color=%23474136&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    info: {
      artist: {
        title: "Sergerdan__",
        url: "https://soundcloud.com/sergerdan62"
      },
      song: {
        title: "Azer Bülbül & Damian Marley - Dokunmayın Çok Fenayam",
        url: "https://soundcloud.com/sergerdan62/azer-bulbul-damian-marley-dokunmayin-cok-fenayam"
      }
    }
}

// Page: Hazzeti Emin
const birYangininKulunu: SoundcloudInterface = {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308359738&color=%23474136&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
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


const SONGS: RandomSoundcloud = {
    [PAGES.Home]: [
        kocaDunya
    ] ,
    [PAGES.Gallery]: [
        dokunmayinCokFenayam
    ],
    [PAGES.Asses]: [
        iLikeItALot
    ],
    [PAGES.HazzetiEmin]: [
        birYangininKulunu
    ]
}


export function getRandomSoundcloud(page: PAGES): SoundcloudInterface {
    const songs = SONGS[page];
    return random(songs)
}