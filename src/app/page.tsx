import Card from "@/components/dashboard/Card"
import { TopCategoriesData, TopPodcastsData, LatestEpisodesData } from "@/utils/data"
import TopCategories from "@/components/dashboard/TopCategories"
import { useState } from 'react'
import LatestEpisodes from "@/components/dashboard/LatestEpisodes"

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

                <Card 
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

      <div className="flex gap-6 m-6">

        <div className="flex bg-[#30303080] flex-col w-2/3">

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


        <div className="w-full h-[632px] mx-10 mt-8 overflow-y-scroll">
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
        
        <div className="flex flex-col w-1/3">
          This is
        </div>

      </div>

    </main>

  )
}
