import { useTranslations } from "next-intl";
import Image from "next/image";
import SectionItem, { SectionItemType } from "./SectionItem";

export type SectionWithItemsType = {
    translationPaths: {
        title: string
    },
    items: SectionItemType[];
}

export default function SectionWithItems({translationPaths, items = []}: SectionWithItemsType) {
    const t = useTranslations();
    return <>
        <div className="flex gap-6 text-2xl text-center font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
          {t(translationPaths.title)}
        </div>
        
        {items.map((item, i) => {
            return <SectionItem key={i} item={item} />;
        })}
    </>
}