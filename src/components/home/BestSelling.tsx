import { Button } from "../atomics/Buttons";
import Image from "next/image";

interface IBestSellingItemProps {
  name: string;
  image: string;
  price?: string;
  className?: string;
}

const MOCK_DATA = [
  {
    name: "STÉPHANE",
    image: "/images/rings.png",
    price: "$866.00 - $994.00",
  },
  {
    name: "ANDRÉE",
    image: "/images/earrings.png",
    price: "$943.00 - $1,186.00",
  },
  {
    name: "ANDRÉE",
    image: "/images/earrings.png",
    price: "$943.00 - $1,186.00",
  },
  {
    name: "STÉPHANE",
    image: "/images/rings.png",
    price: "$866.00 - $994.00",
  },
  {
    name: "STÉPHANE",
    image: "/images/rings.png",
    price: "$866.00 - $994.00",
  },
  {
    name: "ANDRÉE",
    image: "/images/earrings.png",
    price: "$943.00 - $1,186.00",
  },
  {
    name: "ANDRÉE",
    image: "/images/earrings.png",
    price: "$943.00 - $1,186.00",
  },
  {
    name: "STÉPHANE",
    image: "/images/rings.png",
    price: "$866.00 - $994.00",
  },
]

const BestSellingItem = ({ name, image, price, className }: IBestSellingItemProps) => {
  return (
    <div className={`p-5 bg-gray-500 text-center ${className}`}>
      <Image src={image} width={350} height={350} alt={name} />
      <p className="font-bold text-xs mb-1">{name}</p>
      <p className="text-xs text-gray-600">{price}</p>
    </div>
  )
}

export const BestSelling = () => {
  return (
    <section className="container flex flex-row gap-4 pb-[100px]">
      <div className="w-1/2 p-10 bg-[url('/images/best-selling.jpg')] bg-no-repeat bg-cover">
        <h2 className="text-subtitle mb-3">Our Best Selling<br />Products</h2>
        <Button>SHOP COLLECTIONS</Button>
      </div>
      <div className="grid grid-flow-col grid-cols-4 grid-rows-2 gap-4">
        {MOCK_DATA.map((item, idx) => <BestSellingItem key={idx} name={item.name} image={item.image} price={item.price} />)}
      </div>
    </section>
  )
}