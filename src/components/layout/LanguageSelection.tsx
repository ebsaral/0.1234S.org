"use client"

import Image from "next/image"
import { useLocale } from "next-intl"
import { usePathname } from "next/navigation"

import { Link } from "@/i18n/routing"

export default function LanguageSelection({className="", targetId=""} :{className?: string, targetId?: string}) {
    const locale = useLocale()
    const pathname = usePathname()
    const currentPage = pathname.replace(`/${locale}`, "") || "/"

    const href = targetId ? `${currentPage}#${targetId}` : currentPage

    return <div className={`page-header ${className}`}>
      <Image
          aria-hidden
          src="https://nextjs.org/icons/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
      />
      <Link
        className={`flex items-center gap-2 hover:underline hover:underline-offset-4` + `${locale === 'tr' && '  font-bold'}`}
        href={href}
        locale="tr"
        itemID={targetId}
      >
        Türkçe
      </Link>
      {" | "}
      <Link
        className={`flex items-center gap-2 hover:underline hover:underline-offset-4` + `${locale === 'en' && '  font-bold'}`}
        href={href}
        locale="en"
        itemID={targetId}
      >
        English
      </Link>
    </div>
}