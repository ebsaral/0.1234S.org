import { SectionItemType } from "@/components/SectionItem";
import { SectionWithItemsType } from "@/components/SectionWithItems";

const LinksItems: SectionItemType[] = [
    {
        link: "https://www.linkedin.com/in/eminbugrasaral",
        image: {
            src: "/images/linkedin-logo.png",
            alt: "LinkedIn logo",
            width: 33
        },
        translationPaths: {
            title: "Links.LinkedIn",
        }
    },
   
    {
        link: "https://www.deviantart.com/eminbugrasaral",
        image: {
            src: "/images/deviantart-logo.png",
            alt: "DeviantArt logo",
            width: 33
        },
        translationPaths: {
            title: "Links.DeviantArt",
        }
    },
    {
        link: "https://www.soundcloud.com/ebsaral",
        image: {
            src: "/images/soundcloud-logo.png",
            alt: "SoundCloud logo",
            width: 33
        },
        translationPaths: {
            title: "Links.SoundCloud",
        }
    },
    {
        link: "https://www.vimeo.com/rahmetli",
        image: {
            src: "/images/vimeo-logo.png",
            alt: "Vimeo logo",
            width: 33
        },
        translationPaths: {
            title: "Links.Vimeo",
        }
    },
    {
        link: "https://www.github.com/ebsaral",
        image: {
            src: "/images/github-logo.png",
            alt: "GitHub logo",
            width: 33
        },
        translationPaths: {
            title: "Links.Github",
        }
    },
    {
        link: "https://www.dev.to/ebsaral",
        image: {
            src: "/images/devto-logo.png",
            alt: "Dev.to logo",
            width: 33
        },
        translationPaths: {
            title: "Links.DevTo",
        }
    },
    {
        link: "https://stackoverflow.com/users/1437254/emin-bugra-saral?tab=profile",
        image: {
            src: "/images/stackoverflow-logo.png",
            alt: "Stackoverflow logo",
            width: 33
        },
        translationPaths: {
            title: "Links.Stackoverflow",
        }
    },
    {
        link: "https://fetlife.com/users/16201534",
        image: {
            src: "/images/fetlife-logo.png",
            alt: "FetLife logo",
            width: 33
        },
        translationPaths: {
            title: "Links.FetLife",
        }
    },
]

export const LinksSection: SectionWithItemsType = {
    translationPaths: {
        title: "Links.title"
    },
    items: LinksItems,
    minCol: 2,
    maxCol: 4,
}