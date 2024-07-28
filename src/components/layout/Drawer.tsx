'use client'

import { createContext, useContext } from "react";
import { ButtonIcon } from "../atomics/Buttons";
import Link from "next/link";
import { NAVBAR_ITEMS } from "@/constants/navbar";

export const DrawerContext = createContext({ isOpenDrawer: false });

interface IDrawerProps {
  onClose: () => void;
};

export const Drawer = ({ onClose }: IDrawerProps) => {
  const { isOpenDrawer } = useContext(DrawerContext);

  return (
    <div className={`fixed ${isOpenDrawer ? "opacity-100" : "opacity-0 pointer-events-none"} w-full h-full top-0 left-0 bg-[#00000079] z-[2024] transition-opacity`}>
      <div className={`ml-auto ${isOpenDrawer ? "translate-x-0" : "translate-x-64 pointer-events-none"} max-w-64 h-full py-14 px-8 bg-white text-end`}>
        <ButtonIcon src={"/icons/x-mark.svg"} onClick={onClose} />
        <ul className="flex flex-col gap-3 mt-5">
          {
            NAVBAR_ITEMS.map((item) => (
              <li key={item.label} className="text-end">
                <Link onClick={onClose} href={item.href}>{item.label}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}