import LatestOffers from "../../components/LatestOffers";
import MyProfile from "../page";

const MyReservation = () => {
  return (
    <div className="flex   w-[1180px] mx-[auto]">
      <MyProfile activeLabel={"favorite"} />
      <ul className="flex wrap gap-[1.5rem] m-[1.5rem] max-w-[72.25rem] w-[75%]">
        <LatestOffers />
        <LatestOffers />
      </ul>
    </div>
  );
};

export default MyReservation;
