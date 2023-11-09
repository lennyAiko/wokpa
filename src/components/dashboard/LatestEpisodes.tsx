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
    img: any
    id: number
}

const LatestEpisodes: React.FC<LatestEpisodesType> = ({number, title, author, date, duration, likes, img, id, ...props}) => {
    return (
        <div className="flex mb-4 gap-4 overflow-y-scroll overflow-hidden" key={id}>

            <span className="font-medium text-[13px] text-white hidden sm:flex">{TwoDigits(number)}</span>

            <div className="flex flex-col sm:flex-row gap-2.5 sm:mt-4 sm:-ml-10 sm:items-center sm:justify-between w-full">

              <LatestEpisodesList
                id={id}
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

              <div className="w-1/5 flex sm:ml-16 space-x-8 items-center">
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