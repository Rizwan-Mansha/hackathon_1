"use client";
// components/Hamburger.tsx
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import hamburger from "/public/hamburger.svg";
import cross from "/public/cross-icon.svg";

const Hamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ">
      <button onClick={toggleOpen} className="focus:outline-none">
        <Image src={hamburger} alt="Hamburger" width={25} height={25} />
      </button>

      {isOpen && (
        <div className="absolute  -top-10 -right-16 mt-2 w-56 min-h-screen bg-white border border-gray-200 rounded shadow-lg">
          <ul className="ml-4">
            <button onClick={toggleOpen} className=" focus:outline-none ml-48 ">
              <Image
                src={cross}
                alt="cross"
                width={60}
                height={60}
                className=""
              />
            </button>
            <li className="mb-4">
              {" "}
              <Link href="/category/female">Female</Link>{" "}
            </li>
            <li className="mb-4">
              {" "}
              <Link href="/category/male">Male</Link>{" "}
            </li>
            <li className="mb-4">
              {" "}
              <Link href="/category/kids">Kids</Link>{" "}
            </li>
            <li className="mb-4">
              {" "}
              <Link href="/products/">Products</Link>{" "}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
