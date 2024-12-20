import { Soundcloud } from "@/types"

export type SoundcloudWithMeta = {
    soundcloud: Soundcloud,
    meta: {
        total: number,
        remaining: number
    }
}