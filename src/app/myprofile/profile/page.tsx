import MyProfile from "../page";
import { FirstBlockUser } from "./components/FirstBlockUser";

const MyReservation = () => {
  return (
    <div className="flex gap-[1.5rem]  w-[1180px] mx-[auto]">
      <MyProfile activeLabel={"profile"} />
      <div className="border-[1px] border-blue1">
        <FirstBlockUser />
      </div>
    </div>
  );
};

export default MyReservation;
