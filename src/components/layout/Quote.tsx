"use client"

import { useState } from "react";
import { useIntlayer } from "next-intlayer";

export default function Quote() {
  const content = useIntlayer("page-quotes");
  const [index, setIndex] = useState(0);
  
  function next(){
    if(index + 1 < content.items.length){
      console.log("next")
      setIndex(index + 1);
    }
    else {
      setIndex(0);
    }
  }
  
  return (
    <div onClick={() => next()} className="relative font-[family-name:var(--font-geist-mono)] flex align-middle items-center justify-center-80 p-6 border rounded-xl shadow-lg select-none cursor-pointer hover:bg-gray-800 hover:border-gray-800 min-h-60">
      <div className="absolute top-5 left-5 text-5xl">“</div>
      <p className="w-60 text-center text-lg font-[family-name:var(--font-geist-mono) whitespace-pre-line">
        {content.items[index].title}
      </p>
      <p className="absolute left-4 bottom-7 text-xs text-right w-10">{index + 1}{" / "}{content.items.length}</p>
      <div className="absolute bottom-0 right-5 text-5xl">”</div>
    </div>
  )
}
