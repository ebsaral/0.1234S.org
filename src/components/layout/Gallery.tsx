'use client';

import { useState } from 'react';

import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';

import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { Album } from '@/components/layout/types';
import { useIntlayer } from 'next-intlayer';

export default function GalleryLayout({ albums }: { albums: Album[] }) {
  const [index, setIndex] = useState(-1);
  const lightbox = useIntlayer('lightbox');
  const photos = albums.flatMap((value) => value.photos);

  return (
    <div className='page-section'>
      {albums.map((album, i) => {
        let count = 0;
        if (i > 0) {
          count = albums.slice(0, i - 1).reduce(
            (prev, _, currI, arr) => {
              return prev + arr[currI].photos.length;
            },
            albums[i - 1].photos.length,
          );
        }
        return (
          <div key={`${i}-album-wrapper`} className='flex flex-col'>
            <h2 className='mb-5 mt-5 text-center'>
              {album.title} {`(${album.photos.length})`}
            </h2>
            {album.subtitle && <p className='mb-5 text-center text-sm'>{album.subtitle}</p>}
            <RowsPhotoAlbum
              key={`${i}-album`}
              photos={album.photos}
              targetRowHeight={150}
              onClick={({ index }) => setIndex(index + count)}
            />
          </div>
        );
      })}

      <Lightbox
        styles={{
          root: { '--yarl__slide_description_text_align': 'center' },
          slide: {
            paddingTop: '65px',
          },
        }}
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
        captions={{
          hidden: true,
          showToggle: true,
          descriptionTextAlign: 'center',
        }}
        thumbnails={{
          showToggle: true,
        }}
        labels={{
          Close: lightbox.close.value,
          Next: lightbox.next.value,
          Previous: lightbox.previous.value,
          'Zoom in': lightbox.zoomIn.value,
          'Zoom out': lightbox.zoomOut.value,
          'Enter Fullscreen': lightbox.enterFullscreen.value,
          'Exit Fullscreen': lightbox.exitFullscreen.value,
          Play: lightbox.play.value,
          Pause: lightbox.pause.value,
          'Show thumbnails': lightbox.showThumbnails.value,
          'Hide thumbnails': lightbox.hideThumbnails.value,
          'Show captions': lightbox.showCaptions.value,
          'Hide captions': lightbox.hideCaptions.value,
        }}
      />
    </div>
  );
}
