import TopCard from "@/components/dashboard/TopCard"
import { TopCategoriesData, TopPodcastsData, LatestEpisodesData, MadeForYouData, PopularCardData, HostSuggestionData, OtherListenersData } from "@/utils/data"
import TopCategories from "@/components/dashboard/TopCategories"
import LatestEpisodes from "@/components/dashboard/LatestEpisodes"
import LatestEpisodesList from "@/components/dashboard/LatestEpisodesList"
import PopularCard from "@/components/dashboard/PopularCard"

export default function Home() {

  return (
    <main className='flex-1 bg-[#212121] flex-col'>

      <div className="flex flex-1 items-center gap-2 mx-6 mt-6 mb-2">
        <img src="/dashboard-main/star.svg" alt="star" />
        <span className="font-bold text-2xl text-white">Pick of the week</span>
      </div>

      <div className="flex">

        <div className="ml-5 relative w-1/3 mr-3">

          <img src="/dashboard-main/fs.svg" alt="pick-of-the-week" />

          <span className="flex flex-1 items-center gap-1 rounded-3xl bg-[#7B61FF] w-fit px-4 py-2 absolute lg:right-10 lg:top-[80%]">
            <span className="font-bold text-sm text-white">Listen now</span>
            <img src="/dashboard-main/play-circle.svg" alt="play-circle" />
          </span>

        </div>

        <div className="w-2/3 px-6">

          <div className="flex justify-between">
            
            <span className="font-bold text-2xl text-white">Top podcasts</span>
            <span className="text-[#1EAEA3] font-bold text-sm">See all</span>

          </div>

          <span className="text-gray-500 my-4"><span className="text-white">&bull;</span>&bull;&bull;&bull;&bull;&bull;&bull;</span>

          <div className="overflow-x-scroll flex gap-3">
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

      <div className="bg-[#30303080] m-6">
        
        <div className="flex items-center">
          <img src="/dashboard-main/topcategories.svg" alt="top categories" className="-mr-3" />
          <span className="font-bold text-2xl text-white">Top Categories</span>
        </div>

        <div className="flex items-center m-3">

          <div className="flex flex-wrap w-5/6 pb-4 rounded-[3px]">

            {
              TopCategoriesData.map(data => (
                <TopCategories 
                  img={data.img}
                  color={data.color}
                  name={data.name}
                />
              ))
            }

          </div>
          
          <span className="w-1/6 font-bold text-[15px] text-[#1EAEA3]">See all categories {'>'}</span>

        </div>


      </div>

      <div className="flex gap-8 m-6">

        <div className="flex bg-[#30303080] h-[632px] flex-col w-2/3">

          <div className="flex justify-between">
            <div className="flex flex-col items-end">
              <div className="flex items-center -mb-3">
                <img src="/dashboard-main/topcategories.svg" alt="latest episodes" className="-mr-3" />
                <span className="text-white font-bold text-[28px]">Latest episodes</span>
              </div>
              <span className="text-[#C3C3C3] font-medium text-lg">#Fresh out of the studio!</span>
            </div>
            <div className="flex items-center relative mr-6">
              <input type="text" placeholder="Filter by category" className="px-4 py-3 w-fit h-fit bg-[#272626] border border-[#DCDCDC] rounded-xl" />
              <img src="/dashboard-main/down.svg" alt="down" className="absolute right-5" />
            </div>
          </div>


          <div className="w-full mx-10 mt-8 mb-3 overflow-y-scroll">
            {
              LatestEpisodesData.map(data => (
                <LatestEpisodes 
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
          </div>

        </div>
        
        <div className="flex flex-col w-1/3 bg-[#30303080] rounded-[3px] h-[632px]">

          <div className="flex flex-col pt-5 px-5">
            <span className="text-white font-bold text-3xl">Made for you</span>
            <span className="text-[#C3C3C3] font-medium text-lg">Episodes you don't want to miss out on.</span>
          </div>

          <span className='h-[1px] bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900] my-3 w-full'></span>

            <div className="overflow-y-scroll mb-3">
              {
                MadeForYouData.map(data => (
                <div className="flex items-center px-5 mb-1 overflow-y-scroll">
                  <LatestEpisodesList
                    title={data.title}
                    duration={data.duration}
                    author={data.author}
                    img={data.img}
                    date={data.date}
                  />
                </div>
                ))
              }
            </div>

        </div>

      </div>

      <div className='h-[1px] bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900] my-3 w-full mt-14'></div>

      <div className="m-6 flex flex-col">

        <div className="flex flex-col items-start">
          <div className="flex items-center -mb-3">
            <img src="/dashboard-main/topcategories.svg" alt="latest episodes" className="-mr-3" />
            <span className="text-white font-bold text-[28px]">Popular & Trending Podcasts</span>
          </div>
          <span className="text-[#C3C3C3] font-medium text-lg ml-16">#Community's choice</span>
        </div>

        <div className="shrink-0 rounded-[3px] shadow-md flex gap-3 overflow-x-scroll m-6">
          {
            PopularCardData.map(data => (
              <PopularCard
                posterImg={data.posterImg}
                title={data.title}
                author={data.author}
                subImg1={data.subImg1}
                subImg2={data.subImg2}
                subImg3={data.subImg3}
                subscribers={data.subscribers}
              />
            ))
          }
        </div>
      </div>
      
      <div className='h-[1px] bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900] my-3 w-full mt-8'></div>

      <div className="m-8 flex flex-col">

        <div className="flex flex-col items-start">
          <div className="flex items-center -mb-3">
            <img src="/dashboard-main/topcategories.svg" alt="latest episodes" className="-mr-3" />
            <span className="text-white font-bold text-[28px]">Podcast host suggestions</span>
          </div>
          <span className="text-[#C3C3C3] font-medium text-lg ml-16">#Editor's choice</span>
        </div>

        <div className="flex gap-3 items-center m-6 overflow-x-scroll">
          {
            HostSuggestionData.map(data => (
              <div className="flex flex-col rounded-[3px] shrink-0 p-3 bg-white w-[230px] h-[295px] items-center">
                <img src={data.img} alt="" className="rounded-full w-[159px] h-[159px] object-cover" />

                <span className="font-semibold text-lg my-1 text-[#282828] truncate mx-3">{data.title}</span>

                <span className="font-normal text-[13px] text-[#282828] mx-3">Host of: <br/> <span className="text-[#5A5A5A] truncate">{data.podcastName}</span></span>

                <span className="mx-auto border-2 border-[#7B61FF] rounded-[60px] h-[35px] w-[176px] items-center flex justify-center mt-3 bg-[#E6EAEE]">Follow</span>
              </div>
            ))
          }
        </div>

      </div>

      <div className='h-[1px] bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900] my-3 w-full mt-8'></div>

      <div className="m-8 flex flex-col">

        <div className="flex flex-col items-start">
          <div className="flex items-center -mb-3">
            <img src="/dashboard-main/topcategories.svg" alt="latest episodes" className="-mr-3" />
            <span className="text-white font-bold text-[28px]">Discover other listeners</span>
          </div>
          <span className="text-[#C3C3C3] font-medium text-lg ml-16">We are building a community of podcast lovers</span>
          <span className="text-[#C3C3C3] font-medium text-lg ml-16">#Editor's choice</span>
        </div>

         <div className="flex gap-6 items-center my-6 mx-28 w-[90%] flex-wrap">
          {
            OtherListenersData.map(data => (
              <div className="flex flex-col rounded-[3px] shrink-0 p-3 bg-white w-[230px] h-[295px] items-center">
                <img src={data.img} alt="" className="rounded-full w-[159px] h-[159px] object-cover mx-auto" />

                <span className="font-semibold text-lg my-1 text-[#282828] truncate mx-3">{data.title}</span>

                <span className="font-normal text-[11px] text-[#282828] mx-3">Suggested for you</span>
                
                <span className="font-normal text-[13px] text-[#282828] mx-3">Member since {data.date}</span>

                <span className="mx-auto border-2 border-[#7B61FF] rounded-[60px] h-[35px] w-[176px] items-center flex justify-center mt-3 bg-[#E6EAEE]">Follow</span>
              </div>
            ))
          }
        </div>

        <span className="my-6 mx-auto text-white font-medium text-[15px] bg-[#2C2C2C] h-[46px] items-center flex justify-center w-[85%]">Load more</span>
      
      </div>

    </main>

  )
}
