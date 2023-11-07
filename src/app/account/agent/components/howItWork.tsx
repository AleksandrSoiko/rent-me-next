import Image from "next/image";
import Link from "next/link";

const HowItWorks = () => {
  return (
    <ul className="flex max-md:flex-col gap-5 font-Manrope text-3xl leading-[2.1rem] lg:text-[3rem] lg:leading-[3.6rem] items-center">
      <li className="w-[20.5rem] lg:w-[23.75rem] py-10 text-center shadow-[-4px_-4px_8px_0px_rgba(242,250,253,0.8),4px_4px_8px_0_rgba(242,250,253,0.8)]">
        <Link href="agent/newProperty">
          <Image
            src="/account/add.svg"
            width="112"
            height="112"
            alt="find"
            className="mx-[auto] mb-10 lg:hidden"
          />
          <Image
            src="/account/add.svg"
            width="132"
            height="132"
            alt="findXl"
            className="mx-[auto] mb-10 max-lg:hidden"
          />
          Add a property
        </Link>
      </li>
      <li className="w-[20.5rem] lg:w-[23.75rem] text-center py-10 text-center shadow-[-4px_-4px_8px_0px_rgba(242,250,253,0.8),4px_4px_8px_0_rgba(242,250,253,0.8)]">
        <Image
          src="/account/meet.svg"
          width="112"
          height="112"
          alt="message"
          className="mx-[auto] mb-10 lg:hidden"
        />
        <Image
          src="/account/meet.svg"
          width="132"
          height="132"
          alt="messageXl"
          className="mx-[auto] mb-10 max-lg:hidden"
        />
        Meet a customer
      </li>
      <li className="w-[20.5rem] lg:w-[23.75rem] text-center py-10 text-center shadow-[-4px_-4px_8px_0px_rgba(242,250,253,0.8),4px_4px_8px_0_rgba(242,250,253,0.8)]">
        <Image
          src="/account/makeIt.svg"
          width="112"
          height="112"
          alt="makeIt"
          className="mx-[auto] mb-10 lg:hidden"
        />
        <Image
          src="/account/makeIt.svg"
          width="132"
          height="132"
          alt="makeItXl"
          className="mx-[auto] mb-10 max-lg:hidden"
        />
        Make it official
      </li>
    </ul>
  );
};

export default HowItWorks;
