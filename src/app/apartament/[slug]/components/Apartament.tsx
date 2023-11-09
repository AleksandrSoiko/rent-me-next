import Image from "next/image";

const Apartament = () => {
  return (
    <>
      <div className="my-10">
        <Image
          src="/LatestOffers/test.png"
          width="580"
          height="414"
          alt="img-Apartament"
          className="mx-[auto] md:w-[580px]"
        />
        <div className="w-[10.125rem] md:w-[11.5rem] mx-[auto] flex gap-6 items-center mt-6">
          <button className="w-3 h-3 bg-blue1 rounded-[100%] block md:w-4 md:h-4"></button>
          <button className="w-3 h-3 bg-blue1 rounded-[100%] block md:w-4 md:h-4"></button>
          <button className="w-[1.125rem] h-[1.125rem] bg-blue rounded-[100%] block md:w-6 md:h-6"></button>
          <button className="w-3 h-3 bg-blue1 rounded-[100%] block md:w-4 md:h-4"></button>
          <button className="w-3 h-3 bg-blue1 rounded-[100%] block md:w-4 md:h-4"></button>
        </div>
      </div>
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
        <div className="mt-6 font-Manrope text-xl md:text-2xl leading-[1.5rem] md:leading-[1.8rem] flex flex-col md-max:gap-2 font-normal md:flex-row justify-between">
          <div>
            <p>2 bedroom flat to rent</p>
            <p className="flex">
              Whitehill Place, Glasgow, G31
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
          <div className="flex gap-[1.12rem] max-md:hidden">
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
        <div className="lg:flex lg:gap-[7.5rem]">
          <div className="flex flex-col gap-4 lg:w-[36.25rem] font-Comfortaa text-xl md:text-2xl md:font-semibold md:leading-[1.8rem] font-medium leading-[1.5rem]">
            <p className="md:mb-5">£876 pcm</p>
            <p className="text-xl md:mb-6">Property description</p>
            <p className="text-base font-light font-Manrope md:text-xl">
              This modern two bedroom property will come fully furnished and is
              suitable for students. The property comprises of a large hall with
              plenty of storage cupboards. Off the hall the modern kitchen has
              fridge/freezer, dishwasher and washing machine. The lounge and
              hall has laminate flooring and the two double bedrooms are
              carpeted. The master bedroom comes with an ensuite bathroom with
              walk in shower. The bathroom also has a shower over the bath.
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
<<<<<<< HEAD:src/app/apartament/[slug]/components/Apartament.js
        </div><div className="flex flex-col gap-8 md:gap-10">
                <div className="flex justify-between md:hidden">
                    <div className="flex gap-2">
                        <Image src='/Latestoffers/map.svg' width="24" height="24" alt="map-svg" />
                        <p className="font-Manrope text-lg font-light leading-1.35rem">Map</p>
                    </div>
                    <div className="flex gap-[1.12rem]">
                        <Image src='/header/like.svg' width="24" height="24" alt="like-svg" />
                        <Image src='/Latestoffers/carbon_floorplan.svg' width="24" height="24" alt="like-svg" />
                    </div>
                </div>
                <div
                    className="mt-6 font-Manrope text-xl md:text-2xl leading-[1.5rem] md:leading-[1.8rem] flex flex-col md-max:gap-2 font-normal md:flex-row justify-between"
                >
                    <div>
                        <p>2 bedroom flat to rent</p>
                        <p className="flex">
                            Whitehill Place, Glasgow, G31
                            <span className="flex gap-2 ml-8 max-md:hidden">
                                <Image src='/Latestoffers/map.svg' width="24" height="24" alt="map-svg" />
                                Map
                            </span>
                        </p>
                    </div>
                    <div className="flex gap-[1.12rem] max-md:hidden">
                        <Image src='/header/like.svg' width="40" height="40" alt="like-svg" />
                        <Image src='/Latestoffers/carbon_floorplan.svg' width="40" height="40" alt="like-svg" />
                    </div>
                </div>
                <div className="lg:flex lg:gap-[7.5rem]">
                    <div
                        className="flex flex-col gap-4 lg:w-[36.25rem] font-Comfortaa text-xl md:text-2xl md:font-semibold md:leading-[1.8rem] font-medium leading-[1.5rem]"
                    >
                        <p className="md:mb-5">£876 pcm</p>
                        <p className="text-xl md:mb-6">Property description</p>
                        <p className="text-base font-light font-Manrope md:text-xl">
                            This modern two bedroom property will come fully furnished and is
                            suitable for students. The property comprises of a large hall with
                            plenty of storage cupboards. Off the hall the modern kitchen has
                            fridge/freezer, dishwasher and washing machine. The lounge and
                            hall has laminate flooring and the two double bedrooms are
                            carpeted. The master bedroom comes with an ensuite bathroom with
                            walk in shower. The bathroom also has a shower over the bath.
                        </p>
                    </div>
                    <div className="lg:w-[30rem]">
                        <div className="flex justify-between">
                            <p
                                className="font-Comfortaa text-xl font-medium leading-[1.5rem] mb-4 mt-8"
                            >
                                Agent details
                            </p>
                            <p className="flex items-center gap-1">
                                <Image src='/Latestoffers/star.svg' width="18" height="18" alt="like-svg" />
                                <span className="font-Manrope text-xs leading-[1.125rem]"
                                >4.9</span>
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
      </>
      )
    
    
}
=======
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
    </>
  );
};
>>>>>>> 8840115bb6e048c9c5df10ed431d907eaa727c48:src/app/apartament/[slug]/components/Apartament.tsx

export default Apartament;
