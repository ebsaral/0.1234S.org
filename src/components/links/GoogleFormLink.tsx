import { useTranslations } from "next-intl"

import { OutLink } from "@/components/links"

export default function GoogleFormLink ({language}: {language?: "tr" | "en"}) {
    const t = useTranslations("General")
    let lang = null;
    if(language) {
        if(language === "tr") {
            lang = t("only_in_turkish")
        }
        else if(language === "en"){
            lang = t("only_in_english")
        }
        
    }
    return <OutLink link="https://docs.google.com/forms/d/e/1FAIpQLSdR1gQqgHTYFHm1HUYZ1_LT1Cr3DdABnrJIwBWTN-QiIM99QQ/viewform?ref=saral.me" text={t("view_google_form") + (lang ? `  (${lang})`: '')} />
}