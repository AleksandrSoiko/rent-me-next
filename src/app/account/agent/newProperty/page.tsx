import Image from "next/image";
import Link from "next/link";
import FormOut from "./components/FormOut";

const NewProperty = () => {
  return (
    <section className="py-12 px-4 flex flex-col gap-8 mx-[auto] w-[22.5rem] lg:w-[73.75rem]">
      <Link
        href="/account/agent"
        className="inline-flex items-center mx-4 gap-4 font-Manrope text-xl font-medium leading-[1.5rem] text-center"
      >
        <Image
          src="/Latestoffers/showMore.svg"
          width="32"
          height="32"
          alt="back"
          className="origin-center rotate-90 "
        />
        Back to the search results
      </Link>
      <h3 className="font-Comfortaa text-2xl leading-[1.8rem] lg:text-[3.125rem] lg:leading-[3.75rem]">
        New property adding
      </h3>
      <div>
        <div className="mb-5 flex gap-4 justify-center">
          <button className="font-Comfortaa text-lg relative font-normal leading-[1.8rem] px-4 py-2 bg-blue rounded text-blue1 md:text-xl md:font-semibold md:leading-[1.5rem] md:px-8 md:py-4">
            Rent out
            <Image
              src="/RentBuySelect/arrow.svg"
              width="25"
              height="17"
              alt="back"
              className="absolute top-[55px] left-[65px] max-lg:hidden"
            />
          </button>
          <button className="font-Comfortaa text-lg px-4 py-2 bg-blue1 rounded text-blue md:text-xl md:font-semibold md:leading-[1.5rem] md:px-8 md:py-4">
            Buy out
          </button>
        </div>
        <FormOut />
      </div>
    </section>
  );
};

export default NewProperty;
