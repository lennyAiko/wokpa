import React from 'react'
import { CardType } from '../types/types'

export default function Card({name, img, author, catImg, category}: CardType) {
    return (
        <div className='bg-[#30303080] w-fit px-1.5 py-0.5 rounded-sm items-center justify-start'>
            <img src={img} alt="" className="w-36 h-36 rounded-lg" />
            <p className="text-white text-[10px] font-bold m-1">{name}</p>
            <p className='text-white text-[8px] m-1 font-medium'>By: {author}</p>
            <div className="flex flex-row items-center gap-1 m-1">
                <img src={catImg} alt="" className="w-2.5" />
                <p className="text-[8px] text-[#B0B0B0] font-medium">{category}</p>
            </div>
        </div>

    )
}