import MyProfile from "../page";
import { FirstBlockUser } from "./components/FirstBlockUser";
import { PasswordResetForm } from "./components/PasswordResetForm";
import { SendFomrEmail } from "./components/SendFomrEmail";
import { SendFormUser } from "./components/SendFormUser";

const MyReservation = () => {
  return (
    <div className="flex gap-[1.5rem]  w-[1180px] mx-[auto]">
      <MyProfile activeLabel={"profile"} />
      <div className="border-[1px] border-blue1">
        <FirstBlockUser />
      </div>
      <div className="w-[52%]">
        <div className="border-[1px] border-blue1  p-[1.5rem] mb-[1.5rem]">
          <p className="font-semibold text-base height-[1.2rem] font-Manrope">
            Contact information
          </p>
          <SendFormUser />
        </div>
        <div>
          <div className="border-[1px] border-blue1  p-[1.5rem]">
            <p className="font-semibold text-base height-[1.2rem] font-Manrope">
              Sign- in Method
            </p>
            <SendFomrEmail />
            <PasswordResetForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReservation;
