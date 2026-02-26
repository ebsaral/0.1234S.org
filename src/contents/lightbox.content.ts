import { Dictionary, t } from 'intlayer';

const lightboxContent = {
  key: 'lightbox',
  content: {
    close: t({
      en: 'Close',
      tr: 'Kapat',
    }),
    next: t({
      en: 'Next',
      tr: 'Sonraki',
    }),
    previous: t({
      en: 'Previous',
      tr: 'Önceki',
    }),

    // Zoom
    zoomIn: t({
      en: 'Zoom in',
      tr: 'Yakınlaştır',
    }),
    zoomOut: t({
      en: 'Zoom out',
      tr: 'Uzaklaştır',
    }),

    // Fullscreen
    enterFullscreen: t({
      en: 'Enter fullscreen',
      tr: 'Tam ekrana geç',
    }),
    exitFullscreen: t({
      en: 'Exit fullscreen',
      tr: 'Tam ekrandan çık',
    }),

    // Slideshow
    play: t({
      en: 'Play',
      tr: 'Oynat',
    }),
    pause: t({
      en: 'Pause',
      tr: 'Duraklat',
    }),

    // Thumbnails
    showThumbnails: t({
      en: 'Show thumbnails',
      tr: 'Küçük önizlemeleri göster',
    }),
    hideThumbnails: t({
      en: 'Hide thumbnails',
      tr: 'Küçük önizlemeleri gizle',
    }),

    // Captions
    showCaptions: t({
      en: 'Show captions',
      tr: 'Açıklamaları göster',
    }),
    hideCaptions: t({
      en: 'Hide captions',
      tr: 'Açıklamaları gizle',
    }),
  },
} satisfies Dictionary;

export default lightboxContent;
