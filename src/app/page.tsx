import Image from 'next/image'

import Menu from './component/menu'
import Card from './component/card'

import getTrimString from './utils/trimString'

export default function Home() {
  return (
    <div className='w-screen h-screen bg-[#212121] flex flex-nowrap'>

      {/* SIDE NAV BAR */}
      <div className='shrink-0 bg-[#303030] flex flex-col sticky w-[15%] h-full p-1 items-start flex-nowrap'>

        <img src="/menu/wokpalogo.png" className='w-16 h-8 shrink-0 top-[4px] left-[15px] relative mb-4' />

        <div>
          <Menu name='Discover' img='/menu/sound.png'></Menu>
          <Menu name='Top 50 podcasts' img='/menu/star.png'></Menu>
          <Menu name='Categories' img='/menu/cat.png'></Menu>
          <Menu name='Add your podcast' img='/menu/mic.png'></Menu>

          <p className='font-bold text-xs text-white m-3'>Your Library</p>

          <div className="flex flex-row items-center m-3 gap-12">
            <img src="/menu/love.png" alt="" className="cursor-pointer w-3.5" />
            <img src="/menu/strokes.png" alt="" className="cursor-pointer w-3.5" />
            <img src="/menu/plus.png" alt="" className="cursor-pointer w-3.5" />
          </div>

          <Menu name='Your playlist' img='/menu/music.png'></Menu>
          <Menu name='Recently played' img='/menu/earphones.png'></Menu>
          <Menu name='Subscription & Hosts' img='/menu/group.png'></Menu>

          <hr className="w-full my-3 border-0 h-0.5 bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900]" />

          <Menu name='Wokpa for podcasters' img='/menu/pod.png'></Menu>
          <Menu name='Wokpa for advertisers' img='/menu/ham.png'></Menu>
          <Menu name='Read our blogs' img='/menu/blog.png'></Menu>
        </div>

      </div>

      <div className='flex flex-col w-full h-full'>
        {/* HEADER NAV BAR */}
        <div className='flex flex-row h-[77px] w-full items-center bg-[#272727]'>
          <div className="flex flex-row items-center h-[46px] relative">
            <input type="text" name="" id="" 
            className="placeholder:text-slate-400 text-xs font-medium w-[400px] h-[40px] rounded-[12px] my-3 mx-4 p-3"
            placeholder="Search by Podcast name, Host name, Categories, Tags ...."/>
            <img src="/nav/search.png" alt="" className="left-[88%] absolute w-3.5" />
          </div>

          <div className="flex flex-nowrap flex-row items-center ml-[10%] w-full">

            <div className='w-1/2 justify-end items-center flex'>

              <div className="flex flex-row items-center gap-2 bg-black rounded-full w-fit h-fit py-2 px-2 shadow-md shadow-[#1EAEA3]/50 cursor-pointer">
                <img src="/nav/mobile.png" alt="" className="w-3 h-4" />
                <p className="font-medium text-xs text-[rgb(30,174,163)]">Download the app</p>
              </div>

            </div>

            <div className="flex flex-row gap-3 items-center justify-end w-1/2 mr-2">

              <div className="flex flex-row flex-nowrap items-center gap-2 bg-[#1EAEA3] w-fit h-fit justify-center py-2 px-2.5 rounded-xl cursor-pointer">
                <img src="/menu/pod.png" alt="" className="w-4" />
                <span className="font-[600] text-xs text-white">SIGN UP</span>
              </div>

              <div className="flex flex-row items-center gap-2 border-white border-2 w-fit h-fit justify-center py-2 px-2 rounded-xl cursor-pointer">
                <img src="/nav/person.png" alt="" className="w-2.5" />
                <span className="font-[600] text-xs text-white">LOG IN</span>
              </div>
            
            </div>

          </div>

        </div>

        {/* SECTION */}
        <div className='m-2'>

          <div className="flex flex-row">
            <div className="w-1/3">
              <div className='m-2 flex flex-row items-center gap-1'>
                <img src='/section/star.png' className='w-5'/>
                <p className='text-base font-bold text-white'>Pick of the week</p>
              </div>
              <div className='relative'>
                <img src='/section/pick.png' className='w-[21.5rem]' />
                <div className="flex flex-row items-center gap-1 rounded-full w-fit h-fit bg-[#7B61FF] p-2 absolute bottom-[7%] right-[10%] cursor-pointer">
                  <span className='text-[10px] font-bold text-white'>LISTEN NOW</span><img src="/section/play.png" className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className='w-2/3 mt-[4%]'>

              <div className="flex flex-row items-center justify-between mb-[0.5%]">
                <p className='text-white text-base font-bold'>Top podcasts</p>
                <p className='text-[#1EAEA3] font-bold text-xs cursor-pointer'>See all</p>
              </div>

              <div className='flex flex-row shrink-0 gap-2.5'>

                {/** CARD */}
                <Card
                name= {getTrimString("WTF")} author={getTrimString("Marc Maron")} img="/section/podcast.png" catImg='/section/entertainment.png' category='Entertainment'
                ></Card>

                <Card
                name= {getTrimString("The Joe Rogan Experience")} author={getTrimString("Joe Rogan")} img="/section/podcast2.png" catImg='/section/entertainment.png' category='Entertainment'
                ></Card>

                <Card
                name= {getTrimString("How did things get made?")} author={getTrimString("Mike & May")} img="/section/podcast3.png" catImg='/section/entertainment.png' category='Entertainment'
                ></Card>

                <Card
                name= {getTrimString("WTF")} author={getTrimString("Marc Maron")} img="/section/podcast.png" catImg='/section/entertainment.png' category='Entertainment'
                ></Card>

              </div>

            </div>

          </div>

        </div>

      </div>


    </div>
  )
}
