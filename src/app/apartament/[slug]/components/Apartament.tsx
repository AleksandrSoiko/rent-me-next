"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FullScreenImage from "./openImgModal";

const image: string[] = [
  "/LatestOffers/sliderTest/qwe.webp",
  "/LatestOffers/sliderTest/qwer.jpg",
  "/LatestOffers/sliderTest/qwert.jpg",
  "/LatestOffers/sliderTest/qwerty.jpg",
  "/LatestOffers/sliderTest/qwertyu.jpg",
];

const Apartament = () => {
  const settings = {
    // className: "center",
    centerMode: true,
    centerPadding: "0px",
    // adaptiveHeight: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="my-10 mx-[auto]">
        <Slider {...settings} className="custom-slider">
          {image.map((image, index) => (
            <div key={index}>
              <FullScreenImage key={index} imageUrl={image} altText={"image"} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="lg:flex lg:gap-[7.5rem]">
        <div>
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="flex justify-between md:hidden">
              <div className="flex gap-2">
                <Image
                  src="/Latestoffers/map.svg"
                  width="24"
                  height="24"
                  alt="map-svg"
                />
                <p className="font-Manrope text-lg font-light leading-1.35rem">
                  Map
                </p>
              </div>
              <div className="flex gap-[1.12rem]">
                <Image
                  src="/header/like.svg"
                  width="24"
                  height="24"
                  alt="like-svg"
                />
                <Image
                  src="/Latestoffers/carbon_floorplan.svg"
                  width="24"
                  height="24"
                  alt="like-svg"
                />
              </div>
            </div>
            <div className="text-[#000] mt-6 font-Manrope text-xl md:text-2xl leading-[1.5rem] md:leading-[1.8rem] flex flex-col md-max:gap-2 font-normal md:flex-row justify-between">
              <div className="lg:flex">
                <p>2 bedroom flat to rent |  </p>
                <p className="flex">
                  Whitehill Place, Glasgow, G31 |
                  <span className="flex gap-2 ml-8 max-md:hidden">
                    <Image
                      src="/Latestoffers/map.svg"
                      width="24"
                      height="24"
                      alt="map-svg"
                    />
                    Map
                  </span>
                </p>
              </div>
              <div className="flex gap-[1.12rem] max-md:hidden text-[#000] ">
                <Image
                  src="/header/like.svg"
                  width="40"
                  height="40"
                  alt="like-svg"
                />
                <Image
                  src="/Latestoffers/carbon_floorplan.svg"
                  width="40"
                  height="40"
                  alt="like-svg"
                />
              </div>
            </div>
            <div className="lg:flex lg:gap-[7.5rem] text-[#000] ">
              <div className="flex text-[#000] flex-col gap-4 lg:w-[36.25rem] font-Comfortaa text-xl md:text-2xl md:font-semibold md:leading-[1.8rem] font-medium leading-[1.5rem]">
                <p className="md:mb-5">£876 pcm</p>
                <p className="text-xl md:mb-6">Property description</p>
                <p className="text-base font-light font-Manrope md:text-xl text-[#000]">
                  This modern two bedroom property will come fully furnished and
                  is suitable for students. The property comprises of a large
                  hall with plenty of storage cupboards. Off the hall the modern
                  kitchen has fridge/freezer, dishwasher and washing machine.
                  The lounge and hall has laminate flooring and the two double
                  bedrooms are carpeted. The master bedroom comes with an
                  ensuite bathroom with walk in shower. The bathroom also has a
                  shower over the bath.
                </p>
              </div>
              <div className="lg:w-[30rem]">
                <div className="flex justify-between">
                  <p className="font-Comfortaa text-xl font-medium leading-[1.5rem] mb-4 mt-8">
                    Agent details
                  </p>
                  <p className="flex items-center gap-1">
                    <Image
                      src="/Latestoffers/star.svg"
                      width="18"
                      height="18"
                      alt="like-svg"
                    />
                    <span className="font-Manrope text-xs leading-[1.125rem]">
                      4.9
                    </span>
                  </p>
                </div>
                <div className="font-Manrope text-lg leading-[1.68rem] mb-6">
                  <p>Mcras Property Services</p>
                  <p className="font-light">Highams Park</p>
                  <p className="font-light">
                    18 The Avenue Highams Park, London E4 9LD
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="font-Manrope text-lg leading-[1.68rem] mb-6 text-[#000] ">
            <p>Mcras Property Services</p>
            <p className="font-light">Highams Park</p>
            <p className="font-light">
              18 The Avenue Highams Park, London E4 9LD
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apartament;
