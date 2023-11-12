import SectionTitle from "@/components/dashboard/SectionTitle"
import { CategoriesData } from "@/utils/data"
import Image from "next/image"
import Link from "next/link"

export default function Categories () {
    return (
        <main className="bg-[#212121] flex-col w-screen h-screen">
            <div className="mx-20 my-5">
                <SectionTitle name="Explore All Categories" />
            </div>

            <div className="grid grid-cols-5 gap-10 w-[75%] mx-20">
                {
                    CategoriesData.map(({id, img}) => (
                        <Link href={`/categories/${id}`} key={id}>
                            <Image src={img} alt="category image" />
                        </Link>
                    ))
                }
            </div>
        </main>
    )
}