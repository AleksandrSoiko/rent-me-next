import MyProfile from "../page";
import FaqSupports from "./component/FaqSupports";
import SupportForm from "./component/SupportForm";

const MyReservation = () => {
  return (
    <div className="flex  max-w-[1180px] mx-[auto]">
      <MyProfile activeLabel={"support"} />
      <div className="mx-[auto] lg:m-[1.5rem] lg:w-[75%]">
        <SupportForm />
        <FaqSupports />
      </div>
    </div>
  );
};

export default MyReservation;
