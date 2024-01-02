import Image from "next/image";

const User = () => {
  return (
    <div className="mt-6 relative mb-12 lg:mt-20 lg:mb-10 lg:flex">
      <Image
        src="/account/mail.svg"
        width="48"
        height="48"
        alt="mail"
        className="top-[25px] absolute right-0 lg:hidden"
      />
      <Image
        src="/account/customers.png"
        width="280"
        height="280"
        alt="avatar"
        className="w-[86px] lg:w-[280px] inline"
      />
      <p className="font-Manrope text-2xl leading-[1.8rem] lg:text-[3rem] lg:font-medium lg:leading-[3.6rem] inline ml-4 lg:hidden">
        Welcom Diana
      </p>
      <div className="font-Manrope relative text-lg font-light lg:text-xl lg:font-medium leading-[1.35rem] lg:leading-[1.5rem ] lg:ml-10 lg:w-[100%]">
        <Image
          src="/account/mail.svg"
          width="48"
          height="48"
          alt="postxl"
          className="top-0 absolute right-0 max-lg:hidden"
        />
        <p className="font-Manrope text-2xl leading-[1.8rem] lg:text-[3rem] lg:font-medium lg:leading-[3.6rem] inline max-lg:hidden">
          Welcom Diana
        </p>
        <p className="my-4 lg:my-6">With your account, you can:</p>
        <ul className="list-disc px-4">
          <li>
            <p>Save property listings and searches.</p>
          </li>
          <li>
            <p>Turn on email alerts for new listings matching your search</p>
          </li>
          <li>
            <p>Track properties and follow their worth over time</p>
          </li>
          <li>
            <p>Access all property estimates</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
