
import {SocialIcon, SocialIconProps} from "react-social-icons";

export default function LinkSection({id}: {id: string}) {
    
    const iconProps: SocialIconProps[] = [
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/eminbugrasaral"
        },
        {
            label: "Instagram",
            url: "https://www.instagram.com/eminbugrasaral"
        },
        {
            label: "X",
            url: "https://www.x.com/eminbugrasaral"
        },
        {
            label: "Medium",
            url: "https://www.medium.com/@ebsaral"
        },
        {
            label: "GitHub",
            url: "https://www.github.com/ebsaral"
        },
        {
            label: "DEV",
            url: "https://www.dev.to/ebsaral"
        },
        {
            label: "Stackoverflow",
            url: "https://stackoverflow.com/users/1437254"
        },
        {
            label: "YouTube",
            url: "https://www.youtube.com/@eminbugrasaral"
        },
        {
            label: "Flickr",
            url: "http://flickr.com/people/eminbugrasaral/"
        },
        {
            label: "DeviantArt",
            url: "https://www.deviantart.com/eminbugrasaral"
        }
    ]

    const contactProps = [
        {
            url: "mailto:eminbugrasaral@me.com"
        },
        {
            label: "WhatsApp",
            url: "https://wa.me/905322580093"
        },
        {
            label: "Telegram",
            url: "https://t.me/ebsaral"
        }
    ]

    return <div id={id} className="page-section w-full mx-0 px-0">
        <hr className="page-break-bold"></hr>
        <div className={`flex flex-row flex-wrap justify-center items-center gap-6`}>
            {iconProps.map((props, index) => <SocialIcon key={index} target="_blank" className="opacity-80	hover:opacity-100 hover:p-[1]" {...props} />)}
        </div>
        <hr className="page-break"></hr>
        <div className={`flex flex-row flex-wrap justify-center items-center gap-6`}>
            {contactProps.map((props, index) => <SocialIcon key={index} target="_blank" className="opacity-80	hover:opacity-100 hover:p-[1]" {...props} />)}
        </div>
        
    </div>
}