import { useTranslations } from "next-intl"
import { FaRegFilePdf } from "react-icons/fa";


export default function InfoLinks({className}: {className?: string}) {
    const t = useTranslations("Links")
    const cvLink = t("cvLink")
    const politicalCvLink = t("politicalCvLink")
    if (cvLink == "" && politicalCvLink == "") {
      return <></>
    }
    return (
        <div className={`flex gap-6 flex-wrap items-center justify-center ${className}`}>
        {cvLink !== "" && <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={t("cvLink")}
        >
          <FaRegFilePdf />
          {t("cvName")}
        </a>}
        {politicalCvLink !== "" && <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={t("politicalCvLink")}
        >
          <FaRegFilePdf />
          {t("politicalCvName")}
        </a>}
      </div>
    )
}