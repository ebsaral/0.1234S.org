import { SectionItemType } from "@/components/SectionItem";
import { SectionWithItemsType } from "@/components/SectionWithItems";

const ProjectsItems : SectionItemType[] = [
    {
        link: "https://www.linkedin.com/company/ebs-life-solutions",
        image: {
            src: "/images/ebs-life-solutions-animated-logo.gif",
            alt: "EBS Life Solutions Logo",
            width: 120
        },
        translationPaths: {
            title: "Projects.EBSLifeSolutions.title",
            text: "Projects.EBSLifeSolutions.text"
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
    },
    {
        link: "https://cb.saral.me",
        image: {
            src: "/images/emin-bugra-saral-100.jpg",
            alt: "Emin Buğra Saral yüz fotoğrafı",
            width: 120
        },
        translationPaths: {
            title: "Projects.CB.title",
            text: "Projects.CB.text"
        }
    },
    
]

export const ProjectsSection: SectionWithItemsType = {
    translationPaths: {
        title: "Projects.title"
    },
    items: ProjectsItems,
    minCol: 1,
    maxCol: 3,
}