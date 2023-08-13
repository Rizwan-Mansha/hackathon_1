'use client'
import React from 'react'
import logo from '/public/logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import {ShoppingCart, Search} from 'lucide-react'
import { Input } from '../ui/input'

import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'



const Header = () => {
  const cartValue = useSelector((state:RootState) => state.counter.totalQuantity);
 
  return (
    <div className='flex justify-between items-center px-8 py-6'>
     <Link href={"/"}> <Image src={logo} alt="logo" className='w-40' /></Link>
      <ul className="flex gap-x-10">
        <li className="text-lg"> <Link href="/category/female">Female</Link> </li>
        <li className="text-lg"> <Link href="/category/male">Male</Link> </li>
        <li className="text-lg"> <Link href="/category/kids">Kids</Link> </li>
        <li className="text-lg"> <Link href="/products/">All Products</Link> </li>
      </ul>

      <div className='flex justify-center items-center bg-white rounded-md border border-gray-200 '>
      
      <Search className='h-4'/> 
      
      <div className='flex justify-center items-center '>
      <Input type="input" placeholder='What you looking for' className='border-1 h-7 w-72'/>
      </div>
      </div>

      <div className='relative h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center'>
        <span className='absolute right-1 top-0 rounded-full bg-red-500 px-1 py-0.5 text-sx text-white'>
          {cartValue}</span>
        <ShoppingCart className='h-6 w-6' />
      </div>
    </div>
  )
}

export default Header