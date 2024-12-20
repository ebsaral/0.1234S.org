import { Soundcloud } from "@/types";

const iLikeItALot: Soundcloud = {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1961423639&color=%23474136&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
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

const ubahn: Soundcloud = {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/332930776&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    info: {
        artist: {
            title: "Oliver Koletzki",
            url: "https://soundcloud.com/oliverkoletzki"
        },
        song: {
            title: "Ubahn (Feat Axel Bosse)",
            url: "https://soundcloud.com/oliverkoletzki/ubahn-feat-axel-bosse"
        }
    }
}


const songs = [
    iLikeItALot,
    ubahn
]

export default songs;