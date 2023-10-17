import React from "react"
import { MenuType } from "../types/types"

export default function Menu(props: MenuType) {
    return (
        <div className='flex flex-row items-center hover:bg-gradient-to-r from-[#D9D9D99C] to-[#D9D9D900] cursor-pointer'>

            <div className='w-[32px] h-[32px] flex flex-row items-center relative m-1 justify-center'>
              <img src={props.img} className='w-3.5 h-3.5' />
              <span className='bg-[#3A3A3A] w-6 h-6 block absolute -z-10 rounded-[8px]'></span>
            </div>  
            <span className='font-bold text-white text-xs'>{props.name}</span>

        </div>
    )
}