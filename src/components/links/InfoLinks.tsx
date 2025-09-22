import { useIntlayer } from "next-intlayer/server";
import { FaRegFilePdf } from "react-icons/fa";


export default function InfoLinks({className}: {className?: string}) {
    const content = useIntlayer("page-home")
    const cvLink = content.links.cv.link.value;
    const politicalCvLink = content.links.politics.link.value;

    if (cvLink == "" && politicalCvLink == "") {
      return <></>
    }
    return (
        <div className={`flex gap-6 flex-wrap items-center justify-center ${className}`}>
        {cvLink !== "" && <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={cvLink}
        >
          <FaRegFilePdf />
          {content.links.cv.label}
        </a>}
        {politicalCvLink !== "" && <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={politicalCvLink}
        >
          <FaRegFilePdf />
          {content.links.politics.label}
        </a>}
      </div>
    )
}