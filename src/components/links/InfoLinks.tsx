import { useTranslations } from "next-intl"
import { FaFilePdf } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";


export default function InfoLinks({className}: {className?: string}) {
    const t = useTranslations("Links")
    return (
        <div className={`flex gap-6 flex-wrap items-center justify-center ${className}`}>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={t("cvLink")}
          target="_blank"
        >
          <FaFilePdf />
          {t("cvName")}
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:eminbugrasaral@me.com"
        >
          <MdOutlineEmail />
          {t("contact")}
        </a>
      </div>
    )
}