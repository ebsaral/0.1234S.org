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
    
    return <div className="flex flex-col gap-6 items-stretch justify-around mb-12">
        <div className="mb-6 text-center text-3xl font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
          {t(translationPaths.title)}
        </div>
        
        <div className={`grid sm:grid-cols-${maxCol} grid-cols-${minCol} gap-12`}>
            {items.map((item, i) => {
                return <SectionItem key={`sectionItem_${i}`} item={item} />;
            })}
        </div>
    </div>
}