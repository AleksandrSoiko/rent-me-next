import Image from "next/image";
import { ContactUser } from "./ContactUser";

export const Contacts = () => {
  return (
    <div className="p-[1rem] max-lg:mx-[auto] border-[1px] border-blue1 rounded-[0.5rem]">
      <div className="flex justify-between">
        <p className="font-semibold text-base height-[1.2rem] font-Manrope">
          Contacts
        </p>
        <p>+</p>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="pl-[2.6rem] py-[0.8rem] pr-[1rem] border-[1px] border-blue1 rounded-[0.5rem] my-[1rem]"
        />
        <Image
          src="/RentBuySelect/searchIcon.svg"
          width="16"
          height="19"
          alt="LocationSvg"
          className="absolute top-[35px] left-[15px]"
        />
      </div>
      <ul>
        <li>
          <ContactUser />
        </li>
      </ul>
    </div>
  );
};
