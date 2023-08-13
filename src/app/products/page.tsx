import React from 'react'
import { Products } from '@/utils/mock';
import ProductCart from '@/components/ProductCart';



const AllProducts = () => {
  return(
  <div className="flex justify-evenly flex-wrap    ">
    {  
      Products.map(item => 
      <div className="flex-1">
      <ProductCart
      key={item.id}
      productImage={item.image[0].url[0]}
      alt={item.name}
      productName={item.name}
      productPrice={item.price}
      id={item.id}
      tagline={item.tagline}
      category={item.category}
    />
    </div>
    )}
    </div>)
  
}

export default AllProducts;
