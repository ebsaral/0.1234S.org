import { SectionItemType } from "@/components/SectionItem";
import { SectionWithItemsType } from "@/components/SectionWithItems";

const HobbiesItems: SectionItemType[] = [
    {
        link: "Hobbies.Gallery.link",
        image: {
            src: "/images/gallery-logo.png",
            alt: "Gallery logo",
            width: 80
        },
        translationPaths: {
            title: "Hobbies.Gallery.title",
            text: "Hobbies.Gallery.text"
        }
    },
    {
        link: "https://www.deviantart.com/eminbugrasaral",
        image: {
            src: "/images/deviantart-logo.png",
            alt: "DeviantArt logo",
            width: 80
        },
        translationPaths: {
            title: "Hobbies.DeviantArt.title",
            text: "Hobbies.DeviantArt.text"
        }
    },
    {
        link: "https://www.soundcloud.com/ebsaral",
        image: {
            src: "/images/soundcloud-logo.png",
            alt: "SoundCloud logo",
            width: 80
        },
        translationPaths: {
            title: "Hobbies.SoundCloud.title",
            text: "Hobbies.SoundCloud.text"
        }
    },
    {
        link: "https://www.vimeo.com/rahmetli",
        image: {
            src: "/images/vimeo-logo.png",
            alt: "Vimeo logo",
            width: 80
        },
        translationPaths: {
            title: "Hobbies.Vimeo.title",
            text: "Hobbies.Vimeo.text"
        }
    }
]

export const HobbiesSection: SectionWithItemsType = {
    translationPaths: {
        title: "Hobbies.title"
    },
    items: HobbiesItems,
    minCol: 2,
    maxCol: 4,
}