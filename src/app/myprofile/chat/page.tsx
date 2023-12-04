import MyProfile from "../page";
import { Contacts } from "./components/Contacts";

const MyReservation = () => {
  return (
    <div className="flex gap-[1.5rem]  max-w-[1180px] mx-[auto]">
      <MyProfile activeLabel={"chat"} />
      <div className="p-4 max-lg:mx-[auto]">
        <p className="lg:hidden text-xl height-[1.8rem] mb-[1rem]">My Chats</p>
        <Contacts />
        <div className="w-[52%] max-lg:hidden">
          <div>
            <div className="border-[1px] border-blue1  p-[1.5rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReservation;
