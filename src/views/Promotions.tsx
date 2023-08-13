import React from "react";
import Image from "next/image";
import SummerSeason from "/public/Promotions/event1.webp";
import FlexSweatshirt from "/public/Promotions/event2.webp";
import Bomberjacket from "/public/Promotions/event3.webp";
import { Button } from "@/components/ui/button";
import HeadingSection from "@/components/HeadingSection";
const Promotions = () => {
  return (
    <div className="mb-12">

      <HeadingSection sectionName="PROMOTIONS" heading="Our Promotions Events" />
     
      {/* div event card */}
      {/* main div */}
      <div className=" flex  justify-evenly">
        <div className="flex flex-auto  flex-col">
          <div className=" flex-1 relative max-w-lg bg-gray-300 ">
            <div className=" py-6 px-10 ">
              <span className="font-bold text-3xl">GET UP</span> <br />
              <p className="flex items-center font-bold text-3xl">
                <span className="mr-2">TO</span>
                <span className=" text-4xl">60%</span>
              </p>
              <span className="font-medium max-w-sm text-lg">
                For the
                <br /> summer <br /> season
              </span>
            </div>
            <div className="bottom-0 right-4 absolute">
              <Image src={SummerSeason} alt="Summer Season" className="" />
            </div>
          </div>

          <div className="flex-1 max-w-lg justify-center">
            <div className=" text-center text-white mt-4  left-0 bg-[#212121]  ">
              <p className=" pt-10 font-bold text-4xl">GET 30% Off </p>
              <p className="py-4">USE PROMO CODE</p>
              <div className="pb-8">
                <Button className=" bg-gray-600 tracking-[0.30rem] font-semibold text-lg hover:bg-gray-600 w-72">
                  DINEWEEKENDSALE
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex  space-x-4">
          <div className="ml-5 bg-[#EFE1C7]">
            <div className="ml-5">
            <h3 className="mt-7">Flex Sweatshirt</h3>
            <div className="flex gap-x-2 font-semibold text-lg">
              <p className="line-through font-medium">$100.00</p>
              <p>$75.00</p>
            </div>
            </div>
            {/* <div className="relative"> */}
            <div className="mt-4 ">
              <Image
                src={FlexSweatshirt}
                alt={"Flex Sweatshirt"}
                className="h-[340px]"
              />
            </div>
          </div>

          <div className="ml-5 bg-[#D7D7D9] ">
          <div className="ml-5">
            <h3 className="mt-7">Flex Push Button Bomber</h3>
            <div className="flex gap-x-2 font-semibold text-lg">
              <p className="line-through font-medium">$225.00</p>
              <p>$190.00</p>
            </div>
            </div>

            <div className="mt-4">
              <Image
                src={Bomberjacket}
                alt={"Flex Push Button Bomber"}
                className="h-[340px]"
              />
            </div>
          </div>

          {/* Row Products */}
        </div>
      </div>
    </div>
  );
};

export default Promotions;
