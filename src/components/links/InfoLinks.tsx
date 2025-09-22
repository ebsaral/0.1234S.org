import { Locales } from "intlayer";
import { useIntlayer, useLocale } from "next-intlayer/server";
import { FaRegFilePdf } from "react-icons/fa";


export default function InfoLinks({className}: {className?: string}) {
    const {locale} = useLocale() 
    const content = useIntlayer("page-home")
    const cvLink = content.links.cv.link.value;
    const politicalCvLink = content.links.politics.link.value;

    if (cvLink == "" && politicalCvLink == "" && locale == Locales.TURKISH) {
      return <p className={className + " whitespace-pre-line text-center text-sm"}><i>{"Öz Geçmiş bilgilerine sitenin 'English' sürümünden ulaşabilirsiniz.\nÇeviriler henüz hazır değil."}</i></p>
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