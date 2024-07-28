'use client'

import { Banner } from "@/components/home/Banner";
import { Services } from "@/components/home/Services";
import { Products } from "@/components/home/Products";
import { About } from "@/components/home/About";
import { BestSelling } from "@/components/home/BestSelling";
import { Blogs } from "@/components/home/Blogs";
import { Gallery } from "@/components/home/Gallery";

export default function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <Products />
      <About />
      <BestSelling />
      <Blogs />
      <Gallery />
    </main>
  );
}
