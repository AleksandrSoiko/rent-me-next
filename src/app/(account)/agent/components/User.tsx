import Image from "next/image";
import { Session } from "next-auth";

interface SesionInterface {
  session: Session;
}

const User: React.FC<SesionInterface> = ({ session }) => {
  return (
    <div className="mt-6 relative mb-12 lg:mt-20 lg:mb-10 lg:flex justify-between">
      <div className="flex gap-4">
        <Image
          src="/account/avatar.png"
          width="280"
          height="280"
          alt="avatar"
          className="w-[86px] lg:w-[280px] inline"
        />
        <div>
          <p className="font-Manrope text-2xl leading-[1.8rem] lg:text-[3rem] lg:font-medium lg:leading-[3.6rem] inline lg:hidden">
            Welcome {session.user?.name}!
          </p>
          <div className="flex gap-4 mt-2">
            <Image
              src={"/account/mail.svg"}
              width="24"
              height="24"
              alt="mail"
              className="lg:hidden"
            />
            <Image
              src="/account/state.svg"
              width="24"
              height="24"
              alt="state"
              className="lg:hidden"
            />
          </div>
        </div>
      </div>
      <div className="font-Manrope relative text-lg font-light lg:text-xl lg:font-medium leading-[1.35rem] lg:leading-[1.5rem ] lg:w-[51rem]">
        <Image
          src="/account/mail.svg"
          width="48"
          height="48"
          alt="postxl"
          className="top-0 absolute right-0 max-lg:hidden"
        />
        <Image
          src="/account/state.svg"
          width="48"
          height="48"
          alt="postxl"
          className="top-0 absolute right-[70px] max-lg:hidden"
        />
        <p className="font-Manrope text-2xl leading-[1.8rem] lg:text-[3rem] lg:font-medium lg:leading-[3.6rem] inline max-lg:hidden">
          Welcome {session.user?.name}!
        </p>
        <p className="my-4 lg:my-6">With your account, you can:</p>
        <ul className="list-disc px-4">
          <li>
            <p>Sell fast all your properties</p>
          </li>
          <li>
            <p>Turn on email alerts for new interests</p>
          </li>
          <li>
            <p>Track propert statistic</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
