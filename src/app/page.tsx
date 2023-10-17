import Image from 'next/image'

import Menu from './component/menu'

export default function Home() {
  return (
    <div className='w-screen h-screen bg-[#212121]'>

      {/* SIDE NAV BAR */}
      <div className='shrink-0 bg-[#303030] flex flex-col sticky w-[15%] h-full p-1'>

        <img src="wokpalogo.png" className='w-16 h-8 shrink-0 top-[4px] left-[15px] relative mb-4' />

        <div>
          <Menu name='Discover' img='/menu/sound.png'></Menu>
          <Menu name='Top 50 podcasts' img='/menu/star.png'></Menu>
          <Menu name='Categories' img='/menu/cat.png'></Menu>
          <Menu name='Add your podcast' img='/menu/mic.png'></Menu>

          <p className='font-bold text-xs text-white m-3'>Your Library</p>

          <div className="flex flex-row items-center m-3 gap-12">
            <img src="/menu/love.png" alt="" className="cursor-pointer" />
            <img src="/menu/strokes.png" alt="" className="cursor-pointer" />
            <img src="/menu/plus.png" alt="" className="cursor-pointer" />
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

    </div>
  )
}
