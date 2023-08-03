import React from "react";
import Image from "next/image";
import Product1 from "/public/Product1.png";
import Product2 from "/public/Product2.png";
import Product3 from "/public/Product3.png";
import ProductCart from "@/components/ProductCart";
import { Button } from "@/components/ui/button";
import { Products } from "@/utils/mock";

const ProductList = () => {
 const productChanks= Products.slice(0, 3);

  return (
    <section>
<div className="flex flex-row items-center mt-8 pl-14 font-bold text-lg">

{
      // productChanks.map(product => 
      //   <div className="flex-1">
      // <ProductCart
      //   key={product.id}
      //   productImage={Product1}
      //   alt="Brushed Raglan Sweatshirt"
      //   productName={product.name}
      //   productPrice={product.price}
      // />
      // </div>
      // )
      }






    {/* <div className="flex-1">
      <ProductCart
        productImage={Product1}
        alt="Brushed Raglan Sweatshirt"
        productName="
        Brushed Raglan Sweatshirt"
        productPrice={195}
      />
      </div>
    <div className="flex-1">
      <ProductCart
        productImage={Product2}
        alt="Cameryn Sash Tie Dress"
        productName="Cameryn Sash Tie Dress"
        productPrice={545}
        
      />
      </div>

      <div className="flex-1">
        <ProductCart
        productImage={Product3}
        alt="Flex Sweatshirt"
        productName="Flex Sweatshirt"
        productPrice={175}
        />
        </div>        
    */}
        </div>
    </section>
  );
};

export default ProductList;

