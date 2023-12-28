"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FullScreenImage from "../../../apartament/[slug]/components/openImgModal";
import { btnHoverOrange, btnHoverOrangeReverse } from "../../../page";
const image: string[] = [
  "/LatestOffers/sliderTest/qwe.webp",
  "/LatestOffers/sliderTest/qwer.jpg",
  "/LatestOffers/sliderTest/qwert.jpg",
  "/LatestOffers/sliderTest/qwerty.jpg",
  "/LatestOffers/sliderTest/qwertyu.jpg",
];

const YourProperties = () => {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    adaptiveHeight: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <li>
      <div className="lg:flex gap-5 my-8">
        <div className="w-[580px] mb-[80px]">
          <Slider {...settings} className="custom-slider">
            {image.map((image, index) => (
              <div key={index}>
                <FullScreenImage
                  key={index}
                  imageUrl={image}
                  altText={"image"}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex flex-col gap-8 md:gap-10">
          <div className="font-Manrope text-xl md:text-2xl leading-[1.5rem] md:leading-[1.8rem] flex flex-col md-max:gap-2 font-normal md:flex-row justify-between">
            <div>
              <p>2 bedroom flat to rent</p>
              <p className="flex my-2">Whitehill Place, Glasgow, G31</p>
              <p className="flex gap-2">
                <Image
                  src="/LatestOffers/map.svg"
                  width="24"
                  height="24"
                  alt="map"
                />
                Map
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col text-[#000] lg:w-[36.25rem] font-Comfortaa text-xl md:text-2xl md:font-semibold md:leading-[1.8rem] font-medium leading-[1.5rem]">
              <p className="md:mb-5 font-semibold">£876 pcm</p>
              <p className="text-xl md:mb-6">Property description</p>
              <p className="font-light font-Manrope md:text-xl leading-[1.875rem] text-[#000]">
                This modern two bedroom property will come fully furnished and
                is suitable for students. The property comprises of a large hall
                with plenty of storage cupboards. Off the hall the modern
                kitchen has... <button className="underline">more</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 max-md:justify-center">
        <button
          className={`${btnHoverOrange} w-[9.75rem] lg:w-[11.25rem] px-2 py-[0.625rem] text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]`}
        >
          Edit
        </button>
        <button
          className={`${btnHoverOrangeReverse} w-[9.75rem] lg:w-[11.25rem] px-8 py-[0.625rem] lg:py-4 whitespace-nowrap text-center border-[1px] border-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]`}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default YourProperties;
