"use client"
import { store } from "../../../store"
import Assets from "@/assets"
import Image from "next/image"

interface RSSProps {
    isVisible: boolean
    email?: string
}

const RSS: React.FC<RSSProps> = ({isVisible, ...props}) => {

    const { setViewRSS } = store()

    if (!isVisible) return null;

    return (
        <div className="flex items-center mx-auto justify-center rounded-[12px] z-40 backdrop-blur bg-black fixed inset-0 bg-opacity-25">

            <div className="flex w-[550px] rounded-[12px] bg-[#3A3A3A] gap-3">
                <div className="gap-3 text-white flex flex-col p-8">
                    <h3 className="font-bold text-2xl">Claim this podcast</h3>
                    <p className="font-normal text-base">Please enter the code you received on your RSS feed email address to get full access to your podcast profile. It takes a few minutes to complete your verification.</p>
                    <p className="text-[#2ECDCE] mt-5 font-semibold text-[15px] leading-5">iamol****@gmail.com</p> {/* TODO: dyncamically input user email */}
                    <div className="flex gap-2 mt-1">
                        <input type="text" placeholder="Enter verification code" className="rounded-[12px] bg-[#F7F7F7] placeholder:text-[#5A5A5A] text-sm font-normal pl-4 py-3 w-[65%]" />
                        <button className="rounded-[12px] bg-[#5C59EA] font-medium text-[15px] leading-5 px-4 py-3">Claim podcast</button>
                    </div>
                </div>
                
                <button className="place-self-start" onClick={() => setViewRSS()}>
                    <Image src={Assets.CloseIcon} alt="close icon" width={65} height={65} className="-ml-2 mt-2" />
                </button>

            </div>

        </div>
    )
    
}

export default RSS