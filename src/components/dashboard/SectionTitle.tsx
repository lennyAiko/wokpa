import Image from "next/image"
import Assets from "@/assets"

interface SectionTitleProps {
    name: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({name, ...props}) => {
    return (
        <div className="flex items-center">
            <Image src={Assets.TopCategories} alt="top categories" className="-mr-3 sm:w-[72px] sm:h-[72px] w-16 h-16" />
            <span className="font-bold sm:text-2xl text-xl text-white">{name}</span>
        </div>
    )
}

export default SectionTitle