import Image from "next/image"
import Assets from "@/assets"
import Link from "next/link"

export default function YourPodcast() {
    return (
        <main className="bg-[#212121] flex-col w-screen h-screen">

            <div className="m-8">
                <div className="flex gap-2 items-center">
                    <Image src={Assets.Mic} alt="mic" width={24} height={24} />
                    <h3 className="text-white font-bold text-[28px] leading-5">Add your podcast</h3>
                </div>
                <p className="text-white font-normal text-lg w-[40%] tracking-normal mt-2">Get featured on Wokpa. Boost your podcast with thousands of daily listeners on Wokpa. Get more likes, comments and subscribers.</p>
            </div>

            <div className="flex gap-8 m-8 items-center w-[90%]">
                <div className="flex flex-col bg-[url('/male1.jpg')] bg-cover bg-center w-[60%] h-[400px] rounded-[8px]">
                    <div className="w-full h-full px-8 py-4 bg-black/90 rounded-[8px]">
                        <h3 className="text-[#FFD231] font-bold text-2xl mb-4 mt-3.5">Add with RSS feed</h3>
                        <p className="text-white font-normal text-lg mb-5">The RSS Feed URL is what connects directories to all of your podcast content, so that listeners can access your podcast in Wokpa.</p>
                        <p className="text-[#AFAFAF] font-normal text-base mb-4">Note: The approval timeline of your podcast can vary greatly, depending on the directory source.</p>
                        <button className="rounded-[12px] bg-[#5C59EA] text-white font-semibold text-[15px] leading-5 px-3 py-3 mt-12 ml-2"><Link href="/yourpodcast/addrss">Add RSS feed</Link></button>
                    </div>
                </div>

                <div className="flex flex-col bg-[url('/female.jpg')] bg-cover bg-center w-[60%] h-[400px] rounded-[8px]">
                    <div className="w-full h-full px-8 py-4 bg-black/90 rounded-[8px]">
                        <h3 className="text-[#4CCA38] font-bold text-2xl mb-4 mt-3.5">Claim podcast ownership</h3>
                        <p className="text-white font-normal text-lg">You can claim your podcasts directly on Wokpa.</p>
                        <ol className="text-[#AFAFAF] font-normal text-base mt-4 list-inside">
                            <li className="mb-3">1. Search for your podcast on Wokpa by using the search bar</li>
                            <li className="mb-3">2. Click on “Claim this podcast” button</li>
                            <li className="">3. We will send you a verification code via the email attached to your podcast RSS feed. Ensure you have access to this email</li>
                        </ol>
                        <button className="flex gap-1.5 items-center text-[#5C59EA] bg-white border-2 border-[#5C59EA] rounded-[12px] px-3 py-1 mt-20 font-semibold text-[15px] leading-5">Watch tutorial <span className="font-extrabold text-lg">&gt;</span></button>
                    </div>
                </div>
            </div>

        </main>
    )
}