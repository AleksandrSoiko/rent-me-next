"use client";
import { useState } from "react";
import { btnHoverOrange } from "../../../page";

export const SendFomrEmail = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const sendChangeEmail = (e) => {
    e.preventDefault();
    console.log({ email });
  };

  return (
    <form
      onSubmit={sendChangeEmail}
      className="my-[1.5rem] flex flex-col gap-[1.5rem]"
      id="Sign-in-Method"
    >
      <ul className="flex flex-col gap-[1.5rem]">
        <li>
          <label htmlFor="" className="flex gap-[1.5rem] items-center">
            <p className="block w-[12.5rem] text-[0.875rem] max-lg:hidden">
              Enter new email
            </p>
            <input
              required
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-blue1 px-[1rem] py-[0.75rem] rounded-[0.625rem] w-[100%]"
            />
          </label>
        </li>
        <li>
          <label htmlFor="" className="flex gap-[1.5rem] items-center">
            <p className="block w-[12.5rem] text-[0.875rem] max-lg:hidden">
              Confirm password
            </p>
            <input
              required
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-blue1 px-[1rem] py-[0.75rem] rounded-[0.625rem] w-[100%]"
            />
          </label>
        </li>
      </ul>
      <div className="flex justify-end">
        <button
          type="submit"
          className={`${btnHoverOrange} px-2 py-[0.625rem]  text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[10rem] rounded-[0.625rem]`}
        >
          Save
        </button>
      </div>
    </form>
  );
};
