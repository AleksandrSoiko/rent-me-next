// import Image from "next/image";

const PaymentMethods = () => {
  return (
    <div
      id="Payment-methods"
      className="py-[0.62rem] mt-[1.5rem] px-[1rem] bg-blue1 gap-[1rem] justify-between w-[100%] flex rounded-[0.625rem] my-[1.5rem]"
    >
      <div className="flex gap-[1rem]">
        {/* <Image
          src="/"
          width="56"
          height="40"
          alt="avatar"
          className=" bg-gray"
        /> */}
        <div>
          <p className="text-sm font-medium height-[1.05rem]">
            Visa ending in 1234
          </p>
          <span className="text-xs text-grayText height-[0.9rem]">
            Expires 3/2024
          </span>
        </div>
      </div>
      <button>...</button>
    </div>
  );
};

export default PaymentMethods;
