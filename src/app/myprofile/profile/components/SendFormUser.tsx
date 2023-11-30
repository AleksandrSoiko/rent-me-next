import { btnHoverOrange } from "../../../page";

export const SendFormUser = () => {
  return (
    <form action="" className="my-[1.5rem] flex flex-col gap-[1.5rem]">
      <ul className="flex flex-col gap-[1.5rem]">
        <li>
          <label htmlFor="" className="flex gap-[1.5rem] items-center">
            <p className="block w-[12.5rem] text-[0.875rem]">First Name</p>
            <input
              type="text"
              placeholder="Name"
              id=""
              className="bg-blue1 px-[1rem] py-[0.75rem] rounded-[0.625rem] w-[100%]"
            />
          </label>
        </li>
        <li>
          <label htmlFor="" className="flex gap-[1.5rem] items-center">
            <p className="block w-[12.5rem] text-[0.875rem]">Last Name</p>
            <input
              type="text"
              placeholder="Last Name"
              id=""
              className="bg-blue1 px-[1rem] py-[0.75rem] rounded-[0.625rem] w-[100%]"
            />
          </label>
        </li>
        <li>
          <label htmlFor="" className="flex gap-[1.5rem] items-center">
            <p className="block w-[12.5rem] text-[0.875rem]">Your email</p>
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
            <p className="block w-[12.5rem] text-[0.875rem]">Phone number</p>
            <input
              type="tel"
              placeholder="Phone number"
              id=""
              className="bg-blue1 px-[1rem] py-[0.75rem] rounded-[0.625rem] w-[100%]"
            />
          </label>
        </li>
        <li>
          <label htmlFor="" className="flex gap-[1.5rem] items-center">
            <p className="block w-[12.5rem] text-[0.875rem]">Your age</p>
            <input
              type="date"
              placeholder="Name"
              id=""
              className="bg-blue1 px-[1rem] py-[0.75rem] rounded-[0.625rem] w-[100%]"
            />
          </label>
        </li>
        <li>
          <label htmlFor="emailSupp" className="flex gap-[1.5rem] items-center">
            <p className="block w-[12.5rem] text-[0.875rem]">Country</p>
            <input
              type="text"
              placeholder="Country"
              id=""
              className="bg-blue1 px-[1rem] py-[0.75rem] rounded-[0.625rem] w-[100%]"
            />
          </label>
        </li>
        <li>
          <label htmlFor="emailSupp" className="flex gap-[1.5rem] items-center">
            <p className="block w-[12.5rem] text-[0.875rem]">City</p>
            <input
              type="text"
              placeholder="City"
              id=""
              className="bg-blue1 px-[1rem] py-[0.75rem] rounded-[0.625rem] w-[100%]"
            />
          </label>
        </li>
        <li>
          <label htmlFor="emailSupp" className="flex gap-[1.5rem] items-center">
            <p className="block w-[12.5rem] text-[0.875rem]">Address</p>
            <input
              type="text"
              placeholder="Address"
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
