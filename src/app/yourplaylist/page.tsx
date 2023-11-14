import Assets from "@/assets"
import Image from "next/image"
import { PlaylistData } from "@/utils/data"

export default function YourPlaylist () {
    const playlistSize = PlaylistData.length

    const availablePlaylist = (
        <main className="bg-[#212121] flex-col w-screen">
            
        </main>
    )

    const noPlaylist = (
        <main className="bg-[#212121] flex-col w-screen">
            
        </main>
    )

    if (playlistSize > 0) return availablePlaylist

    return noPlaylist
}