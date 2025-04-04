import { useTranslations } from "next-intl"
import { FaRegFilePdf } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";



export default function InfoLinks({className}: {className?: string}) {
    const t = useTranslations("Links")
    return (
        <div className={`flex gap-6 flex-wrap items-center justify-center ${className}`}>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={t("cvLink")}
        >
          <FaRegFilePdf />
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