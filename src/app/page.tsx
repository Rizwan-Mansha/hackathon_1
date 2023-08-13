import Image from "next/image";
import Header from "@/components/layout/Header";
import Hero from "@/views/Hero";
// import Product1 from '../views/ProductList'
import Promotions from '@/views/Promotions'
import ProductSection from "@/views/ProductSection";
import UniqueAthentic from "@/views/UniqueAthentic";
import SubscribeNews from "@/views/SubscribeNews";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <Product1 /> */}
      <Promotions />
      <ProductSection />
      <UniqueAthentic />
      <SubscribeNews />
    </div>
  );
}
