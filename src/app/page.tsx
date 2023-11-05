import Card from "@/components/dashboard/Card"
import { TopCategoriesData, TopPodcastsData } from "@/utils/data"
import TopCategories from "@/components/dashboard/TopCategories"
import { useState } from 'react'

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

          <span className="flex flex-1 items-center gap-1 rounded-3xl bg-[#7B61FF] w-fit px-4 py-2 absolute lg:right-10 lg:top-72">
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

    </main>

  )
}
