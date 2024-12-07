"use client"

import { useState } from "react";




import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/plugins/thumbnails.css";

import doodles from "@/utils/gallery/doodles"
import drawings from "@/utils/gallery/drawings"
import { useTranslations } from "next-intl";
import Image from "next/image"
import LastUpdate from "@/components/LastUpdate";
import HomePageLink from "./HomePageLink";


export default function Gallery() {
    const [index, setIndex] = useState(-1);
    const t = useTranslations();
    const lastUpdateDate = new Date("2024-12-06T09:49");
    
    const photos = [...doodles, ...drawings];

    return <div className="w-auto mr-3 ml-3">
    <div className="flex-col flex gap-6 mt-2 flex-wrap items-center justify-center text-center w-auto m-auto mb-10">
      <Image
        className="rounded-3xl"
        src="/images/gallery/eminbugrasaral-gallery-main.jpg"
        alt="Emin Bugra Saral"
        width={350}
        height={350}
        priority
      />
      <HomePageLink />  
      <h1 className="flex items-center text-2xl mt-2 font-bold">{t("Metadata.Gallery.title")}</h1>
      <p className="flex flex-row text-center text-lg">{t("Metadata.Gallery.description")}</p>
    </div>
    <div className="flex flex-col justify-center">
        <h1 className="text-center text-2xl mt-2 mb-6 font-bold">{t("Gallery.doodles")}</h1>
        <RowsPhotoAlbum key="album1" photos={doodles} targetRowHeight={150} onClick={({ index }) => setIndex(index)} />
        <h1 className="text-center text-2xl mt-10 mb-6 font-bold">{t("Gallery.drawings")}</h1>
        <RowsPhotoAlbum key="album2" photos={drawings} targetRowHeight={150} onClick={({ index }) => setIndex(doodles.length + index)} />
        <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
        />
    </div>
    

    <div className="text-center mt-10 mb-5 text-sm"><LastUpdate date={lastUpdateDate} /></div>
  </div>  
}