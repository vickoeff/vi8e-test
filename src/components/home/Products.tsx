import { PRODUCT_ITEMS } from "@/constants/products";
import { Button } from "../atomics/Buttons";
import Image from "next/image";

interface IProductItemProps {
  title: string;
  background: string;
  image: string;
  type: string;
}

const ProductItem = ({ title, background, image, type }: IProductItemProps) => {
  const style = { "--image-url": `url(${background})` } as React.CSSProperties;

  return (
    <div style={style} className={`flex ${type === "mainstay" ? "flex-row items-center justify-center grow basis-full md:basis-6/12" : "flex-col flex-none basis-1/2 md:basis-3/12"} bg-[image:var(--image-url)] bg-cover bg-no-repeat ${title.includes("NECKLACES") && "order-5 md:order-4"} ${title.includes("PENDANTS") && "order-6 md:order-6"} ${title.includes("RINGS") && "order-4 md:order-5"}`}>
      <div className="object-fit">
        <Image src={image} width={350} height={350} alt={title} />
      </div>
      <div className="p-5">
        <h3 className="mb-1 font-bold text-sm">{title}</h3>
        <Button variant="shadow">SHOP NOW</Button>
      </div>
    </div>
  )
}

export const Products = () => {
  return (
    <section id="collections" className="pb-[100px]">
      <div className="px-0 md:container flex flex-wrap flex-row">
        {
          PRODUCT_ITEMS.map(({ title, image, background, type }) => <ProductItem key={title} title={title} image={image} background={background} type={type} />)
        }
      </div>
    </section>
  )
}