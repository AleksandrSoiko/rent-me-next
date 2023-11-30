import { btnHoverOrange } from "../../../page";

const SupportForm = () => {
  return (
    <div className="m-[1.5rem] w-[75%]">
      <h2 className="text-center text-[2rem] font-semibold mb-[1.5rem] height-[2.4rem]">
        Welcome to the Help Center !
      </h2>
      <h3 className="text-center text-[1.5rem] font-semibold height-[1.8rem] mb-[1.5rem]">
        Search and Find Your Perfect Home with Us
      </h3>
      <form className="border-[1px] border-blue1 p-[1.5rem]">
        <p className="text-[1rem] font-semibold height-[1.8rem]">
          Feel free to ask your question or describe your situation, and ll be
          happy to assist you.
        </p>
        <div className="my-[1.5rem] flex flex-col gap-[1.5rem]">
          <label className="flex gap-[1.5rem]">
            <p className="block w-[12.5rem] text-[0.875rem]">
              Write down your question
            </p>
            <textarea
              name=""
              id=""
              cols={30}
              rows={6}
              className="bg-blue1 px-[1rem] py-[0.75rem] rounded-[0.625rem] w-[100%]"
              placeholder="Text"
            ></textarea>
          </label>
          <label htmlFor="emailSupp" className="flex gap-[1.5rem]">
            <p className="block w-[12.5rem] text-[0.875rem]"> Your email</p>
            <input
              type="email"
              placeholder="Email"
              id="emailSupp"
              className="bg-blue1 px-[1rem] py-[0.75rem] rounded-[0.625rem] w-[100%]"
            />
          </label>
        </div>
        <div className="flex justify-end">
          <button
            className={`${btnHoverOrange} px-2 py-[0.625rem] text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]`}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default SupportForm;
