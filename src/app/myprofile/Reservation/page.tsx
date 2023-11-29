import MyProfile from "../page";
import ApratamentReserv from "./components/apartament";

const MyReservation = () => {
  return (
    <div className="flex   w-[1180px] mx-[auto]">
      <MyProfile activeLabel={"reserv"} />
      <ul className="flex flex-col gap-[1.5rem] m-[1.5rem] max-w-[72.25rem] w-[75%]">
        <ApratamentReserv />
        <ApratamentReserv />
      </ul>
    </div>
  );
};

export default MyReservation;
