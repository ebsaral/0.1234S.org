import { SectionItemType } from "@/components/SectionItem";
import { SectionWithItemsType } from "@/components/SectionWithItems";

const ProjectsItems : SectionItemType[] = [
    {
        link: "Projects.Gallery.link",
        image: {
            src: "/images/gallery-logo.png",
            alt: "Gallery logo",
            width: 120
        },
        translationPaths: {
            title: "Projects.Gallery.title",
            text: "Projects.Gallery.text"
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
            title: "Projects.TouchSensei.title",
            text: "Projects.TouchSensei.text"
        }
    }
    
]

export const ProjectsSection: SectionWithItemsType = {
    translationPaths: {
        title: "Projects.title"
    },
    items: ProjectsItems,
    minCol: 1,
    maxCol: 2,
}