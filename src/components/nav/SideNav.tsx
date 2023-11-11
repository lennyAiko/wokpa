"use client";
import Link from 'next/link'
import SideNavLinks from './SideNavLinks'
import { NavData } from '@/utils/data'
import Image from 'next/image'
import Assets from '@/assets'
import Search from '../headers/Search'
import { usePathname } from 'next/navigation';

import {useState} from 'react'
import Auth from '../headers/Auth';

export default function SideNav () {

    const [toggle, setToggle] = useState(false)

    const pathName = usePathname()

    return (
        <>
            <div className='bg-[#303030] text-white flex-col items-left h-full fixed top-0 left-0 lg:w-1/5 sm:w-1/3 sm:flex hidden overflow-y-scroll'>
            
                <div className='lg:mx-8 md:mx-6 mx-6 my-4'>
                    <Link href="/">
                        <Image src={Assets.WokpaLogo} alt="wokpa logo" className='w-[110px] h-[55px]' />
                    </Link>
                </div>

                <div className='flex flex-col gap-1'>

                    {
                        NavData.slice(0, 4).map((data) => (
                            <SideNavLinks name={data.name} img={data.img} link={data.link} key={data.id} />
                        ))
                    }

                    <div className="flex flex-row items-center space-x-3 ml-8 mt-3">
                        <h3 className='font-bold text-lg text-white'>Your Library </h3>
                        <Image src={Assets.Down} alt="down" className='w-[10px] h-[6px]' />
                    </div>

                    <div className='flex flex-row items-center md:space-x-6 lg:space-x-12 ml-8 my-3 space-x-6'>

                        <Link className={`${pathName === "/favourites" ? 'active active:bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900]': ''}hover:bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900] w-7 h-7 flex items-center justify-center`} href={"/favourites"}>
                            <Image src={Assets.SLove} alt="love" className="w-[18px] h-[18px]" />
                        </Link>
                        <Link className={`${pathName === "/queue" ? 'active active:bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900]': ''}hover:bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900] w-7 h-7 flex items-center justify-center`} href={"/queue"}>
                            <Image src={Assets.SHam} alt="ham" className="w-[18px] h-[18px]" />
                        </Link>
                        <Link className={`${pathName === "/favourites" ? 'active active:bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900]': ''}hover:bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900] w-7 h-7 flex items-center justify-center`} href={"/"}>
                            <Image src={Assets.SPlus} alt="plus" className="w-[30px] h-[30px]" />
                        </Link>

                    </div>

                    {
                        NavData.slice(4, 7).map((data) => (
                            <SideNavLinks name={data.name} img={data.img} link={data.link} key={data.id} />
                        ))
                    }

                    <span className='h-[1px] bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900] my-3 w-full'></span>

                    {
                        NavData.slice(7, NavData.length).map((data) => (
                            <Link href={data.link ? `${data.link}` : "/"} key={data.id}>
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

            <div className="flex justify-between bg-[#303030] pr-2 items-center sm:hidden flex-1">
                <Search />
                
                <Image src={toggle ? Assets.Close : Assets.Menu} alt="menu icon" className='w-7 h-7 object-contain' onClick={() => setToggle((prev) => !prev)} />
            </div>

            {/* MOBILE */}
            <div className={`bg-[#303030] text-white items-left h-full fixed top-0 left-0 lg:w-1/5 sm:w-1/3 z-40 ${ toggle ? 'flex-col': 'hidden'}`}>

                <div className='sm:mx-24 mx-6 my-2.5 sm:my-12 sm:justify-start justify-center sm:items-start items-center'>
                    <Link href="/">
                        <Image src={Assets.WokpaLogo} alt="wokpa logo" className='w-[110px] h-[55px]' />
                    </Link>
                </div>

                <Auth />
                
                <div className='flex flex-col gap-1'>

                    {
                        NavData.slice(0, 4).map((data) => (
                            <SideNavLinks name={data.name} img={data.img} link={data.link} key={data.id} />
                        ))
                    }

                    <div className="flex flex-row items-center space-x-3 ml-8 mt-3">
                        <h3 className='font-bold text-lg text-white'>Your Library </h3>
                        <Image src={Assets.Down} alt="down" className='w-[10px] h-[6px]' />
                    </div>

                    <div className='flex flex-row items-center md:space-x-6 lg:space-x-12 ml-8 my-3 space-x-6'>

                        <Link href="/favourites" className='hover:bg-white'>
                            <Image src={Assets.SLove} alt="love" className="w-[18px] h-[18px]" />
                        </Link>

                        <Link href="/">
                            <Image src={Assets.SHam} alt="ham" className="w-[18px] h-[18px]" />
                        </Link>
                        
                        <Link href="/">
                            <Image src={Assets.SPlus} alt="plus" className="w-[30px] h-[30px]" />
                        </Link>

                    </div>

                    {
                        NavData.slice(4, 7).map((data) => (
                            <SideNavLinks name={data.name} img={data.img} link={data.link} key={data.id} />
                        ))
                    }

                    <span className='h-[1px] bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900] my-3 w-full'></span>

                    {
                        NavData.slice(7, NavData.length).map((data) => (
                            <Link href={data.link ? `${data.link}` : "/"} key={data.id}>
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
        </>
    )
}