import Assets from "@/assets"
import Image from "next/image"

export default function Search () {
    return (
        <>
            <div className="p-2 ml-2 sm:my-0 my-1 relative block sm:w-3/5">
                <input type="text" placeholder="Search by Podcast Name, Host name, Categories, Tags..." 
                className="sm:p-2.5 p-1.5 sm:w-[50%] rounded-xl placeholder:text-sm placeholder:font-normal truncate"/>
                <span className="absolute inset-y-0 sm:left-[46%] right-3.5 flex items-center"> 
                    <Image src={Assets.Search} alt="search icon"className="w-[17px] h-[17px]" />
                </span>
            </div>
        </>
    )
}