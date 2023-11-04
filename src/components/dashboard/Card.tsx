interface CardProps {
    img: string
    title: string
    author: string
    categoryImage: string
    category: string
}

const Card: React.FC<CardProps> = ({img, title, author, categoryImage, category, ...props}) => {
    return (
        <div className="bg-[#30303080] shrink-0 rounded-[3px] w-[220px]">
            <img src={img} alt={`${author} image`} />
            <h3 className="font-semibold text-lg text-white px-3 truncate">{title}</h3>
            <span className="font-normal text-[15px] text-white px-3">By: {author}</span>
            <span className="flex flex-1 space-x-1 px-3 py-2">
                <img src={categoryImage} alt={`${category} image`} />
                <span className="font-normal text-sm text-[#B0B0B0]">{category}</span>
            </span>
        </div>
    )
}

export default Card 