import { SectionItem, SectionWithItems } from "@/components/layout/types"

const SoonItems : SectionItem[] = [
    {
        link: "Pages.Home.Projects.HazzetiEmin.link",
        image: {
            src: "/images/hazzeti-emin/logo-small.jpeg",
            alt: "Hazzeti Emin (H.A.V.)",
            width: 120
        },
        translationPaths: {
            title: "Pages.Home.Projects.HazzetiEmin.title",
            text: "Pages.Home.Projects.HazzetiEmin.text",
        },
        titleStyle: "gradient-gray text-lg",
        displayLink: true
    },
    {
        link: "Pages.Home.Projects.Asses.link",
        image: {
            src: "/images/asses-logo-small.png",
            alt: "Asses of Glyptothek",
            width: 120
        },
        translationPaths: {
            title: "Pages.Home.Projects.Asses.title",
            text: "Pages.Home.Projects.Asses.text",
        },
        titleStyle: "gradient-gray text-lg",
        displayLink: true
    }
]

export const SoonSection: SectionWithItems = {
    translationPaths: {
        title: "General.soon"
    },
    items: SoonItems,
    minCol: 1,
    maxCol: 2,
    id: "soon",
    displayTitle: true
}