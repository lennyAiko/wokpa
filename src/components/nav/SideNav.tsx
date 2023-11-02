import Link from 'next/link'
import SideNavLinks from './SideNavLinks'
import { NavData } from '@/utils/data'

export default function SideNav () {
    return (
    <div className='bg-[#303030] text-white flex flex-col items-left lg:w-[20%] md:w-[30%] sm:w-[40%] min-h-screen sticky'>

            <div className='lg:mx-8 md:mx-6 mx-5 my-3'>
                <Link href="/">
                    <img src="/sidenav/wokpalogo.svg" alt="wokpa logo" />
                </Link>
            </div>

            <div className='flex flex-col gap-1'>

                {
                    NavData.slice(0, 4).map((data) => (
                        <SideNavLinks name={data.name} img={data.img} link={data.link} />
                    ))
                }

                <div className="flex flex-row items-center space-x-3 ml-5">
                    <h3 className='font-bold text-lg text-white'>Your Library </h3>
                    <img src="/sidenav/down.svg" alt="down" />
                </div>

                <div className='flex flex-row items-center md:space-x-6 lg:space-x-8 ml-5 my-3 space-x-6'>

                    <img src="/sidenav/love.svg" alt="love" />
                    <img src="/sidenav/ham.svg" alt="ham" />
                    <img src="/sidenav/plus.svg" alt="plus" />

                </div>

                {
                    NavData.slice(4, 7).map((data) => (
                        <SideNavLinks name={data.name} img={data.img} link={data.link} />
                    ))
                }

                <span className='h-[1px] bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900] m-3'></span>

                {
                    NavData.slice(7, NavData.length).map((data) => (
                        <Link href={data.link ? `${data.link}` : "/"}>
                            <div className="flex flex-row items-center hover:bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900] w-full tracking-normal p-2 mr-2">
                                <img src={data.img} alt={`${data.name} image`} 
                                className="w-5 h-5 lg:m-2 md:m-2.5 m-2"/>
                                <h3 className="font-bold text-base text-[#D5D5D5]">{data.name}</h3>
                            </div>
                        </Link>
                    ))
                }
                
            </div>
        </div>
    )
}