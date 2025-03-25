import { SectionItem, SectionWithItems } from "@/components/layout/types"

const LinksItems: SectionItem[] = [
    {
        link: "https://www.github.com/ebsaral",
        image: {
            src: "/images/github-logo.png",
            alt: "GitHub logo",
            width: 33
        },
        translationPaths: {
            title: "Links.Github",
        },
        titleStyle: "text-sm"
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
        },
        titleStyle: "text-sm"
    },
    {
        link: "https://www.medium.com/@ebsaral",
        image: {
            src: "/images/medium-logo.png",
            alt: "Medium logo",
            width: 33
        },
        translationPaths: {
            title: "Links.Medium",
        },
        titleStyle: "text-sm"
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
        },
        titleStyle: "text-sm"
    }
]

export const LinksSection: SectionWithItems = {
    translationPaths: {
        title: "Links.title"
    },
    items: LinksItems,
    minCol: 2,
    maxCol: 4,
    id: "links",
    displayTitle: true
}
