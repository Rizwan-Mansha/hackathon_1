import React from 'react'
import Logo from '/public/logo.webp'
import Image from 'next/image'
import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <div className='flex ml-24'>
            <div className='mt-12'>
    <div className=' mb-12  '>
      <Image src={Logo} alt={"Dine Market Logo"} className='h-[30px] w-[180px]'/>
    </div>
    <p className='max-w-xs mb-12'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
    
    {/* Social Media Logos */}
    <div className='flex gap-x-10 mb-16'>
    <div className='bg-gray-200 rounded-lg h-10 w-10 center'>
    <Link href={"https://twitter.com/Muhamma60041182"} target='blank'><Twitter  className=' fill-black bg-[#f1f1f1'/></Link>
    </div>
    <div className='bg-gray-200 rounded-lg h-10 w-10 center'>
    <Link href={"https://www.facebook.com/profile.php?id=100017772258554"} target='blank'><Facebook className=' fill-black' /></Link>
    </div>
    <div className='bg-gray-200 rounded-lg h-10 w-10 center'>
    <Linkedin className=' fill-black' />
    </div>

    <div className='bg-gray-200 rounded-lg h-10 w-10 center'>
       <Link href={"https://github.com/Rizwan-Mansha"} target='blank'>   <AiFillGithub className="h-7 w-7"/></Link>
    </div>
    </div>


    </div>


    <div className='flex mb-12 mt-12 gap-x-28 text-gray-500'>
    <div className='ml-24'>
        {/* Company */}
        <h3 className='font-semibold text-2xl mb-6 '>Company</h3>
        <ul className='text-base text-gray-400 font-medium'>
        <Link href={"#"}> <li className='mb-3'>About</li></Link>
           <Link href={"#"}>  <li className='mb-3'>Terms of Use</li></Link>
           <Link href={"#"}> <li className='mb-3'>Privacy Policy</li></Link>
           <Link href={"#"}> <li className='mb-3'>How it Works</li></Link>
           <Link href={"#"}><li className='mb-3'>Contact Us</li></Link>
            
        </ul>
    </div>
    <div className=''>
        {/* Support */}
        <h3 className='font-semibold text-2xl mb-6'>Support</h3>
        <ul className='text-base text-gray-400 font-medium'>
        <Link href={"#"}> <li className='mb-3'>Support Carrer</li></Link>
           <Link href={"#"}> <li className='mb-3'>24h Service</li></Link>
           <Link href={"#"}> <li className='mb-3'>Quick Chat</li></Link>


        </ul>
    </div>
    <div className='text-base'>
        {/* Contact */}
        <h3 className='font-semibold text-2xl mb-6'>Contact</h3>
        <ul className='text-base text-gray-400 font-medium'>
           <Link href={"#"}><li>Whatsapp</li></Link>
           <Link href={"#"}><li>Support 24h</li></Link>
          
            
        </ul>
    </div>
    </div>

    </div>

<div>
<hr className=" text-gray-950 mx-auto text-lg font-bold" />
{/* Copy Write */}

<div className='flex justify-between px-32 py-5 text-gray-400'>
<div className=''>
  <p>Copyright © 2022</p>
  <h2>Dine Market</h2>
</div>
<div >
  <p>Design by.<span className='font-bold text-black text-md'>Weird</span></p>
  <h2 className='font-bold text-black text-md'>Design Studio</h2>
</div>
<div >
<p>Code by.<span className='font-bold text-black text-md'>Rizwan-Mansha</span></p>
<h2 className='font-bold text-black text-md'>on github</h2>
</div>
</div>


</div>
</>
    
  )
}

export default Footer
