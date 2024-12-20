import { randomIndex } from "@/utils";
import common from "@/data/sound/common"
import tr from "@/data/sound/tr"
import en from "@/data/sound/en"
import { Soundcloud} from "@/types";

type Indexes = {
    tr: number[],
    en: number[]
}

const displayedIndexes: Indexes = {
    tr: [],
    en: []
}

let prevIndex = -1;

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

export function getRandomSoundcloud(locale: string): Soundcloud {
    const songs: Soundcloud[] = [...common];
    
    if(locale == "tr") {
        songs.push(...tr)
    }
    else {
        songs.push(...en)
    }

    const i = getRandomIndex(locale, songs)
    return songs[i]
}