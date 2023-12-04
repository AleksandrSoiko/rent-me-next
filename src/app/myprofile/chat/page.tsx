import MyProfile from "../page";
import { Contacts } from "./components/Contacts";

const MyReservation = () => {
  return (
    <div className="flex gap-[1.5rem]  w-[1180px] mx-[auto]">
      <MyProfile activeLabel={"profile"} />

      <Contacts />
      <div className="w-[52%]">
        <div>
          <div className="border-[1px] border-blue1  p-[1.5rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default MyReservation;
