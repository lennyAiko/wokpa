import Image from "next/image"

interface TopCategoriesProps {
    img: string
    name: string
    color: string
}

const TopCategories: React.FC<TopCategoriesProps> = ({img, name, color, ...props}) => {
    return (

        <div className={`flex items-center gap-2 bg-[#575757] w-fit sm:p-3.5 px-2.5 py-2 rounded-full sm:m-2 m-1 hover:border hover:border-${color} shadow-md`} key={name}>
            <Image src={img} alt={`${name} image`} className="w-6 h-6"/>
            <span className={`font-semibold text-base hover:${color} text-white`}>{name}</span>
        </div>

    )
}

export default TopCategories