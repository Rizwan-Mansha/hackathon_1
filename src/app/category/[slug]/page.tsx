import React from 'react'
import { Products } from '@/utils/mock'
import Image, { StaticImageData } from 'next/image'
import { product } from '@/utils/types'
import ProductCart from '@/components/ProductCart'

const Page = ({params}:{params:{slug:string}}) => {
    const getProductByCategory = Products.filter((item)=>item.category === params.slug);
   
    return(
      <div className=" flex justify-evenly flex-wrap mt-16 py-10 ">
    {
    getProductByCategory.length>0 ?
    getProductByCategory.map(item => (
      <div className="flex-1">
      <ProductCart
      key={item.id}
      productImage={item.image as StaticImageData}
      alt={item.name}
      productName={item.name}
      productPrice={item.price}
      category={item.category}
      id={item.id}
    />
    
    </div>
    ))
    : <p>No Product Founded</p> }
    </div>
    )}

     
    
    
    
    
    
    //  return(
      
      //    <div className=" flex justify-evenly flex-wrap mt-16 py-10 ">
      //    { getProductByCategory.map(item => (
      //           <div className="flex-1">
      //           <ProductCart
      //           key={item.id}
      //           productImage={item.image as StaticImageData}
      //           alt={item.name}
      //           productName={item.name}
      //           productPrice={item.price}
      //           category={item.category}
      //         />
              
      //         </div>
      //         ))}
      //         </div>
      //           )
    
    // }
  


export default Page;
