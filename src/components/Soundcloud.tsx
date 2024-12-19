import { Soundcloud as SoundcloudType } from "@/components/types"


export default function Soundcloud({className, src, info}: SoundcloudType) {
    const style = `page-section w-screen ${className}`
    return  (
        <div className={style}>
            <hr className="page-break"></hr>
            <iframe
            width="100%"
            height={166}
            allow="autoplay"
            src={src}
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
                    href={info.artist.url}
                    title={info.artist.title}
                    target="_blank"
                    style={{ color: "#cccccc"}}
                    >
                    {info.artist.title}
                </a>{" "}:{" "}
                <a
                    className="hover:underline"
                    href={info.song.url}
                    title={info.song.title}
                    target="_blank"
                    style={{ color: "#cccccc"}}
                    >
                    {info.song.title}
                </a>
            </div>
        </div>
    )
}