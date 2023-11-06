import Image from "next/image";

const YourProperties = () => {
  return (
    <li>
      <div className="lg:flex gap-5 my-8">
        <div>
          <Image
            src="/LatestOffers/apartment.png"
            width="580"
            height="414"
            alt="apartment"
          />
          <div className="w-[10.125rem] md:w-[11.5rem] mx-[auto] flex gap-6 items-center my-6">
            <span className="w-3 h-3 bg-blue1 rounded-[100%] block md:w-4 md:h-4"></span>
            <span className="w-3 h-3 bg-blue1 rounded-[100%] block md:w-4 md:h-4"></span>
            <span className="w-[1.125rem] h-[1.125rem] bg-blue rounded-[100%] block md:w-6 md:h-6"></span>
            <span className="w-3 h-3 bg-blue1 rounded-[100%] block md:w-4 md:h-4"></span>
            <span className="w-3 h-3 bg-blue1 rounded-[100%] block md:w-4 md:h-4"></span>
          </div>
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
          <div className="">
            <div className="flex flex-col lg:w-[36.25rem] font-Comfortaa text-xl md:text-2xl md:font-semibold md:leading-[1.8rem] font-medium leading-[1.5rem]">
              <p className="md:mb-5 font-semibold">£876 pcm</p>
              <p className="text-xl md:mb-6">Property description</p>
              <p className="font-light font-Manrope md:text-xl leading-[1.875rem]">
                This modern two bedroom property will come fully furnished and
                is suitable for students. The property comprises of a large hall
                with plenty of storage cupboards. Off the hall the modern
                kitchen has... <span className="underline">more</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 max-md:justify-center">
        <button className="w-[9.75rem] lg:w-[11.25rem] px-2 py-[0.625rem] text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]">
          Edit
        </button>
        <button className="w-[9.75rem] lg:w-[11.25rem] px-8 py-[0.625rem] lg:py-4 whitespace-nowrap text-center border-[1px] border-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]">
          Delete
        </button>
      </div>
    </li>
  );
};

export default YourProperties;
