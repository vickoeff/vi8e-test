import Link from "next/link";
import { NAVBAR_ITEMS } from "@/constants/navbar";
import { ButtonIcon } from "../atomics/Buttons";

export const Navbar = () => {
  return (
    <nav className="sticky left-0 top-0 bg-white py-7 shadow-md z-[1024]">
      <div className="flex flex-row container justify-between">
        <div className="flex items-center gap-14">
          <p className="font-bodoni text-2xl">LE DIAMONDS</p>
          <ul className="flex flex-row gap-14">
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
          <p className="text-xs">FREE DELIVERY FOR ORDERS ABOVE $199</p>
          <ButtonIcon src={"/icons/shopping-cart.svg"} />
          <ButtonIcon src={"/icons/user.svg"} />
        </div>
      </div>
    </nav>
  )
}