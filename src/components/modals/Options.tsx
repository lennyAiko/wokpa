import Image from "next/image"
import Assets from "@/assets"
import { StaticImageData } from "next/image"

interface OptionsProps {
    text: string
    icon1: StaticImageData
    icon2: StaticImageData
}

const Options: React.FC<OptionsProps> = ({text, icon1, icon2, ...props}) => {
    return (
        <div className="flex bg-white justify-between rounded-full w-[95%] h-fit items-center px-8 py-3">

            <div className="flex items-center justify-center gap-2 -ml-2">
                
                <div className="bg-[#EDE6E5] rounded-full p-2">
                    <Image src={icon1} alt="google icon" className="w-[16px] h-[16px]" />
                </div>
                <span className="text-[#282828] font-[450] text-base">{text}</span>

            </div>

            <Image src={icon2} alt="down arrow" className="w-3 h-4.5" />

        </div>
    )
}

export default Options