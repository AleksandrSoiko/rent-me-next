import Link from "next/link";
import { btnHoverOrangeReverse } from "../../../page";
import Image from "next/image";

export const FirstBlockUser = () => {
  return (
    <div className="p-[1.5rem] w-[17.4rem] max-lg:mx-[auto]">
      <div className="flex flex-col gap-[1rem] items-center">
        <Image
          src="/Latestoffers/Avatar.png"
          width="170"
          height="170"
          alt="avatar"
          className="rounded-[100%]"
        />
        <button
          className={`${btnHoverOrangeReverse} px-2 py-[0.625rem] text-[#000] whitespace-nowrap text-center bg-white border-[1px] border-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[100%] rounded-[0.625rem]`}
        >
          + Add photo
        </button>
        <button className="text-xs font-medium height-[1.125rem] font-Inter hover:text-orange">
          Delete photo
        </button>
      </div>
      <div className="h-[1px] w-[100%] bg-blue1 my-[1.5rem] max-lg:hidden"></div>
      <ul className="font-semibold text-base height-[1.2rem] font-Manrope flex flex-col gap-[1rem] max-lg:hidden">
        <li className="hover:text-orange">
          <Link href="#contactInformation">Contact information</Link>
        </li>
        <li className="hover:text-orange">
          <Link href="#Sign-in-Method">Sign-in Method</Link>
        </li>
        <li className="hover:text-orange">
          <Link href="#Payment-methods">Payment methods</Link>
        </li>
        <li className="hover:text-orange">
          <Link href="#Notifications">Email Notifications</Link>
        </li>
        <li className="hover:text-orange">
          <Link href="#deleteaccount">Delete Account</Link>
        </li>
      </ul>
    </div>
  );
};
