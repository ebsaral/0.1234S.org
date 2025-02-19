import { useLocale, useTranslations } from "next-intl"

import { Link } from "@/i18n/routing";
import { GrDomain } from "react-icons/gr";

export default function HomePageLink() {
    const t = useTranslations();
    const locale = useLocale();

    return <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/"
        locale={locale}
    >
        <GrDomain />
        {t("General.home")}
    </Link>
}