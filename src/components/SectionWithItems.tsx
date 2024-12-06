import { useTranslations } from "next-intl";
import SectionItem, { SectionItemType } from "./SectionItem";

export type SectionWithItemsType = {
    translationPaths: {
        title: string
    },
    items: SectionItemType[],
    minCol: number,
    maxCol: number,
}

export default function SectionWithItems({translationPaths, items = [], minCol, maxCol}: SectionWithItemsType) {
    const t = useTranslations();
    return <>
        <div className="flex first:mt-0 mt-10 mb-5 gap-6 text-3xl text-center justify-center font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
          {t(translationPaths.title)}
        </div>
        
        <div className={`grid grid-cols-${minCol} sm:grid-cols-${maxCol} gap-12`}>
            {items.map((item, i) => {
                return <SectionItem key={`sectionItem_${i}`} item={item} />;
            })}
        </div>
    </>
}