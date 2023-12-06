"use client";
import { useState } from "react";
import { btnHoverOrange } from "../../../page";

interface chekBoxSelect {
  House: boolean;
  Confirmation: boolean;
  Payments: boolean;
  Promotions: boolean;
  Offers: boolean;
  Reminder: boolean;
  Application: boolean;
  Exclusive: boolean;
  Reviews: boolean;
}

const EmailNotifications = () => {
  const [checkNotification, setCheckNotification] = useState<chekBoxSelect>({
    House: false,
    Confirmation: false,
    Payments: false,
    Promotions: false,
    Offers: false,
    Reminder: false,
    Application: false,
    Exclusive: false,
    Reviews: false,
  });

  const checkNotificationSetting = (id: string) => {
    setCheckNotification((prevCheck) => ({
      ...prevCheck,
      [id]: !prevCheck[id],
    }));
  };

  const handleSave = () => {
    console.log(checkNotification);
  };

  return (
    <form className="flex flex-col gap-[1.5rem] " id="Notifications">
      <label
        htmlFor="House"
        className="bg-blue1 rounded-[0.625rem] py-[0.62rem] px-[1rem] mt-[1.5rem]"
      >
        <input
          type="checkbox"
          id="House"
          onChange={(e) => checkNotificationSetting(e.target.id)}
        />
        <span className="ml-[1rem]">House Booking</span>
      </label>
      <label
        htmlFor="Confirmation"
        className="bg-blue1 rounded-[0.625rem] py-[0.62rem] px-[1rem]"
      >
        <input
          type="checkbox"
          id="Confirmation"
          onChange={(e) => checkNotificationSetting(e.target.id)}
        />
        <span className="ml-[1rem]">Booking Confirmation</span>
      </label>
      <label
        htmlFor="Payments"
        className="bg-blue1 rounded-[0.625rem] py-[0.62rem] px-[1rem]"
      >
        <input
          type="checkbox"
          id="Payments"
          onChange={(e) => checkNotificationSetting(e.target.id)}
        />
        <span className="ml-[1rem]">Successful Payments</span>
      </label>
      <label
        htmlFor="Promotions"
        className="bg-blue1 rounded-[0.625rem] py-[0.62rem] px-[1rem]"
      >
        <input
          type="checkbox"
          id="Promotions"
          onChange={(e) => checkNotificationSetting(e.target.id)}
        />
        <span className="ml-[1rem]">Promotions and Discounts</span>
      </label>
      <label
        htmlFor="Offers"
        className="bg-blue1 rounded-[0.625rem] py-[0.62rem] px-[1rem]"
      >
        <input
          type="checkbox"
          id="Offers"
          onChange={(e) => checkNotificationSetting(e.target.id)}
        />
        <span className="ml-[1rem]">New Offers</span>
      </label>
      <label
        htmlFor="Reminder"
        className="bg-blue1 rounded-[0.625rem] py-[0.62rem] px-[1rem]"
      >
        <input
          type="checkbox"
          id="Reminder"
          onChange={(e) => checkNotificationSetting(e.target.id)}
        />
        <span className="ml-[1rem]">Lease Expiry Reminder</span>
      </label>
      <label
        htmlFor="Application"
        className="bg-blue1 rounded-[0.625rem] py-[0.62rem] px-[1rem]"
      >
        <input
          type="checkbox"
          id="Application"
          onChange={(e) => checkNotificationSetting(e.target.id)}
        />
        <span className="ml-[1rem]">Application Status Update</span>
      </label>
      <label
        htmlFor="Exclusive"
        className="bg-blue1 rounded-[0.625rem] py-[0.62rem] px-[1rem]"
      >
        <input
          type="checkbox"
          id="Exclusive"
          onChange={(e) => checkNotificationSetting(e.target.id)}
        />
        <span className="ml-[1rem]">Exclusive Offers for Regular Clients</span>
      </label>
      <label
        htmlFor="Reviews"
        className="bg-blue1 rounded-[0.625rem] py-[0.62rem] px-[1rem]"
      >
        <input
          type="checkbox"
          id="Reviews"
          onChange={(e) => checkNotificationSetting(e.target.id)}
        />
        <span className="ml-[1rem]">Property Reviews and Ratings</span>
      </label>
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className={`${btnHoverOrange} px-2 py-[0.625rem]  text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[10rem] rounded-[0.625rem]`}
        >
          Save
        </button>
      </div>
    </form>
  );
};
export default EmailNotifications;
