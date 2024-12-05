"use client"

import { useState } from "react";

import { RowsPhotoAlbum, RenderImageProps, RenderImageContext } from "react-photo-album";
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
import Head from "next/head";
import Image from "next/image"
import LastUpdate from "@/components/LastUpdate";

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  const t = useTranslations();
  const lastUpdateDate = new Date("2024-12-05T14:40");
  
  const photos = [...doodles, ...drawings];

  <RowsPhotoAlbum photos={photos} render={{ "image": renderNextImage }} targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

  return (
    <>
      <Head>
        <title>{t("Metadata.Gallery.title")}</title>
        <meta name="description" content={t("Metadata.Gallery.description")} />
        <meta name="keywords" content={t("Metadata.Gallery.keywords")} />
        <meta property="og:title" content={t("Metadata.Gallery.title")} />
        <meta property="og:description" content={t("Metadata.Gallery.description")} />
        <meta property="og:image" content="https://saral.me/images/gallery-logo.png" />
      </Head>
      <div className="w-auto mr-3 ml-3">
        <div className="flex-col flex gap-6 flex-wrap items-center justify-center text-center w-auto m-auto mb-10">
          <a
            className="flex items-center gap-2 mt-6 hover:underline hover:underline-offset-4"
            href="/"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            {t("Link.home")}
          </a>  
          <Image
            className="rounded-3xl"
            src="/images/gallery/eminbugrasaral-gallery-main.jpg"
            alt="Emin Bugra Saral"
            width={350}
            height={350}
            priority
          />
          <h1 className="flex items-center text-2xl mt-2 font-bold">{t("Metadata.Gallery.title")}</h1>
          <p className="flex flex-row text-center text-lg">{t("Metadata.Gallery.description")}</p>
        </div>

        <RowsPhotoAlbum photos={photos} targetRowHeight={150} onClick={({ index }) => setIndex(index)} />
        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
        />

        <div className="text-center mt-10 mb-5 text-sm"><LastUpdate date={lastUpdateDate} /></div>
    </div>  
    </>
  );
}