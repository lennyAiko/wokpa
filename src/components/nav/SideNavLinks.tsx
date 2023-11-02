import Link from "next/link"

interface SideNavLinksProps {
    name: string
    img?: string
    link?: string
}

const SideNavLinks: React.FC<SideNavLinksProps> = ({name, img, link, ...props}) => {
    return (
        <Link href={link ? `${link}` : "/"}>
            <div className="flex flex-row items-center hover:bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900] w-full tracking-normal mr-2">
                <img src={img} alt={`${name} image`} 
                className="-mr-3"/>
                <h3 className="font-bold lg:text-base md:text-sm text-[#D5D5D5]">{name}</h3>
            </div>
        </Link>
    )
}

export default SideNavLinks