import Image from "next/image";

const FaqSupports = () => {
  return (
    <>
      <p className="text-[1.5rem] font-semibold mt-6">
        Answers to frequently asked questions for tenants.
      </p>
      <ul className="mt-6">
        <li className="rounded-[0.625rem] bg-blue1 px-4 py-[0.75rem] flex justify-between cursor-pointer">
          <div className="flex gap-4">
            {/* <Image
              src="/RentBuySelect/Downv.svg"
              width="25"
              height="17"
              alt="dots"
            /> */}
            <p>How long does the rental process usually take?</p>
          </div>
          <Image
            src="/RentBuySelect/Downv.svg"
            width="25"
            height="17"
            alt="arrow"
          />
        </li>
        <li className="rounded-[0.625rem] bg-blue1 px-4 py-[0.75rem] flex justify-between cursor-pointer">
          <div className="flex gap-4">
            {/* <Image
              src="/RentBuySelect/Downv.svg"
              width="25"
              height="17"
              alt="dots"
            /> */}
            <p>How can I choose housing that fits my budget and needs?</p>
          </div>
          <Image
            src="/RentBuySelect/Downv.svg"
            width="25"
            height="17"
            alt="arrow"
          />
        </li>
        <li className="rounded-[0.625rem] bg-blue1 px-4 py-[0.75rem] flex justify-between cursor-pointer">
          <div className="flex gap-4">
            {/* <Image
              src="/RentBuySelect/Downv.svg"
              width="25"
              height="17"
              alt="dots"
            /> */}
            <p>How do I report a breakdown or malfunction?</p>
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
