import Image from 'next/image'

import Menu from './component/menu'

export default function Home() {
  return (
    <div className='w-screen h-screen bg-[#212121]'>

      {/* SIDE NAV BAR */}
      <div className='shrink-0 bg-[#303030] flex flex-col sticky w-[15%] h-full p-1'>

        <img src="wokpalogo.png" className='w-16 h-8 shrink-0 top-[4px] left-[15px] relative mb-4' />

        <div>
          <Menu name='Discover' img='sound.png'></Menu>
          <Menu name='Top 50 podcasts' img='star.png'></Menu>
          <Menu name='Categories' img='cat.png'></Menu>
          <Menu name='Add your podcast' img='mic.png'></Menu>

          <p className='font-bold text-xs text-white m-3'>Your Library</p>

          <div className="flex flex-row items-center m-3 gap-12">
            <img src="love.png" alt="" className="cursor-pointer" />
            <img src="strokes.png" alt="" className="cursor-pointer" />
            <img src="plus.png" alt="" className="cursor-pointer" />
          </div>

          <Menu name='Your playlist' img='music.png'></Menu>
          <Menu name='Recently played' img='earphones.png'></Menu>
          <Menu name='Subscription & Hosts' img='group.png'></Menu>

          <hr className="w-full my-3 border-0 h-0.5 bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900]" />

          <Menu name='Wokpa for podcasters' img='pod.png'></Menu>
          <Menu name='Wokpa for advertisers' img='ham.png'></Menu>
          <Menu name='Read our blogs' img='blog.png'></Menu>
        </div>

      </div>

    </div>
  )
}
