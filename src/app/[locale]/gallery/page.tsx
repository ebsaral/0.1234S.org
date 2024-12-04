'use client'

import { useEffect, useMemo, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import arrayShuffle from 'array-shuffle';
import { images as orgImages, CustomImage } from "@/gallery";

export default function Page() {

  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => { setTimeout(() => setKey(key + 1)); }, [index]);

  const images: CustomImage[] = useMemo(() => arrayShuffle(orgImages), [])

  const handleClick = (index: number) => {setIndex(index) ; setIsOpen(true)};
  const handleClose = () => {setIndex(-1) ; setIsOpen(false)};
  const handleMovePrev = () => setIndex((index + images.length - 1) % images.length);
  const handleMoveNext = () => setIndex((index + 1) % images.length);

  return (
    <div className="w-auto mr-3 ml-3">
      <title>Gallery of Emin Bugra Saral</title>
      <h1 className="text-center text-2xl mt-6 font-bold">Gallery: A collection of doodles</h1>
      <p className="text-center text-lg mt-3">by <b>Emin Bugra Saral</b></p>
      <br></br>
    
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {isOpen && (
        /* @ts-expect-error: Loading error */
        <Lightbox
          key={key}
          mainSrc={images[index].original}
          imageTitle={images[index].caption}
          mainSrcThumbnail={images[index].src}
          nextSrc={(images[(index + 1) % images.length] || images[index]).original}
          nextSrcThumbnail={(images[(index + 1) % images.length] || images[index]).src}
          prevSrc={images[(index + images.length - 1) % images.length] || images[index].original}
          prevSrcThumbnail={images[(index + images.length - 1) % images.length] || images[index].src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
          imagePadding={100}
        />
      )}
    </div>
  );
}