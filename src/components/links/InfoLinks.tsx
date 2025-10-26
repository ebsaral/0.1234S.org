import { useIntlayer } from "next-intlayer/server";
import { FaRegFilePdf } from "react-icons/fa";


export default function InfoLinks({className}: {className?: string}) {
    const content = useIntlayer("page-home")
    const cvLink = content.links.cv.link.value;

    return (
        <div className={`flex gap-6 flex-wrap items-center justify-center ${className}`}>
        {cvLink !== "" && <a
          className="flex items-center gap-2 underline underline-offset-4 hover:no-underline"
          href={cvLink}
        >
          <FaRegFilePdf />
          {content.links.cv.label}
        </a>}
      </div>
    )
}