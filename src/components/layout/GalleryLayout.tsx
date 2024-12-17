
"use client"

import { useState } from "react";

import { Photo, RowsPhotoAlbum } from "react-photo-album";
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

interface AlbumInterface {
    title: string;
    photos: Photo[]
}

export default function GalleryLayout ({albums}: {albums: AlbumInterface[]}) {
    const [index, setIndex] = useState(-1);
    
    const photos = albums.flatMap((value) => value.photos);

    return (
    <div className="flex flex-col justify-center sm:ml-10 sm:mr-10 ml-5 mr-5 gap-5">
        {albums.map((album, i) => {
            let count = 0;
            if(i>0) {
                count = albums.slice(0, i-1).reduce((prev, _, currI, arr) => {return prev + arr[currI].photos.length}, albums[0].photos.length)
            }
            return (
                <div key={`${i}-album-wrapper`} className="flex flex-col">
                    <h1 className="text-center text-2xl mb-5 mt-5  font-bold">{album.title}{' '}{`(${album.photos.length})`}</h1>
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