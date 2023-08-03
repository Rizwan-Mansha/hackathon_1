import Image from "next/image";
import Header from "@/components/layout/Header";
import Hero from "@/views/Hero";
import Product1 from '../views/ProductList'

export default function Home() {
  return (
    <div>
      <Hero />
      <Product1 />
    </div>
  );
}
