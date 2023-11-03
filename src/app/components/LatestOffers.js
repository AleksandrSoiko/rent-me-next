import Image from "next/image";

const LatestOffers = () => {
  return (
    <>
      <li className="mt-8 md:mt-10">
        <div className="relative flex justify-center">
          <Image
            src="/LatestOffers/test.png"
            width="328"
            height="336"
            alt="photo"
          />
          <div className="absolute bottom-0 bg-grayBg flex w-[20.5rem] md:w-[21rem] py-2 px-[1.12rem]">
            <p className="font-Comfortaa text-xl md:font-semibold font-normal leading-[1.5rem] w-[100%] mr-3">
              <span>£</span>876 pcm
            </p>
            <div className="flex gap-[1.12rem]">
              <Image
                src="/LatestOffers/carbon_floorplan.svg"
                width="24"
                height="24"
                alt="plan"
              />
              <Image src="/header/like.svg" width="24" height="24" alt="like" />
            </div>
          </div>
        </div>
        <div className="pt-4 pb-6 px-4 shadow-[0px_1px_3px_0px_rgba(215,229,255,0.3),0px_3px_6px_0_rgba(215,229,255,0.3)] w-[20.5rem] md:w-[21rem]">
          <div>
            <p className="font-Manrope text-lg leading-[1.5rem] font-light flex flex-col mb-4">
              <span className="font-semibold">Two bedrooms flat for rent</span>
              Whitehill Place, Glasgow, G31
            </p>
            <p className="text-base font-light leading-[1.2rem] mb-4">
              This modern two bedroom property will come fully furnished and is
              suitable for students. The property comprises of a large hall with
              plenty of storage cupboards. Off the hall the modern...
              <span className="underline">more</span>
            </p>
          </div>
          <p className="text-blueText text-sm font-normal mb-2">
            Agent details
          </p>
          <a
            href="partials/accountCustomer/accountCustomer.html"
            className="flex justify-between items-center font-Manrope text-[0.75rem] leading-[1.125rem] mb-4"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/LatestOffers/Avatar.png"
                width="36"
                height="36"
                alt="Avatar"
                className="rounded-[100%]"
              />
              <p>Mcrae&#39;s Property Services</p>
            </div>
            <p className="flex gap-1">
              <span>
                <Image
                  src="/LatestOffers/star.svg"
                  width="18"
                  height="18"
                  alt="starSvg"
                  className="rounded-[100%]"
                />
              </span>
              4.9
            </p>
          </a>
          <div className="flex gap-4 justify-center">
            <button className="px-2 py-[0.625rem] text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]">
              Email
            </button>
            <button className="px-2 py-[0.625rem] whitespace-nowrap text-center border-[1px] border-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]">
              Call
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default LatestOffers;
