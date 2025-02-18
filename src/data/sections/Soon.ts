import { SectionItem, SectionWithItems } from "@/components/layout/types"

const SoonItems : SectionItem[] = [
    {
        link: "Pages.Home.Projects.HazzetiEmin.link",
        image: {
            src: "/images/hazzeti-emin-logo.jpeg",
            alt: "Hazzeti Emin (H.A.V.)",
            width: 120
        },
        translationPaths: {
            title: "Pages.Home.Projects.HazzetiEmin.title",
            text: "Pages.Home.Projects.HazzetiEmin.text",
        },
        titleStyle: "gradient-gray text-lg"
    },
    {
        link: "https://cb.saral.me",
        image: {
            src: "/images/ebs-wall.png",
            alt: "EBS - Breaking a wall",
            width: 120
        },
        translationPaths: {
            title: "Pages.Home.Projects.CB.title",
            text: "Pages.Home.Projects.CB.text"
        },
        titleStyle: "gradient-gray text-lg"
    },
    
]

export const SoonSection: SectionWithItems = {
    translationPaths: {
        title: "General.soon"
    },
    items: SoonItems,
    minCol: 1,
    maxCol: 3,
    id: "soon"
}