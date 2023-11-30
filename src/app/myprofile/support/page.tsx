import MyProfile from "../page";
import SupportForm from "./component/SupportForm";

const MyReservation = () => {
  return (
    <div className="flex   w-[1180px] mx-[auto]">
      <MyProfile activeLabel={"support"} />
      <SupportForm />
    </div>
  );
};

export default MyReservation;
