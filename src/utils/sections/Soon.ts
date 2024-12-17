import { SectionItemType } from "@/components/layout/SectionItem";
import { SectionWithItemsType } from "@/components/layout/SectionWithItems";

const SoonItems : SectionItemType[] = [
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
        }
    },
    {
        link: "https://www.linkedin.com/company/ebs-life-solutions",
        image: {
            src: "/images/ebs-life-solutions-animated-logo.gif",
            alt: "EBS Life Solutions Logo",
            width: 120
        },
        translationPaths: {
            title: "Pages.Home.Projects.EBSLifeSolutions.title",
            text: "Pages.Home.Projects.EBSLifeSolutions.text"
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
            title: "Pages.Home.Projects.CB.title",
            text: "Pages.Home.Projects.CB.text"
        }
    },
    
]

export const SoonSection: SectionWithItemsType = {
    translationPaths: {
        title: "General.soon"
    },
    items: SoonItems,
    minCol: 1,
    maxCol: 3,
}