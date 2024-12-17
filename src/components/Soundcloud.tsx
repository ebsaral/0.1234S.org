export interface SoundcloudInterface {
    className?: string;
    src: string;
    info: {
        artist: {
            url: string;
            title: string;
        };
        song: {
            url: string;
            title: string;
        }
    }
}

export default function Soundcloud({className, src, info}: SoundcloudInterface) {
    const style = `flex flex-wrap items-center justify-center mb-5 w-screen pr-5 pl-5 ${className}`
    return  (

        <div className={style}>
            <iframe
            width="100%"
            height={166}
            allow="autoplay"
            src={src}
            />
            <div
                className="text-sm mt-4"
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