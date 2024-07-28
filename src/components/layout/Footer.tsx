import Link from "next/link";
import { Button } from "../atomics/Buttons";
import Image from "next/image";
import { FOOTER_MENU } from "@/constants/footer";

export const Footer = () => {
  return (
    <footer>
      <div className="hidden md:flex flex-row justify-center items-center p-9 bg-brown-400  text-white gap-10">
        <h2 className="text-2xl font-bold">FREE DELIVERY</h2>
        <div className="border-r-[1px] border-white w-[1px] h-[40px]"></div>
        <p className="text-sm">For orders over $199</p>
        <Button variant="secondary">SHOP COLLECTIONS</Button>
      </div>
      <div className="bg-gray-1000 pt-14 pb-20 text-white">
        <div className="container">
          <div className="grid grid-flow-col grid-rows-1 grid-cols-5 gap-4">
            <div className="col-span-2 row-span-2">
              <h2 className="font-bodoni text-3xl mb-6">LE DIAMONDS</h2>
              <p className="text-sm mb-4 font-extralight max-w-sm">With Le Diamonds, we hope to empower and inspire women of all ages, giving them the courage and confidence to power through each day with their choice of elegant and charming contemporary jewellery.</p>
              <Image src={"/images/cards.png"} width={200} height={32} alt="Cards" />
            </div>
            {
              Object.keys(FOOTER_MENU).map((menu) => (
                <div className={"row-span-2"}>
                  <h3 className="font-[700] mb-4 uppercase">{menu}</h3>
                  <ul>
                    {
                      FOOTER_MENU[menu as "collections"].map((item) => (
                        <li className="mb-3">
                          <Link href={item.href}>{item.label}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
            <div>
              <h3 className="font-[700] mb-4 uppercase">contact info</h3>
              <ul>
                <li className="mb-3">
                  (+603) 95441361
                </li>
                <li className="mb-3">
                  info@lediamonds.com
                </li>
              </ul>
            </div >
          </div>

          <p className="text-xs text-center md:text-right">©2022 Le Diamonds - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}