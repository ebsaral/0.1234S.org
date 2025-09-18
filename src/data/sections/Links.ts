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
        link: "https://www.dev.to/ebsaral",
        image: {
            src: "/images/dev-logo.png",
            alt: "Dev.to logo",
            width: 33
        },
        translationPaths: {
            title: "Links.DevTo",
        },
        titleStyle: "text-sm"
    },
    {
        link: "https://stackoverflow.com/users/1437254",
        image: {
            src: "/images/stackoverflow-logo.png",
            alt: "Stackoverflow logo",
            width: 33
        },
        translationPaths: {
            title: "Links.Stackoverflow",
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
