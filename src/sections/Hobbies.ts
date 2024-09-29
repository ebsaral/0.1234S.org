import { SectionItemType } from "@/components/SectionItem";
import { SectionWithItemsType } from "@/components/SectionWithItems";

const HobbiesItems: SectionItemType[] = [
    {
        link: "https://www.saral.blog",
        image: {
            src: "/images/eminbugrasaral-blog-logo.png",
            alt: "Emin Bugra Saral blog logo"
        },
        translationPaths: {
            title: "Hobbies.Blog.title",
            text: "Hobbies.Blog.text"
        }
    },
    {
        link: "https://www.soundcloud.com/ebsaral",
        image: {
            src: "/images/soundcloud-logo.png",
            alt: "SoundCloud logo"
        },
        translationPaths: {
            title: "Hobbies.SoundCloud.title",
            text: "Hobbies.SoundCloud.text"
        }
    },
    {
        link: "https://www.deviantart.com/eminbugrasaral",
        image: {
            src: "/images/deviantart-logo.png",
            alt: "DeviantArt logo"
        },
        translationPaths: {
            title: "Hobbies.DeviantArt.title",
            text: "Hobbies.DeviantArt.text"
        }
    },
    {
        link: "https://www.flickr.com/photos/eminbugrasaral",
        image: {
            src: "/images/flickr-logo.png",
            alt: "Flickr logo"
        },
        translationPaths: {
            title: "Hobbies.Flickr.title",
            text: "Hobbies.Flickr.text"
        }
    },
    {
        link: "https://www.youtube.com/@eminbugrasaral",
        image: {
            src: "/images/youtube-logo.png",
            alt: "YouTube logo"
        },
        translationPaths: {
            title: "Hobbies.YouTube.title",
            text: "Hobbies.YouTube.text"
        }
    },
    {
        link: "https://www.vimeo.com/rahmetli",
        image: {
            src: "/images/vimeo-logo.png",
            alt: "Vimeo logo"
        },
        translationPaths: {
            title: "Hobbies.Vimeo.title",
            text: "Hobbies.Vimeo.text"
        }
    },
    {
        link: "https://www.medium.com/@ebsaral",
        image: {
            src: "/images/medium-logo.png",
            alt: "Medium logo"
        },
        translationPaths: {
            title: "Hobbies.Medium.title",
            text: "Hobbies.Medium.text"
        }
    },
]

export const HobbiesSection: SectionWithItemsType = {
    translationPaths: {
        title: "Hobbies.title"
    },
    items: HobbiesItems
}