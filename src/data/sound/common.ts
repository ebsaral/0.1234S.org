import { Soundcloud } from "@/types"

const dokunmayinCokFenayam: Soundcloud = {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/416735193&color=%23474136&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
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

const gonulDagi: Soundcloud = {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/277890911&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    info: {
      artist: {
        title: "Kemal Kaya",
        url: "https://soundcloud.com/kemalkayacamel"
      },
      song: {
        title: "Neşet Ertaş & Akram - Gönül Dağı Musica",
        url: "https://soundcloud.com/kemalkayacamel/gonuldagirump"
      }
    }
}

const songs = [
    dokunmayinCokFenayam,
    gonulDagi
]

export default songs;