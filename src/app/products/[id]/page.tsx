import React from "react";
import { Products } from "@/utils/mock";
import Image, { StaticImageData } from "next/image";
// import Quantity from "@/components/Quantity";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddToCart from "@/components/AddToCart";

const getProductDetail = (id: number | string) => {
  return Products.filter((product) => product.id == id);
};

const Page = ({ params }: { params: { id: number } }) => {
  const result = getProductDetail(params.id);

  const sizes = ["xs", "s", "m", "l", "xl"];

  return (
    <div className=" flex flex-wrap py-10 mt-16  ">
      {result.map((product) => (
        <div key={product.id} className="flex justify-between gap-6">
          {/* Left Image */}
          <div className="">
            <Image src={product.image} alt={product.name} />
          </div>
          {/* Right Content */}
          <div>
            <div>
              <h1 className="text-2xl">{product.name}</h1>
              <h2 className="text-base text-gray-400 font-semibold">
                {product.tagline}
              </h2>
            </div>
            <div>
              <h3 className="text-xs mt-6 font-semibold">SELECT SIZE</h3>
              {/* Sizes */}
              <div className="flex gap-x-6">
                {sizes.map((size) => (
                  <div className="h-8 w-8 rounded-full hover:shadow-2xl mt-2 center">
                    <span className=" font-bold text-sm text-gray-600">
                      {size.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center mt-6">
              {/* Quantity */}
              <h3 className="font-semibold text-sm mr-6">Quantity: </h3>
              {/* <Quantity /> */}
              </div>
              {/* AddToCart Button */}
              <div className="mt-6 flex items-center ">
                <button className="flex items-center bg-black text-white pl-4">
                <ShoppingCart/>
                <AddToCart />

                </button>
             
                         <h2 className="mx-2 font-bold text-2xl">${product.price.toFixed(2)}</h2>
                         </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
