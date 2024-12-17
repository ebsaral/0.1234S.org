"use client"

import { Link } from "@/i18n/routing"
import { useLocale } from "next-intl"
import Image from "next/image"

import { usePathname } from "next/navigation"

export default function LanguageSelection({className=""} :{className?: string}) {
    const locale = useLocale()
    const pathname = usePathname()
    const currentPage = pathname.replace(`/${locale}`, "") || "/"

    return <div className={`row-start-3 flex gap-6 flex-wrap items-center justify-center ${className}`}>
      <Image
          aria-hidden
          src="https://nextjs.org/icons/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
      />
      <Link
        className={`flex items-center gap-2 hover:underline hover:underline-offset-4` + `${locale === 'tr' && '  font-bold'}`}
        href={currentPage}
        locale="tr"
      >
        Türkçe
      </Link>
      {" | "}
      <Link
        className={`flex items-center gap-2 hover:underline hover:underline-offset-4` + `${locale === 'en' && '  font-bold'}`}
        href={currentPage}
        locale="en"
      >
        English
      </Link>
    </div>
}