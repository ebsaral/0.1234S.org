/* eslint-disable */

import { useIntlayer } from 'next-intlayer/server';
import SectionItem from './SectionItem';
import Quote from './Quote';

export default function HomeSection() {
  const projects = useIntlayer('projects');

  const sections = [
    {
      content: projects,
      minCol: 1,
      maxCol: 3,
      titleStyle: 'text-xl sm:text-xl',
    },
  ];

  return (
    <div className='page-section'>
      {sections.map((section, i) => {
        return (
          <div
            key={`section_${i}`}
            id={section.content.title.value}
            className='page-section [&:not(:last-child)]:mb-12'
          >
            {/* <div className="mb-6 text-center text-3xl font-bold font-[family-name:var(--font-geist-mono)] whitespace-pre-line">
            <h2>{section.content.title}</h2>
          </div>
           */}
            <div className={`grid sm:grid-cols-${section.maxCol} grid-cols-${section.minCol} gap-6`}>
              {section.content.items.map((item: any, x: any) => {
                return (
                  <SectionItem
                    key={`sectionItem_${x}`}
                    title={item.title.value}
                    titleStyle={section.titleStyle}
                    text={item.text.value}
                    textStyle=''
                    imgSrc={item.image.src.value}
                    imgAlt={item.image.alt.value}
                    href={item.href.value}
                    spin={item.spin}
                  />
                );
              })}
              {i == 0 && <Quote />}
            </div>
          </div>
        );
      })}
    </div>
  );
}
