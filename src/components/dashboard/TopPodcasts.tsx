import Image from "next/image"
import Assets from "@/assets"
import { TopPodcastsData } from "@/utils/data"
import TopCard from "./TopCard"

export default function TopPodcasts () {
    return (
        <>
            <div className="flex flex-1 items-center gap-2 mx-6 mt-6 mb-2">
                <Image src={Assets.Star} alt="star" className="w-6 h-6"/>
                <span className="font-bold text-2xl text-white">Pick of the week</span>
            </div>

            <div className="flex">

                <div className="ml-5 relative w-2/4">

                    <Image src={Assets.Fs} alt="pick-of-the-week" className="w-[628px] h-[477px]" />

                    <span className="flex flex-1 items-center gap-1 rounded-3xl bg-[#7B61FF] w-fit px-4 py-2 absolute lg:right-10 lg:top-[80%]">
                        <span className="font-bold text-sm text-white">Listen now</span>
                        <Image src={Assets.PlayCircle} alt="play-circle" className="w-6 h-6" />
                    </span>

                </div>

                <div className="w-2/4 pr-6 mt-4">
        
                    <div className="flex justify-between">
                
                        <span className="font-bold text-2xl text-white">Top podcasts</span>
                        <span className="text-[#1EAEA3] font-bold text-sm">See all</span>

                    </div>

                    <span className="text-gray-500 my-4"><span className="text-white">&bull;</span>&bull;&bull;&bull;&bull;&bull;&bull;</span>

                    <div className="overflow-x-scroll flex gap-3">
                        {
                            TopPodcastsData.map((data) => (

                                <TopCard 
                                    key={data.title}
                                    img={data.img}
                                    title={data.title}
                                    category={data.category}
                                    categoryImage={data.categoryImage}
                                    author={data.author}
                                />

                            ))
                        }
                    </div>
            
                </div>

            </div>
        </>
    )
}