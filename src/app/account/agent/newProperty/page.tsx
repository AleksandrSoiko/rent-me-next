import Image from "next/image";
import Link from "next/link";

const NewProperty = () => {
  return (
    <section className="py-12 px-4 flex flex-col gap-8 mx-[auto] w-[22.5rem] lg:w-[73.75rem]">
      <Link
        href="/account/agent"
        className="flex items-center mx-4 gap-4 font-Manrope text-xl font-medium leading-[1.5rem] text-center"
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
            <svg
              className="absolute top-[55px] left-[65px] max-lg:hidden"
              width="25"
              height="17"
              viewBox="0 0 25 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 17L0.808656 0.5L24.1913 0.500002L12.5 17Z"
                fill="#5774CD"
              />
            </svg>
          </button>
          <button className="font-Comfortaa text-lg px-4 py-2 bg-blue1 rounded text-blue md:text-xl md:font-semibold md:leading-[1.5rem] md:px-8 md:py-4">
            Buy out
          </button>
        </div>
        <form
          action=""
          className="flex flex-col gap-6 lg:mb-[2.19rem] lg:grid-cols-2 lg:grid lg:rounded-[0.75rem] lg:shadow-[0px_4px_16px_0px_#D7E5FF] lg:py-10 lg:px-10"
        >
          <label
            htmlFor="title"
            className="font-Manrope text-base font-medium leading-[1.2rem]"
          >
            Title*
            <input
              type="text"
              name="title"
              id="title"
              className="w-[100%] px-4 py-4 bg-light_blue mt-2 rounded-[0.5rem] opacity-[0.4]"
            />
          </label>
          <label
            htmlFor="Address"
            className="font-Manrope text-base font-medium leading-[1.2rem]"
          >
            Address*
            <input
              type="text"
              name="Address"
              id="Address"
              className="w-[100%] px-4 py-4 bg-light_blue mt-2 rounded-[0.5rem] opacity-[0.4]"
            />
          </label>
          <label
            htmlFor="Price"
            className="font-Manrope text-base font-medium leading-[1.2rem] lg:mt-8"
          >
            Price*
            <input
              type="number"
              name="Price"
              id="Price"
              className="w-[100%] px-4 py-4 bg-light_blue mt-2 rounded-[0.5rem] opacity-[0.4]"
            />
          </label>
          <label
            htmlFor="bedrooms"
            className="font-Manrope text-base font-medium leading-[1.2rem] lg:mt-8"
          >
            Number of bedrooms*
            <input
              type="number"
              name="bedrooms"
              id="bedrooms"
              className="w-[100%] px-4 py-4 bg-light_blue mt-2 rounded-[0.5rem] opacity-[0.4]"
            />
          </label>
          <label
            htmlFor="bedrooms"
            className="font-Manrope text-base font-medium leading-[1.2rem] col-span-2 lg:mt-6"
          >
            Description*
            <textarea
              name="Description"
              id="Description"
              className="w-[100%] h-[7.5rem] px-4 py-4 bg-light_blue mt-2 rounded-[0.5rem] opacity-[0.4]"
            ></textarea>
          </label>
          <div className="col-span-2 lg:mt-8">
            <p>Photo upload*</p>
            <div className="flex max-lg:justify-between mt-2 lg:gap-8">
              <button>
                <Image
                  src="/account/plus.svg"
                  width="72"
                  height="72"
                  alt="find"
                  className="hidden max-lg:block"
                />
                <Image
                  src="/account/plus.svg"
                  width="140"
                  height="140"
                  alt="find"
                  className="hidden lg:block"
                />
              </button>
              <button>
                <Image
                  src="/account/plus.svg"
                  width="72"
                  height="72"
                  alt="find"
                  className="hidden max-lg:block"
                />
                <Image
                  src="/account/plus.svg"
                  width="140"
                  height="140"
                  alt="find"
                  className="hidden lg:block"
                />
              </button>
              <button>
                <Image
                  src="/account/plus.svg"
                  width="72"
                  height="72"
                  alt="find"
                  className="hidden max-lg:block"
                />
                <Image
                  src="/account/plus.svg"
                  width="140"
                  height="140"
                  alt="find"
                  className="hidden lg:block"
                />
              </button>
              <button>
                <Image
                  src="/account/plus.svg"
                  width="72"
                  height="72"
                  alt="find"
                  className="hidden max-lg:block"
                />
                <Image
                  src="/account/plus.svg"
                  width="140"
                  height="140"
                  alt="find"
                  className="hidden lg:block"
                />
              </button>
              <button>
                <Image
                  src="/account/plus.svg"
                  width="72"
                  height="72"
                  alt="find"
                  className="hidden max-lg:block"
                />
                <Image
                  src="/account/plus.svg"
                  width="140"
                  height="140"
                  alt="find"
                  className="hidden lg:block"
                />
              </button>
            </div>
          </div>
          <label
            htmlFor="Conpamy"
            className="font-Manrope text-base font-medium leading-[1.2rem] lg:mt-14"
          >
            Conpamy*
            <input
              type="text"
              name="Conpamy"
              id="Conpamy"
              className="w-[100%] px-4 py-4 bg-light_blue mt-2 rounded-[0.5rem] opacity-[0.4]"
            />
          </label>
          <label
            htmlFor="Agent"
            className="font-Manrope text-base font-medium leading-[1.2rem] lg:mt-14"
          >
            Agent name*
            <input
              type="text"
              name="AgentName"
              id="Agent"
              className="w-[100%] px-4 py-4 bg-light_blue mt-2 rounded-[0.5rem] opacity-[0.4]"
            />
          </label>
          <label
            htmlFor="Phone"
            className="font-Manrope text-base font-medium leading-[1.2rem] lg:mt-8"
          >
            Phone number*
            <input
              type="number"
              name="Phone"
              id="Phone"
              className="w-[100%] px-4 py-4 bg-light_blue mt-2 rounded-[0.5rem] opacity-[0.4]"
            />
          </label>
          <label
            htmlFor="Email"
            className="font-Manrope text-base font-medium leading-[1.2rem] lg:mt-8"
          >
            Email address*
            <input
              type="email"
              name="Email"
              id="Email"
              className="w-[100%] px-4 py-4 bg-light_blue mt-2 rounded-[0.5rem] opacity-[0.4]"
            />
          </label>
          <div className="flex gap-4 col-span-2">
            <button className="px-2 py-[0.625rem] text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[9.75rem] rounded-[0.625rem]">
              Add
            </button>
            <button className="px-2 py-[0.625rem] whitespace-nowrap text-center border-[1px] border-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[9.75rem] rounded-[0.625rem]">
              Save in drafts
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewProperty;
