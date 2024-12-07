import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"

export default function HomePageLink() {
    const t = useTranslations();
    const locale = useLocale();

    return <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/"
        locale={locale}
    >
        <Image
        aria-hidden
        src="https://nextjs.org/icons/window.svg"
        alt="File icon"
        width={16}
        height={16}
        />
        {t("Link.home")}
    </Link>
}