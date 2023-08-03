import React from 'react'
import { Products } from '@/utils/mock'
import Image, { StaticImageData } from 'next/image'

const getProductDetail = (id: number |string)=>{
    return Products.filter((product)=>product.id == id)
}


const Page = ({params}:{params:{id:number}}) => {
const result = getProductDetail(params.id);
   
    return(
    <div className=" flex justify-between flex-wrap mt-8  ">
        {
          result.map((product)=>(
            <div className=' pl-14 font-semibold text-lg'>
            <div key={product.id} className='flex-1 '>
              <Image src={product.image} alt={product.name}/>
            </div>
            <p>Name {product.name}</p>
            <p>Price {product.price}</p>
            <p>Category {product.category}</p>
            </div>
         ) )
        }
    </div>
  
  )

     
    
    
    
    
    
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
  
}

export default Page;
