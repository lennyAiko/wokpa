import Image from "next/image"
import Assets from "@/assets"

export default function Auth() {
    return (
        <div className="sm:w-1/5 flex flex-1 flex-row mx-4 sm:mx-0 sm:hidden">

            <div className="flex flex-row items-center sm:space-x-6 space-x-3">

                <div className="flex flex-row items-center space-x-1 bg-[#1EAEA3] py-2 px-3 rounded-xl">
                    <Image src={Assets.WokpaPodcasters} alt="sign up icon" className="sm:w-[18px] sm:h-[18px] w-4 h-4" />
                    <span className="tracking-tighter font-semibold text-sm sm:text-base text-white">SIGN UP</span>
                </div>

                <div className="flex flex-row items-center space-x-1 border-2 rounded-xl border-white py-1.5 px-2.5">
                    <Image src={Assets.User} alt="user icon" className="sm:w-[18px] sm:h-[18px] w-4 h-4" />
                    <span className="tracking-tighter font-semibold text-sm sm:text-base text-white">LOG IN</span>
                </div>

            </div>

        </div>
    )
}