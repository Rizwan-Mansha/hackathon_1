import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import {FC} from 'react';
import AddToCart from '@/components/AddToCart'



interface ProductTypes {
  productImage: StaticImageData;
  alt: string;
  productName: string;
  productPrice: number;
  category:string;
  id:number;
}




const ProductCart = (props:ProductTypes) => {
  return (
    <>
    <Link href={`/products/${props.id}`}>
    <div className="w-72 font-bold text-lg px-5 ">
      
      <div>
        <Image src={props.productImage} alt={props.alt} />
        <h3>{props.productName}</h3>
        <p>${props.productPrice}</p> 
        <p>Category 
          <span className="text-base font-normal ">{props.category}</span>
        </p>
        </div>
        </div>
        </Link>
        <AddToCart />
        </>
        
        
);
};

export default ProductCart;