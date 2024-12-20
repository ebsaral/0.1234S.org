import { randomIndex } from "@/utils";
import common from "@/data/sound/common"
import tr from "@/data/sound/tr"
import en from "@/data/sound/en"
import { Soundcloud, SoundcloudWithMeta} from "@/types";

type Indexes = {
    tr: number[],
    en: number[]
}

const displayedIndexes: Indexes = {
    tr: [],
    en: []
}

let prevIndex = -1;
let currentLocale: string | undefined;

function resetDefaults() {
    prevIndex = - 1
    currentLocale = undefined
    displayedIndexes["tr"] = []
    displayedIndexes["en"] = []
} 

function getRandomIndex(locale: string, songs: Soundcloud[]): number { 
    let targetArr = displayedIndexes[locale as keyof Indexes];
    let index = randomIndex(songs);

    while(prevIndex == index) {
        index = randomIndex(songs);
    }

    if(targetArr.indexOf(index) == -1){
        // Index is new
        targetArr.push(index)
    }
    else {
        // Index exists
        if(targetArr.length == songs.length){
            displayedIndexes[locale as keyof Indexes] = []
            targetArr = displayedIndexes[locale as keyof Indexes]
        }
        index = getRandomIndex(locale, songs)
    }

    prevIndex = index;
    return index
}

export function getRandomSoundcloud(locale: string): SoundcloudWithMeta{
    if(locale !== currentLocale) {
        resetDefaults();
        currentLocale = locale;
    }
    
    const songs: Soundcloud[] = [...common];
    
    if(locale == "tr") {
        songs.push(...tr)
    }
    else {
        songs.push(...en)
    }

    const i = getRandomIndex(locale, songs)
    const total = songs.length
    const remaining = displayedIndexes[locale as keyof Indexes].length
    console.log(displayedIndexes)
    
    return {
        soundcloud: songs[i],
        meta: {
            total,
            remaining
        }
    }
}