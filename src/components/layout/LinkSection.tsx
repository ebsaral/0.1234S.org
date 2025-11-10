import { getIntlayer } from "intlayer";
import { useLocale } from "next-intlayer/server";
import {SocialIcon } from "react-social-icons";
import { ContentHome } from "@/types";

export default function LinkSection({id}: {id: string}) {
    const {locale} = useLocale();
    const content = getIntlayer("page-home", locale) as ContentHome;

    return <div id={id} className="page-section w-full mx-0 px-0">
        <hr className="page-break-bold"></hr>
        <div className={`flex flex-row flex-wrap justify-center items-center gap-6`}>
            {content.links.work.map((props, index) => <SocialIcon key={index} title={props.label} target="_blank" className="opacity-80	hover:opacity-100 hover:p-[1]" {...props} />)}
        </div>
        <hr className="page-break"></hr>
        <div className={`flex flex-row flex-wrap justify-center items-center gap-6`}>
            {content.links.social.map((props, index) => <SocialIcon key={index} title={props.label} target="_blank" className="opacity-80 hover:opacity-100 hover:p-[1]" {...props} />)}
        </div>
        <hr className="page-break"></hr>
        <div className={`flex flex-row flex-wrap justify-center items-center gap-6`}>
            {content.links.contact.map((props, index) => <SocialIcon key={index} title={props.label} target="_blank" className="opacity-80 hover:opacity-100 hover:p-[1]" {...props} />)}
        </div>
    </div>
}