const MobileInstaling =()=>{
    <>
    <p
      className="font-Comfortaa text-2xl leading-[1.8rem] text-center md:text-[3.125rem] md:leading-[3.75rem] md:text-start lg:w-[36.5rem]"
    >
      Try to installing our RealEstate mobile app
    </p>
    <p
      className="font-Manrope text-2xl leading-[1.8rem] max-md:hidden max-lg:w-[18.93rem] mt-8 mb-10"
    >
      Point the turned-on mobile phone camera to QR code
    </p>
    <div className="flex gap-4 lg:gap-[3.75rem] items-center">
      <svg width="160" height="160" viewBox="0 0 160 160" className="max-md:hidden">
        <use href="partials/HomePage/sprite.svg#qr"></use>
      </svg>
      <div
        className="flex max-lg:flex-col gap-2 lg:gap-[1.25rem] md:gap-5 items-start mt-[7.37rem] md:mt-0"
      >
        <svg width="181" height="52" viewBox="0 0 181 52">
          <use href="partials/HomePage/sprite.svg#appstore"></use>
        </svg>
        <svg width="179" height="52" viewBox="0 0 179 52">
          <use href="partials/HomePage/sprite.svg#googleplay"></use>
        </svg>
      </div>
    </div>
    <img
      src="images/mob/home-page/footer1@3.png"
      alt="personFooter"
      className="absolute bottom-[3.06rem] right-0 z-[-1] hidden max-md:block"
      width="210"
    />
    <img
      src="images/mob/home-page/footer2@1.png"
      alt="personFooter"
      className="absolute bottom-[3.06rem] md:bottom-0 right-0 z-[-1] hidden md:max-lg:block"
      width="367"
    />
    <img
      src="images/mob/home-page/footer3@1.png"
      alt="personFooter"
      className="absolute bottom-[3.06rem] md:bottom-0 right-0 z-[-1] hidden lg:block"
      width="430px"
    />
  </>
}
export default MobileInstaling