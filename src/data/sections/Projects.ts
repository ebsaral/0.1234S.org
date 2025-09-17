import { SectionItem, SectionWithItems } from "@/components/layout/types"

const ProjectsItems : SectionItem[] = [
    {
        link: "https://1234s.org",
        image: {
            src: "/images/logical-spirituality-logo.png",
            alt: "Logical Spirituality Logo",
            width: 120
        },
        translationPaths: {
            title: "Pages.Home.Projects.LogicalSpirituality.title",
            text: "Pages.Home.Projects.LogicalSpirituality.text"
        },
        titleStyle: "gradient-blue text-lg"
    },
    {
        link: "Pages.Home.Projects.Gallery.link",
        image: {
            src: "/images/gallery-logo.png",
            alt: "Gallery logo",
            width: 120
        },
        translationPaths: {
            title: "Pages.Home.Projects.Gallery.title",
            text: "Pages.Home.Projects.Gallery.text"
        },
        titleStyle: "gradient-blue text-lg"
    },
    {
        link: "https://touch-sensei-web.vercel.app",
        image: {
            src: "/images/touch-sensei-logo.png",
            alt: "Touch Sensei Logo",
            width: 120
        },
        translationPaths: {
            title: "Pages.Home.Projects.TouchSensei.title",
            text: "Pages.Home.Projects.TouchSensei.text"
        },
        titleStyle: "gradient-blue text-lg"
    }
]

export const ProjectsSection: SectionWithItems = {
    translationPaths: {
        title: "Pages.Home.Projects.title"
    },
    items: ProjectsItems,
    minCol: 1,
    maxCol: 3,
    id: "projects",
    displayTitle: false
}