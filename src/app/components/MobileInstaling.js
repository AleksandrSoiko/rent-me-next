import Image from "next/image";

const MobileInstaling = () => {
  return (
    <>
      <p className="relative z-[10] font-Comfortaa text-2xl leading-[1.8rem] text-center md:text-[3.125rem] md:leading-[3.75rem] md:text-start lg:w-[36.5rem]">
        Try to installing our RealEstate mobile app
      </p>
      <p className="font-Manrope text-2xl leading-[1.8rem] max-md:hidden max-lg:w-[18.93rem] mt-8 mb-10">
        Point the turned-on mobile phone camera to QR code
      </p>
      <div className="flex gap-4 lg:gap-[3.75rem] items-center">
        <Image
          src="/MobileInstaling/qrCode.svg"
          width="160"
          height="160"
          alt="qrCode"
          className="max-md:hidden"
        />
        <div className="flex max-lg:flex-col gap-2 lg:gap-[1.25rem] md:gap-5 items-start mt-[7.37rem] md:mt-0 relative z-[10]">
          <Image
            src="/MobileInstaling/AppStore.svg"
            width="181"
            height="52"
            alt="AppStore"
          />
          <Image
            src="/MobileInstaling/GooglePlay.svg"
            width="181"
            height="52"
            alt="GooglePlay"
          />
        </div>
      </div>
      <Image
        src="/MobileInstaling/image34.svg"
        width="212"
        height="232"
        alt="person"
        className="absolute bottom-[3.06rem] right-0 w-[212px] h-[232px] md:w-[367px] md:h-[380px] lg:w-[430px] lg:h-[450px] lg:bottom-[0]"
      />
    </>
  );
};
export default MobileInstaling;
