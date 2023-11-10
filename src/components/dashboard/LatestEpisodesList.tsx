import Image from "next/image"

interface LatestEpisodesListType {
  img: any
  title: string
  duration: string
  author: string
  date: string 
  id: number
}

const LatestEpisodesList: React.FC<LatestEpisodesListType> = ({img, title, duration, author, date, id,  ...props}) => {

  return (
    <>
      <Image src={img} alt="podcast image" className="w-[84px] h-[84px] sm:mr-0.5" />
      <div className="flex flex-col gap-0.5 sm:w-[45%]">
        <span className="font-semibold sm:text-lg text-base text-white truncate">{title}</span>
        <span className="text-white sm:text-sm text-xs font-normal truncate">By: {author}</span>
        <span className="text-white sm:text-xs text-[9px] font-normal truncate">{date}, {duration}</span>
      </div>
    </>
  )

}

export default LatestEpisodesList