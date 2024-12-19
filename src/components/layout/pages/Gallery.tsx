import doodles from "@/data/gallery/doodles"
import drawings from "@/data/gallery/drawings"
import { useTranslations } from "next-intl";
import Image from "next/image"
import GalleryLayout from "../GalleryLayout";
import InnerLayout from "../InnerLayout";
import Soundcloud, { SoundcloudInterface } from "@/components/Soundcloud";


export default function Gallery() {
    
    const t = useTranslations("Pages.Gallery");
    
    const albums = [
      {
        title: t("doodles"),
        photos: doodles
      },
      {
        title: t("drawings"),
        photos: drawings
      },
      
    ]

    const params = {
      image: {
        src: "/images/gallery/eminbugrasaral-gallery-main.jpg",
        alt: "Emin Bugra Saral"
      }, 
      title: t("title"),
      subtitle: t("subtitle"),
      lastUpdateDate: "2024-12-14T13:29"
    }

    const soundcloud: SoundcloudInterface = {
      src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/416735193&color=%23474136&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      info: {
        artist: {
          title: "Sergerdan__",
          url: "https://soundcloud.com/sergerdan62"
        },
        song: {
          title: "Azer Bülbül & Damian Marley - Dokunmayın Çok Fenayam",
          url: "https://soundcloud.com/sergerdan62/azer-bulbul-damian-marley-dokunmayin-cok-fenayam"
        }
      }
    }

    return <InnerLayout params={params}>
      <>
      <GalleryLayout albums={albums} />
      <div className="flex-col flex gap-6 mt-6 flex-wrap items-center justify-center text-center w-auto m-auto mb-10">
        <Image
          className="rounded-3xl"
          src="/images/eminbugrasaral-2024.jpg"
          alt="Emin Bugra Saral 2024"
          width={350}
          height={350}
          priority
        />
      </div>

     <Soundcloud src={soundcloud.src} info={soundcloud.info} />
      </>
    </InnerLayout>
  }

