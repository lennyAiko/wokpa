import Image from "next/image"
import Assets from "@/assets"
import { TopPodcastsData } from "@/utils/data"
import TopCard from "./TopCard"

export default function TopPodcasts () {
    return (
        <>
            <div className="flex flex-1 items-center justify-center sm:justify-normal sm:gap-2 gap-0.5 sm:mx-8 mx-6 sm:mt-4 mt-2 mb-2 sm:mb-4">
                <Image src={Assets.Star} alt="star" className="sm:w-6 sm:h-6 w-4 h-4"/>
                <span className="font-bold sm:text-2xl text-xl text-white">Pick of the week</span>
            </div>

            <div className="flex sm:flex-row flex-col">

                <div className="sm:ml-5 relative sm:w-2/4 m-3 sm:m-4 flex justify-center">

                    <Image src={Assets.Fs} alt="pick-of-the-week" className="sm:w-[628px] rounded-[8px] sm:h-[477px] w-[408px] h-[257px] -mt-3 object-cover mb-4" />

                    <span className="flex flex-1 items-center gap-1 rounded-3xl bg-[#7B61FF] w-fit px-3 py-2 absolute right-6 bottom-10">
                        <span className="font-bold text-sm text-white">Listen now</span>
                        <Image src={Assets.PlayCircle} alt="play-circle" className="w-6 h-6" />
                    </span>

                </div>

                <div className="sm:w-2/4 sm:pr-6 pr-3 sm:mt-4 mx-3 -mt-5">
        
                    <div className="flex justify-between">
                
                        <span className="font-bold sm:text-2xl text-xl text-white">Top podcasts</span>
                        <span className="text-[#1EAEA3] font-bold text-sm">See all</span>

                    </div>

                    <span className="text-gray-500 my-8"><span className="text-white">&bull;</span>&bull;&bull;&bull;&bull;&bull;&bull;</span>

                    <div className="overflow-x-scroll overflow-hidden flex gap-3">
                        {
                            TopPodcastsData.map((data) => (

                                <TopCard 
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