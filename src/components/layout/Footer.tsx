import React from 'react'
import Logo from '/public/logo.webp'
import Image from 'next/image'
import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';



const Footer = () => {
  return (
    <>
      <div className='flex ml-24'>
            <div className=''>
    <div className=' mb-12 mt-24 '>
      <Image src={Logo} alt={"Dine Market Logo"} className='h-[30px] w-[180px]'/>
    </div>
    <p className='max-w-xs mb-12'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
    
    {/* Social Media Logos */}
    <div className='flex gap-x-10 mb-16'>
    <div className='bg-gray-200 rounded-lg h-10 w-10 center'>
    <Twitter  className=' fill-black bg-[#f1f1f1'/>
    </div>
    <div className='bg-gray-200 rounded-lg h-10 w-10 center'>
    <Facebook className=' fill-black' />
    </div>
    <div className='bg-gray-200 rounded-lg h-10 w-10 center'>
    <Linkedin className=' fill-black' />
    </div>
    </div>


    </div>


    <div className='flex mb-12 mt-24 gap-x-28 text-gray-500'>
    <div className='ml-24'>
        {/* Company */}
        <h3 className='font-semibold text-2xl mb-6 '>Company</h3>
        <ul className='text-base text-gray-400 font-medium'>
           <li className='mb-3'>About</li>
           <li className='mb-3'>Terms of Use</li>
           <li className='mb-3'>Privacy Policy</li>
           <li className='mb-3'>How it Works</li>
           <li className='mb-3'>Contact Us</li>
            
        </ul>
    </div>
    <div className=''>
        {/* Support */}
        <h3 className='font-semibold text-2xl mb-6'>Support</h3>
        <ul className='text-base text-gray-400 font-medium'>
           <li className='mb-3'>Support Carrer</li>
           <li className='mb-3'>24h Service</li>
           <li className='mb-3'>Quick Chat</li>


        </ul>
    </div>
    <div className='text-base'>
        {/* Contact */}
        <h3 className='font-semibold text-2xl mb-6'>Contact</h3>
        <ul className='text-base text-gray-400 font-medium'>
           <li>Whatsapp</li>
           <li>Support 24h</li>
          
            
        </ul>
    </div>
    </div>

    </div>

<div>
<hr className="h-8 my-12  text-gray-950 mx-auto text-lg font-bold" />
{/* Copy Write */}

</div>
</>
    
  )
}

export default Footer
