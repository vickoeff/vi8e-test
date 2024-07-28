import Image from "next/image";
import Slider from "react-slick";

export const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1600,
    centerPadding: "100px",
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };

  return (
    <section className="container py-20 mb-[100px] text-center">
      <h2 className="text-subtitle mb-3">Get Inspired</h2>
      <div className="flex flex-row justify-center gap-2 mb-6">
        <span>Follow us at </span><a className="flex gap-2 text-brown-400" href="https://www.instagram.com"><Image src={"/icons/instagram.svg"} width={15} height={15} alt={"Instagram Icon"} />le_diamonds</a>
      </div>

      <Slider {...settings}>
        {
          new Array(5).fill(1).map((_, idx) =>
            <div className="px-1" key={idx}>
              <Image src={`/images/gallery-${idx}.jpg`} width={350} height={350} alt={`gallery-${idx}`} />
            </div>
          )
        }
      </Slider>
    </section>
  )
}