import TwoDigits from "@/utils/extras"

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
        <div className="flex mb-4 gap-4 overflow-y-scroll">

            <span className="font-medium text-[13px] text-white">{TwoDigits(number)}</span>

            <div className="flex gap-2 mt-4 -ml-10 items-center justify-between">

              <img src={img} alt="podcast image" className="" />

              <div className="flex flex-col gap-0.5 w-4/5">
                <span className="font-semibold text-lg text-white truncate">{title}</span>
                <span className="text-white text-sm font-normal truncate">By: {author}</span>
                <span className="text-white text-xs font-normal truncate">{date}, {duration}</span>
              </div>

              <div className="w-1/5 flex gap-1 items-center">
                <img src="/dashboard-main/rating-star-colored.svg" alt="rating" />
                <img src="/dashboard-main/rating-star-colored.svg" alt="rating" />
                <img src="/dashboard-main/rating-star-colored.svg" alt="rating" />
                <img src="/dashboard-main/rating-star-colored.svg" alt="rating" />
                <img src="/dashboard-main/rating-star.svg" alt="rating" />
              </div>

              <div className="w-1/5 flex ml-16 space-x-8 items-center">
                <div className="flex gap-0.5 flex-col items-center">
                  <img src="/dashboard-main/le-love.svg" alt="icons" />
                  <span className="text-white font-normal text-xs">{likes}</span>
                </div>
                <img src="/dashboard-main/le-ham.svg" alt="icons" />
                <img src="/dashboard-main/le-plus.svg" alt="icons" />
                <img src="/dashboard-main/le-share.svg" alt="icons" />
                <img src="/dashboard-main/le-download.svg" alt="icons" />
              </div>
              
            </div>
            
        </div>
    )
}

export default LatestEpisodes