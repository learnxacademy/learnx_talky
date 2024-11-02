import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'

interface HomeCardProps {
    className: string,
    img: string,
    title: string,
    description: string,
    handleClick: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <div className={cn('px-3 py-4 flex flex-col justify-between w-full xl:max-w-[240px] min-h-[220px] rounded-[10px] cursor-pointer', className)} onClick={handleClick}>
        <div className="flex-center glassmorphism size-12 rounded-[10px]">
              <Image src={img} alt="meeting" width={24} height={24} />  
        </div>

        <div className="flex flex-col gap-1 mt-3">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-sm font-normal text-white">{description}</p>   
        </div>
    </div>
  )
}

export default HomeCard