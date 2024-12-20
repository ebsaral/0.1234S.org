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

const sambaOleg: Soundcloud = {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/50820025&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    info: {
        artist: {
            title: "Hanna & Lore",
            url: "https://soundcloud.com/hanne-lore/hanne-lore-samba-oleg-snippet"
        },
        song: {
            title: "Samba Oleg",
            url: "https://soundcloud.com/hanne-lore/hanne-lore-samba-oleg-snippet"
        }
    }
}

const loveMe: Soundcloud = {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/31042078&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    info: {
        artist: {
            title: "Marek Hemmann",
            url: "https://soundcloud.com/marekhemmann"
        },
        song: {
            title: "Niconé & Sascha Braemer - Love Me (Remix)",
            url: "https://soundcloud.com/marekhemmann/nicon-sascha-braemer-love-me"
        }
    }
}

const hiLife: Soundcloud = {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/68032302&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    info: {
        artist: {
            title: "Karim Korashy",
            url: "https://soundcloud.com/karimkorashy"
        },
        song: {
            title: "Monkey Safari - Hi Life",
            url: "https://soundcloud.com/karimkorashy/monkey-safari-hi-life"
        }
    }
}

const songs = [
    iLikeItALot,
    ubahn,
    sambaOleg,
    hiLife,
    loveMe,
]

export default songs;