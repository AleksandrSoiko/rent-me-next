import HowItWorks from "./components/howItWork";
import User from "./components/User";
import { authOptions } from "../../../lib/auth";
import YourProperties from "./components/YourProperties";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

const AccountCustomer = async ({}) => {
  const session = await getServerSession(authOptions);
  if (!session) notFound();
  return (
    <section className="px-4 mx-[auto] lg:w-[73.5rem] flex flex-col items-center">
      <User session={session || null} />
      <div className="my-12 lg:my-20">
        <p className="font-Comfortaa text-2xl leading-[1.8rem] lg:text-[3.125rem] lg:leading-[3.75rem] mb-10 text-center">
          How it works
        </p>
        <HowItWorks />
      </div>
      <div className="py-12">
        <p className="font-Comfortaa text-2xl leading-[1.8rem] lg:text-[3.125rem] lg:leading-[3.75rem]">
          Your properties
        </p>
        <ul>
          <YourProperties />
        </ul>
      </div>
    </section>
  );
};

export default AccountCustomer;
