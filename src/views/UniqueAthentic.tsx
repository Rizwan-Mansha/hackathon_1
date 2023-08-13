'use client'
import Phrases from '@/components/Phrases';
import Image7 from '/public/Unique.webp'
import Image, { StaticImageData } from 'next/image';
import { Button } from '@/components/ui/button';
import {Products} from '@/utils/mock'
import ProductCart from '@/components/ProductCart';
import Link  from 'next/link';
  


const UniqueAthentic = () => {
  return (
    <>
        <div className='flex justify-end mt-36 mb-2 ml-10'>
       <p className='font-bold text-5xl'> Unique and <br/>Authentic Vintage <br/>Designer Jewellery</p>
        </div>

    <div className='flex '>
            {/* Phrases Div */}
            
            <div className='relative'>
  <div className='absolute center mt-5 text-gray-300 opacity-40 text-9xl font-bold -z-10'>
    Different from others
  </div>
  <div className='flex '>
    <Phrases heading={"Using Good Quality Materials"} description={"Experience premium quality products crafted with the finest materials for long-lasting durability."}/>
    <Phrases heading={"100% Handmade Products"} description={"Embrace the charm of uniqueness with our exclusive collection of 100% handmade products."}/>
  </div>
  <div className='flex '>
    <Phrases heading={"Modern Fashion Design"} description={"Step into the world of contemporary style with our modern fashion designs, curated."}/>
    <Phrases heading={"Discount for Bulk Orders"} description={"Save big on bulk purchases! Avail incredible discounts when you order in large quantities."}/>
  </div>
</div>


        {/* Image Div */}
        <div className='mr-8 center'>
            <Image src={Image7} alt='Imperial Alpaca Hoodie' className='' />
        </div>

        {/* Paragraph */}
        <div className='flex-1 space-x-12 relative mt-10'>
        <p className=''>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
        <div className=' px-5 py-10  shadow-transparent'>
        <Button className='absolute left-0 rounded-none bg-gray-900 h-16 w-28 text-sm font-semibold' onClick={()=>(<Link href={"/products/"}></Link>)}>See All <br />Product </Button>
        </div>
        </div>


    </div>
      
    </>
  )
}

export default UniqueAthentic;
