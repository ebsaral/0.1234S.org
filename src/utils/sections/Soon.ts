import { SectionItemType } from "@/components/SectionItem";
import { SectionWithItemsType } from "@/components/SectionWithItems";

const SoonItems : SectionItemType[] = [
    {
        link: "Projects.HazzetiEmin.link",
        image: {
            src: "/images/hazzeti-emin-logo.jpeg",
            alt: "Hazzeti Emin (H.A.V.)",
            width: 120
        },
        translationPaths: {
            title: "Projects.HazzetiEmin.title",
            text: "Projects.HazzetiEmin.text",
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
            title: "Projects.EBSLifeSolutions.title",
            text: "Projects.EBSLifeSolutions.text"
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

export const SoonSection: SectionWithItemsType = {
    translationPaths: {
        title: "Soon.title"
    },
    items: SoonItems,
    minCol: 1,
    maxCol: 2,
}