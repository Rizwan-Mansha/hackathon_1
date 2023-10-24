import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';

const SubscribeNews = () => {
  return (
    <div className='relative my-40 ml-4 flex flex-col items-center'>
        <div className='absolute z-10  text-gray-300 opacity-40 font-bold text-9xl'>
            <p className=''>Newsletter</p>
            </div>
            <p className='font-bold text-3xl tracking-widest'>Subscribe Our Newsletter</p>
            <p className='my-8 tracking-wide'>Get the latest information and promo offers directly</p>
        <div className='flex gap-x-2'>
        <Input placeholder='Input email address' className='rounded-none h-10 w-72 border-black'/>
        <Button className='rounded-none w-36 h-10 font-semibold'>Get Started</Button>
        </div>

       
    </div>
  )
}

export default SubscribeNews;
