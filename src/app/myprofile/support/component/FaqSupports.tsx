"use client";
import Image from "next/image";
import { useState } from "react";

const FaqSupports = () => {
  const [openDetailFaq, setOpenDetailFaq] = useState({});

  const toggleFaq = (id: string) => {
    setOpenDetailFaq((prevModals) => ({
      ...prevModals,
      [id]: !prevModals[id],
    }));
  };

  return (
    <>
      <p className="text-[1.5rem] font-semibold mt-6">
        Answers to frequently asked questions for tenants.
      </p>
      <ul className="mt-6">
        <li
          className={`rounded-[0.625rem] bg-blue1 px-4 py-[0.75rem] flex justify-between cursor-pointer mb-[1rem] `}
          onClick={() => toggleFaq("faq1")}
        >
          <div className="flex gap-4">
            <div className="flex flex-col">
              <p>How long does the rental process usually take?</p>
              <div
                className={`${
                  openDetailFaq["faq1"] ? "" : "hidden"
                } m-[1rem] text-gray text-sm `}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Natus assumenda aperiam illum odit alias doloribus optio velit
                  asperiores ut, totam, debitis molestiae ea vitae aliquam magni
                  atque eum quisquam id.
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/RentBuySelect/Downv.svg"
            width="25"
            height="17"
            alt="arrow"
          />
        </li>
        <li
          className="rounded-[0.625rem] bg-blue1 px-4 py-[0.75rem] flex justify-between cursor-pointer mb-[1rem]"
          onClick={() => toggleFaq("faq2")}
        >
          <div className="flex gap-4">
            <div>
              {/* <Image
              src="/RentBuySelect/Downv.svg"
              width="25"
              height="17"
              alt="dots"
            /> */}
              <p>How can I choose housing that fits my budget and needs?</p>
              <div
                className={`${
                  openDetailFaq["faq2"] ? "" : "hidden"
                } m-[1rem] text-gray text-sm `}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Natus assumenda aperiam illum odit alias doloribus optio velit
                  asperiores ut, totam, debitis molestiae ea vitae aliquam magni
                  atque eum quisquam id.
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/RentBuySelect/Downv.svg"
            width="25"
            height="17"
            alt="arrow"
          />
        </li>
        <li
          className="rounded-[0.625rem] bg-blue1 px-4 py-[0.75rem] flex justify-between cursor-pointer mb-[1rem]"
          onClick={() => toggleFaq("faq3")}
        >
          <div className="flex gap-4">
            <div>
              {/* <Image
              src="/RentBuySelect/Downv.svg"
              width="25"
              height="17"
              alt="dots"
            /> */}
              <p>How do I report a breakdown or malfunction?</p>
              <div
                className={`${
                  openDetailFaq["faq3"] ? "" : "hidden"
                } m-[1rem] text-gray text-sm `}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Natus assumenda aperiam illum odit alias doloribus optio velit
                  asperiores ut, totam, debitis molestiae ea vitae aliquam magni
                  atque eum quisquam id.
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/RentBuySelect/Downv.svg"
            width="25"
            height="17"
            alt="arrow"
          />
        </li>
      </ul>
    </>
  );
};

export default FaqSupports;
