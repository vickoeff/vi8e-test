import { dateFormat } from "@/libs/formater";
import Image from "next/image";
import { Badge } from "../atomics/Badges";

const MOCK_DATA = [
  {
    title: "CAN MOISSANITE BE YOUR NEXT ‘SUPERSTAR’ JEWELRY STONE?",
    desc: "In a world where diamonds are the traditional choice most especially when buying an engagement ring..",
    image: "/images/blog-1.jpg",
    date: "Sunday, 25-May-22 11:20:27 UTC",
    author: "Admin",
    category: "moissanite"
  },
  {
    title: "IS MOISSANITE MORE VALUABLE THAN A DIAMOND?",
    desc: "Are you a bride-to-be? Or are you that individual who is a jewelry lover? No matter what the case is..",
    image: "/images/blog-2.jpg",
    date: "Sunday, 29-June-22 11:20:27 UTC",
    author: "Admin",
    category: "moissanite"
  },
  {
    title: "ENGAGEMENT RING MOISSANITE SINGAPORE BUYING GUIDE",
    desc: "The setting of your Moissanite rings is as unique as your personality. If you’re looking for an..",
    image: "/images/blog-3.jpg",
    date: "Sunday, 14-June-22 11:20:27 UTC",
    author: "Admin",
    category: "moissanite"
  },
  {
    title: "Luxury Defined By Style, Not Price.",
    desc: "Moissanites are lab-grown gemstones, crafted by the most skilled hands to create a sparkle that is..",
    image: "/images/blog-4.jpg",
    date: "Sunday, 27-September-22 11:20:27 UTC",
    author: "Admin",
    category: "jewellery"
  }
]

interface IBlogItemProps {
  title: string;
  desc: string;
  image: string;
  date: number | string;
  author: string;
  className?: string;
  category: string;
}

const BlogItem = ({ title, desc, image, date, author, className, category }: IBlogItemProps) => {
  return (
    <div className={`bg-white ${className}`} >
      <div className="relative object-cover">
        <Image src={image} width={600} height={300} alt="Blog Item" />
        <Badge label={category} className="absolute bottom-[-14px] right-0" />
      </div>
      <div className=" p-7">
        <div className="min-h-24">
          <h3 className="text-md text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-700 text-xs">{desc}</p>
        </div>
        <div className="center-line my-6 border-gray-200"></div>
        <div className="flex flex-row">
          <p className="text-xs text-gray-700">{dateFormat(date)} <span className="mx-2">|</span> by {author}</p>
        </div>
      </div>
    </div >
  )
}

export const Blogs = () => {
  return (
    <section id="blogs" className="py-14 bg-gray-400">
      <div className="container">
        <h2 className="text-subtitle text-center mb-9">Recent Blogs</h2>
        <div className="flex flex-row gap-2">
          {
            MOCK_DATA.map(({ title, desc, image, date, author, category }) =>
              <BlogItem key={title} title={title} desc={desc} image={image} date={date} author={author} category={category} className="w-1/4" />
            )
          }
        </div>
      </div>
    </section>
  )
}