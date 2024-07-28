'use client'

import Link from "next/link";
import { NAVBAR_ITEMS } from "@/constants/navbar";
import { ButtonIcon } from "../atomics/Buttons";

interface INavbarProps {
  onOpenDrawer?: () => void;
}

export const Navbar = ({ onOpenDrawer }: INavbarProps) => {
  return (
    <nav className="fixed w-full left-0 top-0 bg-white shadow-md z-[1024]">
      <div className="flex md:hidden flex-row justify-center items-center p-2 bg-brown-400 text-white gap-10">
        <p className="text-xs">FREE DELIVERY FOR ORDERS ABOVE $199</p>
      </div>
      <div className="flex flex-row container justify-between py-7">
        <div className="flex items-center gap-14">
          <p className="font-bodoni text-lg md:text-2xl">LE DIAMONDS</p>
          <ul className="hidden md:flex flex-row gap-14">
            {
              NAVBAR_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <p className="hidden md:flex text-xs">FREE DELIVERY FOR ORDERS ABOVE $199</p>
          <ButtonIcon src={"/icons/shopping-cart.svg"} />
          <ButtonIcon src={"/icons/user.svg"} className="hidden md:block" />
          <ButtonIcon src={"icons/menu-burger.svg"} className="block md:hidden" onClick={onOpenDrawer} />
        </div>
      </div>
    </nav>
  )
}