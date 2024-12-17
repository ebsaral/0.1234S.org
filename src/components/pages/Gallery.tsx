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
import LastUpdate from "@/components/dates/LastUpdate";
import HomePageLink from "@/components/links/HomePageLink";


export default function Gallery() {
    const [index, setIndex] = useState(-1);
    const t = useTranslations("Pages.Gallery");
    const lastUpdateDate = new Date("2024-12-14T13:29");
    
    const photos = [...doodles, ...drawings];

    return <div className="w-auto mr-3 ml-3">
    <div className="flex-col flex gap-6 mt-2 flex-wrap items-center justify-center text-center w-auto sm:ml-10 sm:mr-10 ml-5 mr-5">
      <Image
        className="rounded-3xl"
        src="/images/gallery/eminbugrasaral-gallery-main.jpg"
        alt="Emin Bugra Saral"
        width={350}
        height={350}
        priority
      />
      <HomePageLink />  
      <h1 className="flex items-center text-2xl mt-2 font-bold">{t("title")}</h1>
      <p className="flex flex-row text-center text-lg">{t("subtitle")}</p>
    </div>
    <div className="flex flex-col justify-center mt-5 sm:ml-10 sm:mr-10 ml-5 mr-5">
        <h1 className="text-center text-2xl mt-2 mb-6 font-bold">{t("doodles")}</h1>
        <RowsPhotoAlbum key="album1" photos={doodles} targetRowHeight={150} onClick={({ index }) => setIndex(index)} />
        <h1 className="text-center text-2xl mt-10 mb-6 font-bold">{t("drawings")}</h1>
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
    
    <div className="flex-col flex gap-6 mt-16 flex-wrap items-center justify-center text-center w-auto m-auto mb-10">
      <Image
        className="rounded-3xl"
        src="/images/eminbugrasaral-2024.jpg"
        alt="Emin Bugra Saral 2024"
        width={350}
        height={350}
        priority
      />
    </div>

    <div className="text-center mt-10 mb-5 text-sm"><LastUpdate date={lastUpdateDate} /></div>
    <div className="row-start-4 flex flex-wrap items-center justify-center mb-5 w-screen">
      <iframe
        width="100%"
        height={166}
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/416735193&color=%23474136&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
    </div> 
  </div>  
}