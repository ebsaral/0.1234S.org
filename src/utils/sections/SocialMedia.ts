import { SectionItemType } from "@/components/SectionItem";
import { SectionWithItemsType } from "@/components/SectionWithItems";

const SocialMediaItems: SectionItemType[] = [
    {
        link: "https://www.linkedin.com/in/eminbugrasaral",
        image: {
            src: "/images/linkedin-logo.png",
            alt: "LinkedIn logo",
            width: 60
        },
        translationPaths: {
            title: "SocialMedia.LinkedIn.title",
            text: "SocialMedia.LinkedIn.text"
        }
    },
    {
        link: "https://fetlife.com/users/16201534",
        image: {
            src: "/images/fetlife-logo.png",
            alt: "FetLife logo",
            width: 60
        },
        translationPaths: {
            title: "SocialMedia.FetLife.title",
            text: "SocialMedia.FetLife.text"
        }
    }
]

export const SocialMediaSection: SectionWithItemsType = {
    translationPaths: {
        title: "SocialMedia.title"
    },
    items: SocialMediaItems,
    minCol: 2,
    maxCol: 2,
}