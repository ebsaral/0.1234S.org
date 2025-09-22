import { getIntlayer, getMultilingualUrls, LocalesValues } from "intlayer";
import { Metadata } from "next";

export function randomIndex<T>(arr: T[]): number {
    return Math.floor((Math.random() * arr.length))
}

export function random<T>(arr: T[]): T {
    return arr[randomIndex(arr)]
}

export function getPageMetadata ({locale, customPageKey}: {locale: LocalesValues, customPageKey?: string}): Metadata {
    const metadata = getIntlayer("page-metadata", locale);
    let path = '/';
    let imageSrc = "/images/logo.png";
    let title = metadata.title;
    let description = metadata.description;

    const v = parseInt((Math.random() * 100000).toString());

    let customContent = undefined;
    if(customPageKey){
        customContent = getIntlayer(customPageKey, locale);
        path = customContent.href;
        imageSrc = customContent.image.src;
        title = customContent.title;
        description = customContent.description;
    }

    const url = `https://0.1234s.org${path}?v=${v}`;
    const multilingualUrls = getMultilingualUrls(url);

    const imageUrl = `http://0.1234s.org${imageSrc}?v=${v}`;
    const secureImageUrl = `https://0.1234s.org${imageSrc}?v=${v}`

    return {
        ...metadata,
        alternates: {
            canonical: multilingualUrls[locale as keyof typeof multilingualUrls],
            languages: { ...multilingualUrls, "x-default": url },
        },
        openGraph: {
            ...metadata.openGraph,
            url: multilingualUrls[locale],
            images: [
                {
                    url: imageUrl,
                    secureUrl: secureImageUrl
                }
            ]
        },
        title,
        description
    };
}