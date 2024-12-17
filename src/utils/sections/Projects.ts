import { SectionItemType } from "@/components/layout/SectionItem";
import { SectionWithItemsType } from "@/components/layout/SectionWithItems";

const ProjectsItems : SectionItemType[] = [
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
        }
    },
    {
        link: "Pages.Home.Projects.Asses.link",
        image: {
            src: "/images/asses-logo-small.png",
            alt: "Asses small logo",
            width: 120
        },
        translationPaths: {
            title: "Pages.Home.Projects.Asses.title",
            text: "Pages.Home.Projects.Asses.text"
        }
    },
    {
        link: "https://touch-sensei.saral.me",
        image: {
            src: "/images/touch-sensei-logo.png",
            alt: "Touch Sensei Logo",
            width: 120
        },
        translationPaths: {
            title: "Pages.Home.Projects.TouchSensei.title",
            text: "Pages.Home.Projects.TouchSensei.text"
        }
    }
    
]

export const ProjectsSection: SectionWithItemsType = {
    translationPaths: {
        title: "Pages.Home.Projects.title"
    },
    items: ProjectsItems,
    minCol: 1,
    maxCol: 2,
}