import Image from "next/image"
import {TwoDigits} from "@/utils/extras"
import LatestEpisodesList from "./LatestEpisodesList"
import Assets from "@/assets"

interface LatestEpisodesType {
    number: number
    title: string
    author: string
    date: string
    duration: string
    likes: number
    img: string
}

const LatestEpisodes: React.FC<LatestEpisodesType> = ({number, title, author, date, duration, likes, img, ...props}) => {
    return (
        <div className="flex mb-4 gap-4 overflow-y-scroll shrink-0">

            <span className="font-medium text-[13px] text-white">{TwoDigits(number)}</span>

            <div className="flex gap-2 mt-4 -ml-10 items-center justify-between">

              <LatestEpisodesList
                img={img}
                author={author}
                duration={duration}
                date={date}
                title={title}
              />

              <div className="w-1/5 flex gap-1 items-center">
                <Image src={Assets.RatingStarColored} alt="rating" className="w-4 h-4" />
                <Image src={Assets.RatingStarColored} alt="rating" className="w-4 h-4" />
                <Image src={Assets.RatingStarColored} alt="rating" className="w-4 h-4" />
                <Image src={Assets.RatingStarColored} alt="rating" className="w-4 h-4" />
                <Image src={Assets.RatingStar} alt="rating" className="w-4 h-4" />
              </div>

              <div className="w-1/5 flex ml-16 space-x-8 items-center">
                <div className="flex gap-0.5 flex-col items-center">
                  <Image src={Assets.LeLove} alt="icons" className="w-[18px] h-[18px]" />
                  <span className="text-white font-normal text-xs">{likes}</span>
                </div>
                <Image src={Assets.LeHam} alt="icons" className="w-[18px] h-[18px]" />
                <Image src={Assets.LePlus} alt="icons" className="w-[18px] h-[18px]" />
                <Image src={Assets.LeShare} alt="icons" className="w-[18px] h-[18px]" />
                <Image src={Assets.LeDownload} alt="icons" className="w-[18px] h-[18px]" />
              </div>
              
            </div>
            
        </div>
    )
}

export default LatestEpisodes