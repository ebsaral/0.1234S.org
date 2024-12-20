export * from "@/components/layout/types"

export type Soundcloud = {
    src: string,
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
