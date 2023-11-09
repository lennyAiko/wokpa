import TopCard from "@/components/dashboard/TopCard"
import { TopCategoriesData, TopPodcastsData, LatestEpisodesData, MadeForYouData, PopularCardData, HostSuggestionData, OtherListenersData, KeywordsData } from "@/utils/data"
import TopCategoriesList from "@/components/dashboard/TopCategoriesList"
import LatestEpisodes from "@/components/dashboard/LatestEpisodes"
import LatestEpisodesList from "@/components/dashboard/LatestEpisodesList"
import PopularCard from "@/components/dashboard/PopularCard"

import Image from "next/image"

import Assets from "@/assets"
import TopPodcasts from "@/components/dashboard/TopPodcasts"
import TopCategories from "@/components/dashboard/TopCategories"
import SectionTitle from "@/components/dashboard/SectionTitle"

export default function Home() {

  return (
    <main className='bg-[#212121] flex-col w-screen'>

      <TopPodcasts /> 

      <TopCategories /> 

      <div className="flex sm:gap-8 gap-3 sm:m-6 m-2.5 sm:flex-row flex-col">

        <div className="flex bg-[#30303080] h-[632px] flex-col sm:w-2/3">

          <div className="flex justify-between sm:flex-row flex-col">

            <div className="flex flex-col sm:items-end">
              <SectionTitle name="Latest episodes" />
              <span className="text-[#C3C3C3] font-medium sm:text-lg text-base flex sm:justify-normal justify-center -mt-4 -ml-10 sm:-ml-10 sm:-mt-0">#Fresh out of the studio!</span>
            </div>

            <div className="flex items-center justify-center sm:justify-normal relative sm:mr-6 mr-8 mt-2 sm:mt-0">
              <input type="text" placeholder="Filter by category" className="sm:px-4 sm:py-3 px-2 py-2 w-[60%] h-fit bg-[#272626] border border-[#DCDCDC] rounded-xl" />
              <Image src={Assets.Down} alt="down" className="absolute right-[25%] w-[14px] h-2" />
            </div>
          </div>


          <div className="mx-10 mt-8 mb-3 overflow-hidden overflow-y-scroll">
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
        
        <div className="flex flex-col sm:w-1/3 bg-[#30303080] rounded-[3px] sm:h-[632px] h-[432px]">

          <div className="flex flex-col pt-5 px-5">
            <span className="text-white font-bold sm:text-3xl text-xl">Made for you</span>
            <span className="text-[#C3C3C3] font-medium sm:text-lg text-base">Episodes you don&lsquo;t want to miss out on.</span>
          </div>

          <span className='h-[1px] bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900] my-3 w-full'></span>

            <div className="overflow-y-scroll overflow-hidden mb-3 p-1 sm:p-0">
              {
                MadeForYouData.map(data => (
                <div className="flex items-center sm:px-5 sm:mb-1 overflow-y-scroll overflow-hidden" key={data.title}>
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

      <div className="sm:m-6 m-2.5 flex flex-col">

        <div className="flex flex-col items-start">
          <SectionTitle name="Popular & Trending Podcasts" />
          <span className="text-[#C3C3C3] font-medium sm:text-lg text-base sm:ml-16 justify-center sm:justify-normal ml-12">#Community&lsquo;s choice</span>
        </div>

        <div className="shrink-0 rounded-[3px] shadow-md flex gap-3 overflow-x-scroll overflow-hidden sm:m-6 m-2.5">
          {
            PopularCardData.map(data => (
              <PopularCard
                key={data.title}
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

      <div className="sm:m-8 m-2.5 flex flex-col">

        <div className="flex flex-col items-start">
          <SectionTitle name="Podcast host suggestions" />
          <span className="text-[#C3C3C3] font-medium sm:text-lg text-base sm:ml-16 justify-center sm:justify-normal ml-12 -mt-4">#Editor&lsquo;s choice</span>
        </div>

        <div className="flex sm:gap-3 gap-2 items-center sm:m-6 m-2.5 overflow-x-scroll overflow-hidden">
          {
            HostSuggestionData.map(data => (
              <div className="flex flex-col rounded-[3px] shrink-0 p-3 bg-white sm:w-[230px] sm:h-[295px] w-[180px] h-[245px] items-center" key={data.title}>
                <Image src={data.img} alt="" className="rounded-full sm:w-[159px] sm:h-[159px] w-[129px] h-[129px] object-cover mx-auto" />

                <span className="font-semibold sm:text-lg text-base my-1 text-[#282828] truncate mx-3">{data.title}</span>

                <span className="font-normal sm:text-[13px] text-[12px] text-[#282828] mx-3">Host of: <br/> <span className="text-[#5A5A5A] truncate">{data.podcastName}</span></span>

                <span className="mx-auto border-2 border-[#7B61FF] rounded-[60px] h-[35px] sm:w-[176px] w-[146px] items-center flex text-sm sm:text-base justify-center mt-3 bg-[#E6EAEE]">Follow</span>
              </div>
            ))
          }
        </div>

      </div>

      <div className='h-[1px] bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900] my-3 w-full mt-8'></div>

      <div className="sm:m-8 flex flex-col m-2.5">

        <div className="flex flex-col items-start">
          <SectionTitle name="Discover other listeners" />
          <span className="text-[#C3C3C3] font-medium sm:text-lg text-base -mt-4 sm:ml-16 ml-12">We are building a community of podcast lovers</span>
          <span className="text-[#C3C3C3] font-medium sm:text-lg text-base sm:ml-16 ml-12">#suggested for you</span>
        </div>

         <div className="flex sm:gap-6 items-center my-6 sm:mx-28 sm:w-[90%] m-2.5 gap-3 overflow-x-scroll overflow-hidden sm:flex-wrap">
          {
            OtherListenersData.map(data => (
              <div className="flex flex-col rounded-[3px] shrink-0 sm:p-3 p-2 bg-white sm:w-[230px] sm:h-[295px] w-[180px] h-[245px] items-center" key={data.title}>
                <Image src={data.img} alt={data.title} className="rounded-full sm:w-[159px] sm:h-[159px] w-[129px] h-[129px] object-cover mx-auto" />

                <span className="font-semibold sm:text-lg text-base my-1 text-[#282828] truncate mx-3">{data.title}</span>

                <span className="font-normal text-[11px] text-[#282828] mx-3">Suggested for you</span>
                
                <span className="font-normal text-[13px] text-[#282828] sm:mx-3">Member since {data.date}</span>

                <span className="mx-auto border-2 border-[#7B61FF] rounded-[60px] h-[35px] sm:w-[176px] w-[146px] items-center sm:text-base text-sm flex justify-center mt-3 bg-[#E6EAEE]">Follow</span>
              </div>
            ))
          }
        </div>

        <span className="sm:my-6 mx-auto text-white font-medium text-[15px] bg-[#2C2C2C] h-[46px] items-center flex justify-center w-[85%]">Load more</span>
      
      </div>

      <div className="sm:m-8 m-2.5 flex flex-col">

        <div className="flex flex-col items-start">
          <SectionTitle name="Search by popular keywords" />
        </div>

        <div className="flex sm:gap-3 gap-1.5 sm:m-8 m-2.5 flex-wrap">
          {
            KeywordsData.map(data => (
              <span className="text-white font-semibold sm:text-base text-sm bg-[#575757] rounded-full sm:px-4 px-2.5 sm:py-2.5 py-2">#{data}</span>
            ))
          }
        </div>

      </div>
    </main>

  )
}
