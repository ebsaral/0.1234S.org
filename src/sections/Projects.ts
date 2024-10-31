import { SectionItemType } from "@/components/SectionItem";
import { SectionWithItemsType } from "@/components/SectionWithItems";

const ProjectsItems : SectionItemType[] = [
    {
        link: "https://touch-sensei.saral.me",
        image: {
            src: "/images/touch-sensei-logo.png",
            alt: "Touch Sensei Logo"
        },
        translationPaths: {
            title: "Projects.TouchSensei.title",
            text: "Projects.TouchSensei.text"
        }
    },
    {
        link: "https://www.linkedin.com/company/ebs-life-solutions",
        image: {
            src: "/images/ebs-life-solutions-logo.png",
            alt: "EBS Life Solutions Logo"
        },
        translationPaths: {
            title: "Projects.EBSLifeSolutions.title",
            text: "Projects.EBSLifeSolutions.text"
        }
    },
    {
        link: "https://www.saral.blog",
        image: {
            src: "/images/eminbugrasaral-blog-logo.png",
            alt: "Emin Bugra Saral blog logo"
        },
        translationPaths: {
            title: "Projects.Blog.title",
            text: "Projects.Blog.text"
        }
    }
]

export const ProjectsSection: SectionWithItemsType = {
    translationPaths: {
        title: "Projects.title"
    },
    items: ProjectsItems
}