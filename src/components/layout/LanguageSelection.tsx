"use client"

import {
  getLocaleName,
  getLocalizedUrl,
} from "intlayer";

import { useLocale, useLocaleCookie } from "next-intlayer";
import Link from "next/link";
import { PiGlobeSimpleDuotone } from "react-icons/pi"

export default function LanguageSelection({className="", targetId=""} :{className?: string, targetId?: string}) {
    const { locale, pathWithoutLocale, availableLocales } = useLocale();
    const { setLocaleCookie } = useLocaleCookie();
    console.log(locale)
    return <div className={`page-header ${className}`}>
      <PiGlobeSimpleDuotone className="text-xl" />
      {availableLocales.map((localeItem) => (
          <Link
            className={`flex items-center gap-2 hover:underline hover:underline-offset-4` + `${locale === localeItem && ' font-bold'}`}
            href={getLocalizedUrl(pathWithoutLocale, localeItem)}
            hrefLang={localeItem}
            key={localeItem}
            aria-current={locale === localeItem ? "page" : undefined}
            onClick={() => setLocaleCookie(localeItem)}
            itemID={targetId}
          >
              {getLocaleName(localeItem)}
          </Link>
        ))}
    </div>
}