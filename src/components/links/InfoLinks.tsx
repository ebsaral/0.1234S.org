import Image from "next/image";
import { useTranslations } from "next-intl"

export default function InfoLinks() {
    const t = useTranslations("Links")
    return (
        <div className="flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={t("cvLink")}
          target="_blank"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          {t("cvName")}
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:eminbugrasaral@me.com"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          {t("contact")}
        </a>
      </div>
    )
}