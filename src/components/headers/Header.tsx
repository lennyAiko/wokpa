import Assets from "@/assets";
import Image from "next/image";
import Search from "./Search";

export default function Header() {
    return (
        <>
            <div className="bg-[#272727] flex-row items-center p-2 sm:flex hidden w-screen">

                <Search /> 

                <div className="w-1/5 mr-12">
                    <div className="flex flex-row items-center bg-black rounded-2xl gap-1 w-fit p-2 shadow shadow-[#1EAEA3]">
                        <Image src={Assets.Mobile} alt="mobile" className="w-[18px] h-[18px]" />
                        <span className="tracking-tighter text-[#1EAEA3] font-medium lg:text-base md:text-sm text-xs">Download the app</span>
                    </div>
                </div>

                <div className="w-1/5 flex flex-row flex-1 min-w-0">

                    <div className="flex flex-row items-center space-x-6">

                        <div className="flex flex-row items-center space-x-1 bg-[#1EAEA3] py-2 px-3 rounded-xl">
                            <Image src={Assets.WokpaPodcasters} alt="sign up icon" className="w-[18px] h-[18px]" />
                            <span className="tracking-tighter font-semibold text-base text-white">SIGN UP</span>
                        </div>

                        <div className="flex flex-row items-center space-x-1 outline rounded-xl outline-white outline-1.5 py-1.5 px-2.5">
                            <Image src={Assets.User} alt="user icon" className="w-[18px] h-[18px]" />
                            <span className="tracking-tighter font-semibold text-base text-white">LOG IN</span>
                        </div>

                    </div>

                </div>


            </div>

            <div>

            </div>
        </>
    )
}