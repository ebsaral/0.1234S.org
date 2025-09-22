/* eslint-disable */

import { useIntlayer } from "next-intlayer/server";
import SectionItem from "./SectionItem";


export default function HomeSection() {
  const projects = useIntlayer("projects")
  const ideas = useIntlayer("projects-ideas")
  
  const sections = [
    {
      content: projects,
      minCol: 1,
      maxCol: 3,
    },
    {
      content: ideas,
      minCol: 2,
      maxCol: 3
    }
  ]

    return (
    <div className="page-section">
      {sections.map((section, i) => {
        return <div key={i} id={section.content.title.value} className="page-section [&:not(:last-child)]:mb-12">
          <div className="mb-6 text-center text-3xl font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
            <h2>{section.content.title} {`(${section.content.items.length})`}</h2>
          </div>
          
          <div className={`grid sm:grid-cols-${section.maxCol} grid-cols-${section.minCol} gap-6`}>
              {section.content.items.map((item: any, i: any) => {
                  return <SectionItem key={i} title={item.title.value} titleStyle="" text={item.text.value} textStyle="" imgSrc={item.image.src.value} imgAlt={item.image.alt.value} href={item.href.value} />;
              })}
          </div>
        </div>
      })}
    </div>
)}