import { getIntlayer, getMultilingualUrls, LocalesValues } from "intlayer";

export function randomIndex<T>(arr: T[]): number {
    return Math.floor((Math.random() * arr.length))
}

export function random<T>(arr: T[]): T {
    return arr[randomIndex(arr)]
}

export function getPageMetadata ({path, locale}: {locale: LocalesValues, path?: string}) {
    const metadata = getIntlayer("page-metadata", locale);
    const v = parseInt((Math.random() * 100000).toString());
    const url = `https://0.1234s.org${path || '/'}?v=${v}`;
    const multilingualUrls = getMultilingualUrls(url);

    return {
        ...metadata,
        alternates: {
            canonical: multilingualUrls[locale as keyof typeof multilingualUrls],
            languages: { ...multilingualUrls, "x-default": url },
        },
        openGraph: {
            ...metadata.openGraph,
            url: multilingualUrls[locale],
        }
    };
}