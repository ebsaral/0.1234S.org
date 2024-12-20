"use client"

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react"
import { FaShuffle } from "react-icons/fa6";

import { getRandomSoundcloud } from "@/data";
import { Soundcloud } from "@/types";


export default function Component({className}: {className?: string}) {
    const locale = useLocale()
    const t = useTranslations("General")
    
    const [sound, setSound] = useState<Soundcloud>();
    
    useEffect(() => {
        if(!sound){
            setSound(getRandomSoundcloud(locale))
        }
    }, [sound, locale])

    const style = `page-section w-screen ${className}`
    return  (sound ? (
        <div className={style}>
            <hr className="page-break"></hr>
            <iframe
                width="100%"
                height={166}
                allow="autoplay"
                src={sound.src}
            />
            <div
                className="text-center text-sm ml-6 mr-7"
                style={{
                color: "#cccccc",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily:
                    "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                fontWeight: 100
                }}
            >
                <a
                    className="hover:underline"
                    href={sound.info.artist.url}
                    title={sound.info.artist.title}
                    target="_blank"
                    style={{ color: "#cccccc"}}
                    >
                    {sound.info.artist.title}
                </a>{" "}:{" "}
                <a
                    className="hover:underline"
                    href={sound.info.song.url}
                    title={sound.info.song.title}
                    target="_blank"
                    style={{ color: "#cccccc"}}
                    >
                    {sound.info.song.title}
                </a>
            </div>
            <div className="m-auto p-2 hover:cursor-pointer hover:underline hover:underline-offset-2" onClick={() => setSound(getRandomSoundcloud(locale))}>
                <div className="flex flex-row gap-2 items-center">
                    <FaShuffle />{' '}{t("shuffle")}
                </div>
            </div>
        </div>
        ) : <div className="page-break text-center">{'... '}{t("loading")}{' ...'}</div>
    )
}