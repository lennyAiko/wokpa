import Image from "next/image"

interface LatestEpisodesListType {
  img: string
  title: string
  duration: string
  author: string
  date: string 
}

const LatestEpisodesList: React.FC<LatestEpisodesListType> = ({img, title, duration, author, date, ...props}) => {

  return (
    <>
      <Image src={img} alt="podcast image" className="w-[84px] h-[84px] mr-0.5" />
      <div className="flex flex-col gap-0.5 w-4/5">
        <span className="font-semibold text-lg text-white truncate">{title}</span>
        <span className="text-white text-sm font-normal truncate">By: {author}</span>
        <span className="text-white text-xs font-normal truncate">{date}, {duration}</span>
      </div>
    </>
  )

}

export default LatestEpisodesList