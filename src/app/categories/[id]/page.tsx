import Link from "next/link"
import { CategoriesData } from "@/utils/data"
import Assets from "@/assets"
import Image from "next/image"
import TopCard from "@/components/dashboard/TopCard"
import { TopPodcastsData } from "@/utils/data"
import Line from "@/components/common/Line"
import LatestEpisodes from "@/components/dashboard/LatestEpisodes"
import { LatestEpisodesData } from "@/utils/data"

export default function Page({params}: {params: {id: number}}) {

    const category = CategoriesData.filter(item => item.id == params.id)

    const categoryLength = 3
    
    return (
        <main className="bg-[#212121] flex-col w-screen h-full p-8">

            <button className="bg-[#3A3A3A] rounded-[8px] px-3 py-2 ml-8">
                <Link href={"/categories"}>
                    <span className="text-white font-normal text-[15px] leading-5"><span className="text-lg">&lt;</span> Back</span>
                </Link>
            </button>

            <div className="flex flex-col mt-8 gap-2 ml-8">
                <div className="flex items-center gap-6">

                    <div className="flex items-center gap-2">
                        <Image src={Assets.HF} alt="category icon" /> {/* category icon goes here */}
                         <span className="text-white text-[28px] leading-5">Health & Fitness </span> {/* category name goes here */}
                    </div>

                    <button className="flex flex-col items-center [&>span]:text-white gap-0 h-fit w-fit">
                        <span className="">&bull;</span>
                        <span className="-mt-4">&bull;</span>
                        <span className="-mt-4">&bull;</span>
                    </button>

                </div>

                <div className="[&>span]:text-white">
                    {
                        categoryLength > 0 ?
                        <span className="font-normal text-lg">{categoryLength} podcasts</span> :
                        <span className="font-normal text-lg">{categoryLength} podcast</span>
                    }
                </div>
            </div>

            <div className="flex flex-col items-start gap-2 ml-8 mt-8">
                <div className="grid grid-cols-4 gap-4 w-[80%]">
                    {
                        TopPodcastsData.map((data) => (
                            <TopCard
                                key={data.id}
                                id={data.id}
                                img={data.img}
                                title={data.title}
                                category={data.category}
                                categoryImage={data.categoryImage}
                                author={data.author}
                            />
                        ))
                    }
                </div>

                <button className="rounded-[8px] bg-[#3A3A3A] px-3 py-3 text-white w-[80%] text-center my-4 font-medium text-[15px] leading-5">Load more</button>
            </div>

            <Line />

            <div className="flex flex-col mt-4 ml-8 w-[70%]">
                <div className="flex flex-col">

                    <span className="text-white font-bold text-[28px] leading-5">Trending episodes - Health & Fitness</span> {/* dynamically input podcast name here */}
                    <span className="text-[#C3C3C3] font-medium text-lg mt-2.5 ml-1">Based on popular listening</span>

                </div>

                <div className="ml-2 mt-4 mb-3 overflow-hidden overflow-y-scroll">
                    {
                        LatestEpisodesData.map(data => (
                            <LatestEpisodes key={data.number}
                            id={data.number}
                            number={data.number}
                            title={data.title}
                            author={data.author}
                            date={data.date}
                            duration={data.duration}
                            likes={data.likes}
                            img={data.img}
                            />
                        ))
                    }

                    
                    <button className="rounded-[8px] bg-[#3A3A3A] px-3 py-3 text-white w-[90%] text-center my-4 font-medium text-[15px] leading-5">Load more</button>
                </div>
            </div>
    
        </main>
    )
}