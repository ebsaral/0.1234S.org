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
            title: "SocialMedia.LinkedIn.title",
            text: "SocialMedia.LinkedIn.text"
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
            title: "Hobbies.DeviantArt.title",
            text: "Hobbies.DeviantArt.text"
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
            title: "Hobbies.SoundCloud.title",
            text: "Hobbies.SoundCloud.text"
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
            title: "Hobbies.Vimeo.title",
            text: "Hobbies.Vimeo.text"
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
            title: "Career.Github.title",
            text: "Career.Github.text"
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
            title: "Career.DevTo.title",
            text: "Career.DevTo.text"
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
            title: "Career.Stackoverflow.title",
            text: "Career.Stackoverflow.text"
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
            title: "SocialMedia.FetLife.title",
            text: "SocialMedia.FetLife.text"
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