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