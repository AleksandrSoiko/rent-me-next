import Image from "next/image";

const DeleteAccount = () => {
  return (
    <>
      <div className="flex gap-[1rem] bg-[#FFE6E6] rounded-[0.625rem] p-4 my-[1.5rem]">
        <Image src="/warn.svg" width="28" height="28" alt="warn" />
        <p className="text-sm">
          If you wish to delete your account, please confirm this action. All
          your data will be permanently removed, and account recovery will be
          impossible.
        </p>
      </div>
      <div className="flex justify-end">
        {" "}
        <button
          className={`bg-[#FF4C4C] hover:bg-[#fd2626] px-2 py-[0.625rem]  text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[10rem] rounded-[0.625rem]`}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default DeleteAccount;
