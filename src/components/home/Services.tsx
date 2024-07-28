import { SERVICE_ITEMS } from "@/constants/services";
import Image from "next/image";

interface IServiceItemProps {
  icon: string;
  title: string;
  desc: string;
}

const ServiceItem = ({ icon, title, desc }: IServiceItemProps) => {
  return (
    <div className="flex flex-row items-start">
      <Image src={icon} width={25} height={25} alt={title} />
      <div className="pl-4">
        <h3 className="font-bold text-sm">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  )
}

export const Services = () => {
  return (
    <section className="container py-14">
      <div className="flex flex-row justify-around">
        {
          SERVICE_ITEMS.map(({ icon, title, desc }) => <ServiceItem key={title} icon={icon} title={title} desc={desc} />)
        }
      </div>
    </section>
  )
}