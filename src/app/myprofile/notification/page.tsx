import { btnHoverOrangeReverse } from "../../page";
import MyProfile from "../page";
import { Notify } from "./components/Notify";

const MyReservation = () => {
  return (
    <div className="flex  max-w-[1180px] mx-[auto]">
      <MyProfile activeLabel={"notification"} />
      <div className="mx-[auto] lg:m-[1.5rem] w-[75%] ">
        <div className="flex flex-col lg:flex-row justify-between mb-[2.3rem] gap-[1.5rem]">
          <p className="font-semibold text-2xl height-[1.8rem]">
            Your notifications
          </p>
          <button
            className={`${btnHoverOrangeReverse} px-2 py-[0.625rem] whitespace-nowrap text-center border-[1px] border-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[13.75rem] rounded-[0.625rem]`}
          >
            Сlean up
          </button>
        </div>
        <ul className="flex flex-col  gap-[1.5rem]  max-w-[72.25rem] ">
          <Notify />
          <Notify />
        </ul>
      </div>
    </div>
  );
};

export default MyReservation;
