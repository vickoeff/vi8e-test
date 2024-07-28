'use client'

import { Banner } from "@/components/home/Banner";
import { Services } from "@/components/home/Services";
import { Products } from "@/components/home/Products";
import { About } from "@/components/home/About";
import { BestSelling } from "@/components/home/BestSelling";
import { Blogs } from "@/components/home/Blogs";
import { Gallery } from "@/components/home/Gallery";
import { useState } from "react";
import { Drawer, DrawerContext } from "@/components/layout/Drawer";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <DrawerContext.Provider value={{ isOpenDrawer: isOpenDrawer }}>
      <Navbar onOpenDrawer={() => setIsOpenDrawer(true)} />
      <main className="mt-[88px] overflow-hidden">
        <Drawer onClose={() => setIsOpenDrawer(false)} />
        <Banner />
        <Services />
        <Products />
        <About />
        <BestSelling />
        <Blogs />
        <Gallery />
      </main>
      <Footer />
    </DrawerContext.Provider>
  );
}
