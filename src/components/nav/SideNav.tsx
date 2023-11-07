import Link from 'next/link'
import SideNavLinks from './SideNavLinks'
import { NavData } from '@/utils/data'
import Image from 'next/image'
import Assets from '@/assets'

export default function SideNav () {
    return (
    <div className='bg-[#303030] text-white flex flex-col items-left h-screen fixed top-0 left-0 lg:w-1/5 md:w-1/3 sm:2/3'>

            <div className='lg:mx-8 md:mx-6 mx-6 my-4'>
                <Link href="/">
                    <Image src={Assets.WokpaLogo} alt="wokpa logo" className='w-[110px] h-[55px]' />
                </Link>
            </div>

            <div className='flex flex-col gap-1'>

                {
                    NavData.slice(0, 4).map((data) => (
                        <SideNavLinks name={data.name} img={data.img} link={data.link} key={data.name} />
                    ))
                }

                <div className="flex flex-row items-center space-x-3 ml-8 mt-3">
                    <h3 className='font-bold text-lg text-white'>Your Library </h3>
                    <Image src={Assets.Down} alt="down" className='w-[10px] h-[6px]' />
                </div>

                <div className='flex flex-row items-center md:space-x-6 lg:space-x-12 ml-8 my-3 space-x-6'>

                    <Image src={Assets.SLove} alt="love" className="w-[18px] h-[18px]" />
                    <Image src={Assets.SHam} alt="ham" className="w-[18px] h-[18px]" />
                    <Image src={Assets.SPlus} alt="plus" className="w-[30px] h-[30px]" />

                </div>

                {
                    NavData.slice(4, 7).map((data) => (
                        <SideNavLinks name={data.name} img={data.img} link={data.link} key={data.name} />
                    ))
                }

                <span className='h-[1px] bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900] my-3 w-full'></span>

                {
                    NavData.slice(7, NavData.length).map((data) => (
                        <Link href={data.link ? `${data.link}` : "/"} key={data.name}>
                            <div className="flex flex-row items-center hover:bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900] w-full tracking-normal px-6 my-1 py-2">
                                <Image src={data.img} alt={`${data.name} image`} 
                                className="w-5 h-5 lg:m-2 md:m-2.5 m-2"/>
                                <h3 className="font-bold lg:text-lg md:text-base text-[#D5D5D5]">{data.name}</h3>
                            </div>
                        </Link>
                    ))
                }
                
            </div>
        </div>
    )
}