import { Button } from "../atomics/Buttons";
import Image from "next/image";

export const Banner = () => {
  return (
    <section className="relative bg-[url('/images/banner-ring.jpg')] bg-[length:726px_455px] bg-right bg-no-repeat">
      <div className="md:min-h-[60vh] container flex flex-col justify-center">
        <div className="absolute right-0 top-0">
          <Image src="/images/banner-line-1.png" width={207} height={68} alt="Banner line" />
        </div>
        <div className="mt-2">
          <div className="flex flex-row items-center">
            <div className="center-line border-black w-6"></div>
            <p className="text-xs">MORE THAN JUST JEWELLERY</p>
          </div>
          <h1 className="font-playfair text-6xl my-7">Elegance & Eternity.</h1>
          <p className="text-xs text-gray-600">FINELY CRAFTED LAB-GROWN MOISSANITE JEWELLERY</p>
        </div>
        <div className="flex flex-col">
          <Button className="w-fit mt-5 order-2 xl:order-1">SHOP COLLECTIONS</Button>
          <div className="absolute left-0 bottom-0 order-1 xl:order-2">
            <Image src="/images/banner-line-2.jpg" width={728} height={72} alt="Banner line" />
          </div>
        </div>
      </div>
    </section>
  );
}