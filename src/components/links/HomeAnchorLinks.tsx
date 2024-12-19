import { useTranslations } from "next-intl"
import { ImArrowDown } from "react-icons/im"

function ArrowMenu({children}: {children: React.ReactNode}) {
    return <div className="flex flex-row items-center"><ImArrowDown className="mr-2"/> {children}</div>
}

export default function HomeAnchorLinks() {
    const t = useTranslations("Pages.Home")
    return (
        <div className="page-section sm:hidden">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <a href="#projects"><div className="anchor-link"><ArrowMenu>{t("shortcuts.projects")}</ArrowMenu></div></a>
                <a href="#soon"><div className="anchor-link"><ArrowMenu>{t("shortcuts.soon")}</ArrowMenu></div></a>
                <a className="" href="#links"><div className="anchor-link"><ArrowMenu>{t("shortcuts.links")}</ArrowMenu></div></a>
            </div>
        </div>
    )
}