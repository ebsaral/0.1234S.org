import { OutLink } from "@/components/links"
import { useIntlayer } from "next-intlayer/server";

export default function GoogleFormLink ({language}: {language?: "tr" | "en"}) {
    const content = useIntlayer("page-shared")
    
    let lang = null;
    if(language) {
        if(language === "tr") {
            lang = content.onlyInTurkish.value
        }
        else if(language === "en"){
            lang = content.onlyInEnglish.value
        }
        
    }
    return <OutLink link="https://docs.google.com/forms/d/e/1FAIpQLSdR1gQqgHTYFHm1HUYZ1_LT1Cr3DdABnrJIwBWTN-QiIM99QQ/viewform?ref=saral.me" text={content.viewGoogleForm.value + (lang ? `  (${lang})`: '')} />
}