"use client"
import Image from "next/image"
import { store } from "../../../store"
import Assets from "@/assets"

interface TopCardProps {
    img: any
    title: string
    author: string
    categoryImage: string
    category: string
    id: number
}

const TopCard: React.FC<TopCardProps> = ({img, title, author, categoryImage, category, id, ...props}) => {

    const { isAuthenticated } = store()

    return (
        <div className="bg-[#30303080] shrink-0 rounded-[3px] sm:w-[260px] w-[160px] shadow-md" key={id}>
            <Image src={img} alt={`${author} image`} className="p-3 rounded-3xl object-cover"/>
            <h3 className="font-semibold text-lg text-white px-3 truncate">{title}</h3>
            <span className="font-normal text-[15px] text-white px-3">By: {author}</span>
                {
                    isAuthenticated ?
                    <div className="flex flex-1 space-x-1 px-3 py-2 items-center justify-between">
                        <div className="flex gap-2.5 items-center">
                            <Image src={categoryImage} alt={`${category} image`} className="w-[15px] h-[15px]" />
                            <span className="font-normal text-sm text-[#B0B0B0]">{category}</span>
                        </div>
                        <button>
                            <Image src={Assets.Gift} alt="gift box" width={22} height={22} /> 
                        </button>
                    </div>
                    :
                    <div className="flex flex-1 space-x-1 px-3 py-2 items-center">
                        <Image src={categoryImage} alt={`${category} image`} className="w-[15px] h-[15px]" />
                        <span className="font-normal text-sm text-[#B0B0B0]">{category}</span>
                    </div>
                }

        </div>
    )
}

export default TopCard 