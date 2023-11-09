import Assets from "@/assets"
import Image from "next/image"
import { TopCategoriesData } from "@/utils/data"
import TopCategoriesList from "./TopCategoriesList"
import SectionTitle from "./SectionTitle"

export default function TopCategories () {
    return (
        <div className="bg-[#30303080] sm:m-6 m-2.5">

            <SectionTitle name="Top Categories" />

            <div className="flex sm:flex-row flex-col items-center m-3">

                <div className="flex flex-wrap w-5/6 sm:pb-4 rounded-[3px]">

                    {
                        TopCategoriesData.map(data => (
                            <TopCategoriesList
                                key={data.id}
                                id={data.id}
                                img={data.img}
                                color={data.color}
                                name={data.name}
                            />
                        ))
                    }

                </div>
          
                <span className="sm:w-1/6 mb-2.5 sm:m-0 font-bold text-[15px] text-[#1EAEA3]">See all categories &gt;</span>

            </div>

        </div>
    )
}