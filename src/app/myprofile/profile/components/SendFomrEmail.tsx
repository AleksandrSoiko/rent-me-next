import { btnHoverOrange } from "../../../page";

export const SendFomrEmail = () => {
  return (
    <form
      action=""
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
              type="email"
              placeholder="Email"
              id=""
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
              type="password"
              placeholder="password"
              id=""
              className="bg-blue1 px-[1rem] py-[0.75rem] rounded-[0.625rem] w-[100%]"
            />
          </label>
        </li>
      </ul>
      <div className="flex justify-end">
        <button
          className={`${btnHoverOrange} px-2 py-[0.625rem]  text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[10rem] rounded-[0.625rem]`}
        >
          Save
        </button>
      </div>
    </form>
  );
};
