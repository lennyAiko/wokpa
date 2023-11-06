interface TopCategoriesProps {
    img: string
    name: string
    color: string
}

const TopCategories: React.FC<TopCategoriesProps> = ({img, name, color, ...props}) => {
    return (

        <div className={`flex items-center gap-2 bg-[#575757] w-fit p-3.5 rounded-full m-2 hover:border hover:border-${color} shadow-md`}>
            <img src={img} alt={`${name} image`}/>
            <span className={`font-semibold text-base hover:${color} text-white`}>{name}</span>
        </div>

    )
}

export default TopCategories