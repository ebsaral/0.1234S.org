import { QuoteItem} from "@/components/layout/types";

export default function Quote({item} : {item: QuoteItem}) {
    return (
      <div className="flex flex-col items-center justify-center gap-3">
        <p>{item.title}</p>
        <p>{item.description}</p>        
      </div>
    
    )
}