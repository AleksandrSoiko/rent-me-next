import Image from "next/image";
import Link from "next/link";
import { btnHoverOrange, btnHoverOrangeReverse } from "../../../page";

const ApratamentReserv = () => {
  return (
    <li className="border-[1px] border-[#D4F3FF] p-[1rem]">
      <div className="flex justify-between">
        <div className="flex gap-[1.2rem]">
          <Link href={"/apartament/1"}>
            <Image
              src="/LatestOffers/test.png"
              width="75"
              height="79"
              alt="img-Apartament"
              className="h-[79px] lg:w-[136px] lg:h-[136px]"
            />
          </Link>
          <div className="text-[0.75rem] lg:text-xl text-Manrope flex flex-col justify-between">
            <div>
              <p>Whitehill Place, Glasgow, G31</p>
              <p className="text-[0.625rem] lg:text-sm text-grayText my-[0.5rem]">
                27 Sep 2023 - 28 Sep 2023
              </p>
              <p className="text-[0.625rem] lg:text-sm text-grayText">Ispan</p>
            </div>
            <div>£876 pcm</div>
          </div>
        </div>
        <div>
          <button>...</button>
        </div>
      </div>
      <div className="flex gap-[1.25rem] mt-[1.5rem]">
        <button
          className={`${btnHoverOrange} px-2 py-[0.625rem] text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]`}
        >
          Chat
        </button>
        <button
          className={`${btnHoverOrangeReverse} px-2 py-[0.625rem] whitespace-nowrap text-center border-[1px] border-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]`}
        >
          Call
        </button>
      </div>
    </li>
  );
};

export default ApratamentReserv;
