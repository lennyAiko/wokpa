import Image from "next/image"
import Assets from "@/assets"
import LatestEpisodesList from "@/components/dashboard/LatestEpisodesList"
import { FavouritesData } from "@/utils/data"

export default function YourFavourites () {
    const podcastCount = FavouritesData.length

    const noPodcast = (
        <main className='bg-[#212121] flex-col w-screen h-screen'>
            <div className="flex flex-col m-8">
                <div className="flex items-center gap-2">
                    <Image src={Assets.HeartIcon} alt="heart icon" className="w-6 h-6" />
                    <span className="text-white font-bold text-[28px] leading-5">Your favourite episodes</span>
                </div>

                <span className="ml-9 mt-2.5 text-white text-lg font-normal">{podcastCount} episode</span>

            </div>

            <div className="m-14 space-y-7">
                <h3 className="font-bold text-xl text-white">How to add episodes to this library</h3>
                <ol className="text-[#E1E1E1] list-decimal font-medium text-lg w-[40%] space-y-7">
                    <li className="">Explore your favourite podcasts and shows available on Wokpa by using the search button or navigating podcast pages.</li>
                    <li className="">Add episodes by clicking the like button. see image below.</li>
                </ol>
                <Image src={Assets.Player} alt="player image" width={905} height={114} />
                <h3 className="text-[#E1E1E1] font-medium text-lg w-[40%]"><strong>Note:</strong> You can remove any episodes from this library by clicking on the like button again to unlike.</h3>
            </div>
        </main>
    )

    const availablePodcast = (
        <main className="bg-[#212121] flex-col w-screen h-screen">
            <div className="flex flex-col m-8">
                <div className="flex items-center gap-2">
                    <Image src={Assets.HeartIcon} alt="heart icon" className="w-6 h-6" />
                    <span className="text-white font-bold text-[28px] leading-5">Your favourite episodes</span>
                </div>
                <span className="ml-9 mt-2.5 text-white text-lg font-normal">{podcastCount} episodes</span> :
            </div>

            <div className='h-[1px] bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900] my-3 w-full mt-4'></div>

            <div className="flex items-center m-8">
                <input type="text" placeholder="Sort by: Default" className="bg-transparent border-2 border-[#DCDCDC] rounded-[12px] w-[20%] py-3 px-3" />
                <Image src={Assets.Down} alt="down" className="relative place-self-center -ml-8" />
            </div>

            <div className="m-14 h-[65%] w-[90%] overflow-y-scroll">
                {
                    FavouritesData.map(({number, img, author, duration, date, title, likes}) => (
                        <div className="flex flex-col sm:flex-row gap-2 sm:mt-4 sm:-ml-10 sm:items-center sm:justify-between sm:w-[70%]" key={number}>
                            <LatestEpisodesList
                                id={number}
                                img={img}
                                author={author}
                                duration={duration}
                                date={date}
                                title={title}
                            />
                            <div className="w-1/5 flex gap-1 items-center justify-center">
                                <Image src={Assets.RatingStarColored} alt="rating" className="w-4 h-4" />
                                <Image src={Assets.RatingStarColored} alt="rating" className="w-4 h-4" />
                                <Image src={Assets.RatingStarColored} alt="rating" className="w-4 h-4" />
                                <Image src={Assets.RatingStarColored} alt="rating" className="w-4 h-4" />
                                <Image src={Assets.RatingStar} alt="rating" className="w-4 h-4" />
                            </div>
                            <div className="w-1/5 flex sm:ml-16 space-x-6 items-center justify-center">
                                <div className="flex gap-0.5 flex-col items-center">
                                <Image src={Assets.HeartIcon} alt="icons" className="w-[18px] h-[18px]" />
                                <span className="text-white font-normal text-xs">{likes}</span>
                                </div>
                                <Image src={Assets.LeHam} alt="icons" className="w-[18px] h-[18px]" />
                                <Image src={Assets.LePlus} alt="icons" className="w-[18px] h-[18px]" />
                                <Image src={Assets.LeShare} alt="icons" className="w-[18px] h-[18px]" />
                                <Image src={Assets.LeDownload} alt="icons" className="w-[18px] h-[18px]" />
                            </div>
                
                        </div>
                    ))
                
                }
                
            </div>

        </main>
    )

    if (podcastCount > 0) return availablePodcast;

    return noPodcast
}