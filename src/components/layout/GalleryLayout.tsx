
"use client"

import { useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Album } from "@/components/layout/types";


export default function GalleryLayout ({albums}: {albums: Album[]}) {
    const [index, setIndex] = useState(-1);
    
    const photos = albums.flatMap((value) => value.photos);

    return (
    <div className="page-section">
        {albums.map((album, i) => {
            let count = 0;
            if(i>0) {
                count = albums.slice(0, i-1).reduce((prev, _, currI, arr) => {return prev + arr[currI].photos.length}, albums[0].photos.length)
            }
            return (
                <div key={`${i}-album-wrapper`} className="flex flex-col">
                    <h2 className="mb-5 mt-5 text-center">{album.title}{' '}{`(${album.photos.length})`}</h2>
                    <RowsPhotoAlbum key={`${i}-album`} photos={album.photos} targetRowHeight={150} onClick={({ index }) => setIndex(index + count)} />
                </div>
            )
        })}

        <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
        />
    </div>
    )
}