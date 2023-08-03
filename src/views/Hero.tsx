import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import HeroImage from "../../public/hero-img.webp"
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-y-10 py-6">
      {/* content */}
      <div className="flex-1">
        <Badge className="px-4 py-2 rounded-lg font-semibold text-md bg-blue-200 text-blue-700">
        Sale 70%
        </Badge>
        <h1 className="text-gray-800 max-w-sm scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl mt-6">
          An Industrial Take on Streetwear
        </h1>
        <p className="max-w-sm text-lg text-gray-600  leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <div className="flex  items-center py-2 px-2 mt-4 text-white font-bold">
        
        <Button className=" bg-black h-20 rounded-none left-0">
        <ShoppingCart className="mr-2"/>
          Start Shopping
          </Button>
        </div>
      </div>

      {/* image */}
      
      <div className="flex-1">
     
      <Image src={HeroImage} alt="HeroImage"/>
     
      </div>
    </section>
  );
};

export default Hero;
