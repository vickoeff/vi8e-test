import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="container pb-[100px]">
      <div className="flex flex-row items-center px-0 xl:px-40 gap-16">
        <div>
          <h2 className="text-subtitle mb-3">Luxury Defined By Style, Not Price.</h2>
          <Image src="/images/about.jpg" width={400} height={561} alt="Banner line" className="block lg:hidden mb-4" />
          <p className="mb-4 text-sm lg:text-md">Moissanites are lab-grown gemstones, crafted by the most skilled hands to create a sparkle that is a class of its own.</p>
          <p className="mb-4 text-sm lg:text-md">
            Every piece of moissanite comes with a certification as a testament to its quality. This gemstone is also durable, second only to diamonds in terms of hardness.
            Hence, your fine jewellery pieces from Le Diamonds cannot be easily scratched and keep their fire well. Due to its hardness, we are also able to create dazzling cuts that will shine brightly on you.
          </p>
          <p className="text-sm lg:text-md">
            Our attention to quality and detail ensures that all our moissanite jewellery is a work of art that you can be proud to wear.
          </p>
        </div>
        <Image src="/images/about.jpg" width={400} height={561} alt="Banner line" className="hidden lg:block" />
      </div>
    </section>
  )
}