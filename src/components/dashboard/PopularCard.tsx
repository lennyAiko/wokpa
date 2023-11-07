import Image from "next/image"
import { SubscribeDigitConvert } from "@/utils/extras"

interface PopularCardProps {
    posterImg: string
    title: string
    author: string
    subImg1: string
    subImg2: string
    subImg3: string
    subscribers: number
}

const PopularCard: React.FC<PopularCardProps> = ({posterImg, title, author, subImg1, subImg2, subImg3, subscribers, ...props}) => {

    return (
        <>
            <div className="bg-[#30303080] shrink-0 rounded-[3px] w-[220px] shadow-md">
                <Image src={posterImg} alt={`${author} image`} className="p-3 rounded-3xl object-cover" />

                <h3 className="font-semibold text-lg text-white px-3 truncate">{title}</h3>

                <span className="font-normal text-[15px] text-white px-3">By: {author}</span>

                <span className="flex px-3 py-3 w-[220px] items-center relative">
                    <Image src={subImg1} alt={`subsribers image`} className="w-7 h-7 rounded-full border-2 object-cover border-[#7B61FF] m-0 absolute" />

                    <Image src={subImg2} alt={`subsribers image`} className="w-7 h-7 rounded-full border-2 object-cover border-[#7B61FF] m-0 absolute left-[15%]" />

                    <Image src={subImg3} alt={`subsribers image`} className="w-7 h-7 rounded-full border-2 object-cover border-[#7B61FF] m-0 absolute left-[25%] z-10" />

                    <span className="font-bold text-[10px] text-[#282828] bg-[#E6EAEE] border-2 border-[#7B61FF] rounded-full items-center  h-7 px-2 ml-[33%] flex z-0 w-fit">{SubscribeDigitConvert(subscribers)} subscribers</span>

                </span>
            </div>
        </>
    )

}

export default PopularCard