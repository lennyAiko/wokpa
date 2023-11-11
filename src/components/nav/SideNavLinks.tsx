import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SideNavLinksProps {
    name: string
    img?: any
    link?: string
}

const SideNavLinks: React.FC<SideNavLinksProps> = ({name, img, link, ...props}) => {
    const pathName = usePathname()

    return (
        <Link href={link ? `${link}` : "/"} className={`${pathName === link ? 'active active:bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900]': ''}`}>
            <div className="flex flex-row items-center hover:bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900] w-full tracking-normal pl-3 mr-2">
                <Image src={img} alt={`${name} image`} 
                className="-mr-3 w-[69px] h-[72px]"/>
                <h3 className="font-bold lg:text-lg md:text-base text-[#D5D5D5]">{name}</h3>
            </div>
        </Link>
    )
}

export default SideNavLinks