import { SectionItemType } from "@/components/SectionItem";
import { SectionWithItemsType } from "@/components/SectionWithItems";

const SocialMediaItems: SectionItemType[] = [
    {
        link: "https://fetlife.com/users/16201534",
        image: {
            src: "/images/fetlife-logo.png",
            alt: "FetLife logo"
        },
        translationPaths: {
            title: "SocialMedia.FetLife.title",
            text: "SocialMedia.FetLife.text"
        }
    },
    {
        link: "https://www.x.com/cbsaral",
        image: {
            src: "/images/twitter-logo.png",
            alt: "X (Twitter) logo"
        },
        translationPaths: {
            title: "SocialMedia.Twitter.title",
            text: "SocialMedia.Twitter.text"
        }
    }
]

export const SocialMediaSection: SectionWithItemsType = {
    translationPaths: {
        title: "SocialMedia.title"
    },
    items: SocialMediaItems
}