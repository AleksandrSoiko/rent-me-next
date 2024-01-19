import Image from "next/image";

const ServicesProvide = () => {
  return (
    <>
      <Image
        src="/ServicesProvide/bg.svg"
        width="360"
        height="174"
        alt="bg"
        className="absolute top-0  hidden max-md:block"
      />
      <Image
        src="/ServicesProvide/bg.svg"
        width="768"
        height="348"
        alt="bg"
        className="absolute top-0  hidden md:max-lg:block"
      />
      <Image
        src="/ServicesProvide/bg.svg"
        width="1440"
        height="348"
        alt="bg"
        className="absolute top-0 hidden lg:block"
      />
      <p className="mb-6 md:mb-8 relative font-Comfortaa font-normal text-2xl text-center md:text-[3.125rem] md:leading-[3.75rem]">
        Services we provide
      </p>
      <ul className="flex max-md:flex-col relative max-md:justify-center md:grid gap-12 lg:gap-5 mx-16 justify-items-center lg:flex">
        <li className="row-span-1 md:w-[22rem] md:flex flex-col items-center justify-between">
          <button className="w-[185px] mb-[1.02rem] font-Comfortaa leading-[normal] font-bold text-base text-center bg-blue text-[#fff] py-4 px-8 rounded-[0.625rem] hover:text-blue hover:bg-transparent border-[1px] border-blue">
            How To Rent
          </button>
          <Image
            src="/ServicesProvide/PersonFirst.svg"
            width="200"
            height="184"
            alt="PersonFirst"
            className="md:hidden"
          />
          <Image
            src="/ServicesProvide/PersonFirst.svg"
            width="313"
            height="304"
            alt="PersonFirst"
            className="max-md:hidden"
          />
        </li>
        <li className="col-span-1 md:w-[22rem] md:flex flex-col items-center justify-between">
          <button className="w-[185px] mb-[1.02rem] font-Comfortaa leading-[normal] font-bold text-base text-center bg-blue text-[#fff] py-4 px-8 rounded-[0.625rem] hover:text-blue hover:bg-transparent border-[1px] border-blue">
            How To Rent
          </button>
          <Image
            src="/ServicesProvide/PersonNext.svg"
            width="200"
            height="184"
            alt="PersonFirst"
            className="md:hidden"
          />
          <Image
            src="/ServicesProvide/PersonNext.svg"
            width="313"
            height="304"
            alt="PersonFirst"
            className="max-md:hidden"
          />
        </li>
        <li className="col-span-2 md:w-[22rem] md:flex flex-col items-center justify-between">
          <button className="w-[185px] mb-[1.02rem] font-Comfortaa leading-[normal] font-bold text-base text-center bg-blue text-[#fff] py-4 px-8 rounded-[0.625rem] hover:text-blue hover:bg-transparent border-[1px] border-blue">
            How To Rent
          </button>
          <Image
            src="/ServicesProvide/PersonLast.svg"
            width="200"
            height="184"
            alt="PersonFirst"
            className="md:hidden"
          />
          <Image
            src="/ServicesProvide/PersonLast.svg"
            width="313"
            height="304"
            alt="PersonFirst"
            className="max-md:hidden"
          />
        </li>
      </ul>
    </>
  );
};

export default ServicesProvide;
