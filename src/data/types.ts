import { SoundcloudInterface } from "@/components/types";

export enum PAGES  {
    Home = "1",
    Gallery = "2",
    Asses = "3",
    HazzetiEmin = "4",
}

export type RandomSoundcloud = {
    [key in PAGES] : SoundcloudInterface[]
}