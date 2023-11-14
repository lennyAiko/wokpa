"use client"
import Link from "next/link"
import { store } from "../../../../store"
import RSS from "@/components/modals/RSS"

export default function AddRSS() {
    const { setViewRSS, rssModal } = store()

    return (
        <main className="bg-[#212121] flex-col w-screen h-screen">

            <button className="bg-[#3A3A3A] rounded-[8px] px-3 py-2 ml-8 mt-8">
                <Link href={"/yourpodcast"}>
                    <span className="text-white font-normal text-[15px] leading-5"><span className="text-lg">&lt;</span> Back</span>
                </Link>
            </button>

            <div className="ml-6 mt-4 p-4 flex flex-col gap-5">

                <h3 className="font-bold text-[28px] leadng-5 text-white">Add podcast with RSS feed</h3>
                <p className="text-white font-normal text-lg w-[40%]">Please enter the email address attached to your RSS feed. Ensure you have access to this email.</p>
                <div className="flex gap-2">
                    <input type="text" placeholder="Enter your podcast RSS feed..." className="bg-[#F7F7F7] rounded-[12px] placeholder:text-[#5A5A5A] placeholder:font-medium placeholder:text-sm px-5 w-[25%]" />
                    <button className="rounded-[12px] text-white bg-[#5C59EA] font-semibold text-[15px] leading-5 px-3 py-3" onClick={() => setViewRSS()}>Add feed</button>
                    {/* Send request to verify RSS link */}
                </div>

            </div>

            <RSS isVisible={rssModal} />

        </main>
    )
}