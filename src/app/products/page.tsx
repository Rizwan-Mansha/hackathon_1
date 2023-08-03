import React from 'react'
import { Products } from '@/utils/mock';
import ProductCart from '@/components/ProductCart';
import Image, { StaticImageData } from 'next/image';
import Product1 from '/public/Product1.png'
import { product } from "@/utils/types";


const AllProducts = () => {
  return(
  <div className="flex justify-evenly flex-wrap mt-16 py-10  ">
    {  
      Products.map(item => 
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
    )}
    </div>)
  
}

export default AllProducts;
