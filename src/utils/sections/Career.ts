import { SectionItemType } from "@/components/SectionItem";
import { SectionWithItemsType } from "@/components/SectionWithItems";

const CareerItems: SectionItemType[] = [
    {
        link: "https://www.github.com/ebsaral",
        image: {
            src: "/images/github-logo.png",
            alt: "GitHub logo",
            width: 60
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
            width: 60
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
            width: 60
        },
        translationPaths: {
            title: "Career.Stackoverflow.title",
            text: "Career.Stackoverflow.text"
        }
    }
]

export const CareerSection: SectionWithItemsType = {
    translationPaths: {
        title: "Career.title"
    },
    items: CareerItems,
    minCol: 3,
    maxCol: 3,
}