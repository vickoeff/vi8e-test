import { Button } from "../atomics/Buttons";
import Image from "next/image";

export const Banner = () => {
  return (
    <section className="relative bg-[url('/images/banner-ring.jpg')] bg-[length:45vw_14vh] lg:bg-[length:726px_455px] bg-right bg-no-repeat">
      <div className="min-h-[30vh] md:min-h-[60vh] container flex flex-col justify-end md:justify-center">
        <div className="absolute right-0 top-0">
          <Image src="/images/banner-line-1.png" width={207} height={68} alt="Banner line" />
        </div>
        <div className="mt-2">
          <div className="flex flex-row items-center">
            <div className="center-line border-black w-6"></div>
            <p className="text-[8px] lg:text-xs">MORE THAN JUST JEWELLERY</p>
          </div>
          <h1 className="font-playfair max-w-32 md:max-w-fit text-2xl xl:text-6xl my-2 lg:my-7">Elegance & Eternity.</h1>
          <p className="text-[8px] lg:text-xs text-gray-600">FINELY CRAFTED LAB-GROWN MOISSANITE JEWELLERY</p>
        </div>
        <div className="flex flex-col">
          <Button className="w-fit mt-5 order-2 xl:order-1 mx-auto lg:mx-0 z-20">SHOP COLLECTIONS</Button>
          <div className="absolute left-0 bottom-0 order-1 xl:order-2 z-1 z-10">
            <Image src="/images/banner-line-2.jpg" width={728} height={72} alt="Banner line" />
          </div>
        </div>
      </div>
    </section>
  );
}