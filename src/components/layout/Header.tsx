"use client";
import React from "react";
import logo from "/public/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Search } from "lucide-react";
import { Input } from "../ui/input";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Hamburger from "../Hamburger";

const Header = () => {
  const cartValue = useSelector(
    (state: RootState) => state.counter.totalQuantity
  );

  return (
    <div className="flex justify-between items-center px-8 py-6 ">
      <Link href={"/"}>
        {" "}
        <Image src={logo} alt="logo" className="w-32 md:w-36 lg:w-40 xl:w-48" />
      </Link>
      <ul className="flex justify-evenly mx-4 items-center md:text-lg   gap-x-4 lg:gap-x-10  max-md:hidden  ">
        <li className="">
          {" "}
          <Link href="/category/female">Female</Link>{" "}
        </li>
        <li className="">
          {" "}
          <Link href="/category/male">Male</Link>{" "}
        </li>
        <li className="">
          {" "}
          <Link href="/category/kids">Kids</Link>{" "}
        </li>
        <li className="">
          {" "}
          <Link href="/products/">Products</Link>{" "}
        </li>
      </ul>
      <div className="flex justify-center items-center gap-x-2 sm:gap-x-3 md:gap-x-5">
        <div className="flex justify-center items-center rounded-xl  border-gray-200 ">
          <Search className="h-7 md:rounded-l-xl md:border-2 " />
          <Input
            type="input"
            placeholder="What you looking for"
            className=" h-7 w-40 lg:w-48 flex justify-center items-center rounded-r-xl  max-md:hidden md:block "
          />
        </div>

        <div className="relative h-10 w-10 rounded-full  bg-gray-200 flex justify-center items-center">
          <span className="absolute right-1 top-0 rounded-full bg-red-500 px-1 py-0.5 text-sx text-white">
            {cartValue}
          </span>
          <ShoppingCart className="h-6 w-6" />
        </div>
        <div className="relative md:hidden mr-4">
          <Hamburger />
        </div>
      </div>
    </div>
  );
};

export default Header;
