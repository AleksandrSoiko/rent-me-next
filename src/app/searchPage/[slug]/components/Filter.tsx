"use client";
import Image from "next/image";
import { useState } from "react";

const minBeds = [1, 2, 3, 4, 5, 6];
const maxBeds = [1, 2, 3, 4, 5, 6];
const minPrice = [];
const maxPrice = [];

const Filter = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleInputChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      <div className="px-6 lg:px-10 mt-4 lg:mt-10 grid-cols-2 max-md:flex md:grid max-md:flex-col max-md:gap-4 md:gap-8 lg:gap-5 justify-center">
        <div className="flex flex-col md:w-[20rem] lg:w-[33.75rem] lg:h-[18.18rem]">
          <p className="font-ComhtmlFortaa text-lg leading-[1.35rem] mb-2">
            Bedrooms
          </p>
          <div className="flex gap-5 max-md:justify-center">
            <label
              htmlFor="minB"
              className="relative font-Manrope text-base leading-[1.2rem]"
            >
              <p>Min beds</p>
              <input
                id="minB"
                type="text"
                className="px-4 py-3 w-[8.125rem] lg:w-[11.25rem] border-[1px] border-blue1 rounded-[0.5rem] mt-2 text-sm"
                placeholder="No min"
              />
              <Image
                src="/RentBuySelect/Downv.svg"
                width="19"
                height="19"
                alt="arrow"
                className="absolute top-[45px] right-[10px]"
              />
            </label>
            <label
              htmlFor="maxB"
              className="relative font-Manrope text-base leading-[1.2rem]"
            >
              <p>Max beds</p>
              <input
                id="maxB"
                type="text"
                className="px-4 py-3 w-[8.125rem] lg:w-[11.25rem] border-[1px] border-blue1 rounded-[0.5rem] mt-2 text-sm"
                placeholder="2"
              />

              <Image
                src="/RentBuySelect/Downv.svg"
                width="19"
                height="19"
                alt="arrow"
                className="absolute top-[45px] right-[16px]"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col md:w-[20rem] lg:w-[33.75rem] lg:h-[18.18rem]">
          <p className="font-ComhtmlFortaa text-lg leading-[1.35rem] mb-2">
            Price
          </p>
          <div className="flex gap-5 max-md:justify-center">
            <label
              htmlFor="minP"
              className="relative font-Manrope text-base leading-[1.2rem]"
            >
              <p>Min price</p>
              <input
                id="minP"
                type="text"
                className="px-4 py-3 w-[8.125rem] lg:w-[11.25rem] md:w-[9.375rem] border-[1px] border-blue1 rounded-[0.5rem] mt-2 text-sm"
                placeholder="No min"
              />
              <Image
                src="/RentBuySelect/Downv.svg"
                width="19"
                height="19"
                alt="arrow"
                className="absolute top-[45px] right-[10px]"
              />
            </label>
            <label
              htmlFor="maxP"
              className="relative font-Manrope text-base leading-[1.2rem]"
            >
              <p>Max price</p>
              <input
                id="maxP"
                type="text"
                className="px-4 py-3 w-[8.125rem] lg:w-[11.25rem] md:w-[9.375rem] border-[1px] border-blue1 rounded-[0.5rem] mt-2 text-sm"
                placeholder="No min"
              />
              <Image
                src="/RentBuySelect/Downv.svg"
                width="19"
                height="19"
                alt="arrow"
                className="absolute top-[45px] right-[16px]"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col md:w-[20rem] lg:w-[33.75rem] items-start">
          <p className="font-ComhtmlFortaa text-lg leading-[1.35rem] mt-4">
            Furnished
          </p>
          <div className="max-lg:hidden grid grid-cols-2">
            <label
              htmlFor="Any"
              className="w-[11.25rem] h-12 flex gap-4 items-center font-Manrope text-xl leading-[1.5rem]"
            >
              <input
                id="Any"
                type="radio"
                name="Any"
                checked={isChecked}
                onChange={handleInputChange}
                className="checked:bg-orange checked:border-orange"
              />
              Any
            </label>
            <label
              htmlFor="PartFurnished"
              className="w-[11.25rem] h-12 flex gap-4 items-center font-Manrope text-xl leading-[1.5rem]"
            >
              <input
                id="PartFurnished"
                type="radio"
                name="PartFurnished"
                className="checked:bg-orange checked:border-orange"
              />
              Part furnished
            </label>
            <label
              htmlFor="Furnished"
              className="w-[11.25rem] h-12 flex gap-4 items-center font-Manrope text-xl leading-[1.5rem]"
            >
              <input
                id="Furnished"
                type="radio"
                name="Furnished"
                className="checked:bg-orange checked:border-orange"
              />
              Furnished
            </label>
            <label
              htmlFor="Unfurnished"
              className="w-[11.25rem] h-12 flex gap-4 items-center font-Manrope text-xl leading-[1.5rem]"
            >
              <input
                id="Unfurnished"
                type="radio"
                name="Unfurnished"
                className="checked:bg-orange checked:border-orange"
              />
              Unfurnished
            </label>
          </div>
          <div className="flex flex-wrap justify-center mt-4 w-[17.5rem] lg:hidden">
            <button className="border-[1px] border-blue1 text-center w-[50%] py-2 bg-blue text-[#fff]">
              Any
            </button>
            <button className="border-[1px] border-blue1 text-center w-[50%] py-2 text-[#444]">
              Part furnished
            </button>
            <button className="border-[1px] border-blue1 text-center w-[50%] py-2 text-[#444]">
              Furnished
            </button>
            <button className="border-[1px] border-blue1 text-center w-[50%] py-2 text-[#444]">
              Unfurnished
            </button>
          </div>
        </div>
        <div className="flex flex-col md:w-[20rem] lg:w-[33.75rem]">
          <p className="font-ComhtmlFortaa text-lg leading-[1.35rem] mt-2">
            Added
          </p>
          <div className="max-lg:hidden grid grid-cols-2">
            <label
              htmlFor="AnyTime"
              className="w-[11.25rem] h-12 flex gap-4 items-center font-Manrope text-xl leading-[1.5rem]"
            >
              <input
                type="radio"
                name="Added"
                id="AnyTime"
                onChange={handleInputChange}
                checked={isChecked}
                className="checked:bg-orange checked:border-orange"
              />
              Any time
            </label>
            <label
              htmlFor="24hours"
              className="w-[11.25rem] h-12 flex gap-4 items-center font-Manrope text-xl leading-[1.5rem]"
            >
              <input
                id="24hours"
                type="radio"
                name="Added"
                className="checked:bg-orange checked:border-orange"
              />
              24 hours
            </label>
            <label
              htmlFor="3days"
              className="w-[11.25rem] h-12 flex gap-4 items-center font-Manrope text-xl leading-[1.5rem]"
            >
              <input
                id="3days"
                type="radio"
                name="Added"
                className="checked:bg-orange checked:border-orange"
              />
              3 days
            </label>
            <label
              htmlFor="7days"
              className="w-[11.25rem] h-12 flex gap-4 items-center font-Manrope text-xl leading-[1.5rem]"
            >
              <input
                id="7days"
                type="radio"
                name="Added"
                className="checked:bg-orange checked:border-orange"
              />
              7 days
            </label>
          </div>
          <div className="flex flex-wrap justify-center mt-4 w-[17.5rem] lg:hidden">
            <button className="border-[1px] border-blue1 text-center w-[50%] py-2">
              Any
            </button>
            <button className="border-[1px] border-blue1 text-center w-[50%] py-2 text-[#444]">
              24 hours
            </button>
            <button className="border-[1px] border-blue1 text-center w-[50%] py-2 text-[#444] bg-blue ">
              3 days
            </button>
            <button className="border-[1px] border-blue1 text-center w-[50%] py-2 text-[#444]">
              7 days
            </button>
          </div>
        </div>
      </div>
      <button className="flex mx-[auto]  justify-center items-center gap-4 font-Montserrat text-base leading-[1.2rem] my-4 md:my-8 lg:text-xl lg:leading-[1.5rem]">
        <p>Show less filters</p>
        <Image
          src="/LatestOffers/showMore.svg"
          width="25"
          height="25"
          alt="showLess"
          className="origin-center rotate-180 "
        />
      </button>
    </>
  );
};

export default Filter;
