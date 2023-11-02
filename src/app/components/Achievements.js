import Image from "next/image"

const Achievements = () => {
  return (
    <>
      <Image src='/Achievements/background.svg' width="360" height="174" alt="bg"   className="absolute bottom-0  hidden max-md:block"/>
      <Image src='/Achievements/background.svg' width="768" height="348" alt="bg"     className="absolute bottom-0 hidden md:max-lg:block"/>
      <Image src='/Achievements/background.svg' width="1440" height="348" alt="bg"  className="absolute bottom-0  hidden lg:block"/>
      <p
        className="font-Comfortaa text-center text-2xl leading-[1.8rem] font-normal mb-4 md:mb-6 md:text-[3.125rem] md:leading-[3.75rem]"
      >
        Achievements
      </p>
      <p
        className="font-Manrope text-center text-lg leading-[1.35rem] font-light max-lg:w-[20.5rem] mb-6 md:mb-10"
      >
        We have a myriad of achievements and are trusted by many people across UK
      </p>
      <ul
        className="grid grid-rows-2 lg:grid-rows-1 grid-flow-col gap-4 md:w-[44rem] relative lg:gap-5 justify-center"
      >
        <li className="lg:w-[17.5rem]">
          <p
            className="font-Manrope text-[2rem] md:text-5xl font-medium leading-[2.4rem] md:leading-[3.6rem] flex flex-col text-center mb-2 md:mb-4"
          >
            15,428+<span
              className="text-gray font-Montserrat text-base md:text-xl font-medium leading-[1.2rem] md:leading-[1.5rem]"
            >Properties listed</span>
          </p>
        </li>
        <li className="lg:w-[17.5rem]">
          <p
            className="font-Manrope text-[2rem] md:text-5xl font-medium leading-[2.4rem] md:leading-[3.6rem] flex flex-col text-center mb-2 md:mb-4"
          >
            5,000+<span
              className="text-gray font-Montserrat text-base md:text-xl font-medium leading-[1.2rem] md:leading-[1.5rem]"
            >Apartment rented</span>
          </p>
        </li>
        <li className="lg:w-[17.5rem]">
          <p
            className="font-Manrope text-[2rem] md:text-5xl font-medium leading-[2.4rem] md:leading-[3.6rem] flex flex-col text-center mb-2 md:mb-4"
          >
            8,655+<span
              className="text-gray font-Montserrat text-base md:text-xl font-medium leading-[1.2rem] md:leading-[1.5rem]"
            >Properties sales</span>
          </p>
        </li>
        <li className="lg:w-[17.5rem]">
          <p
            className="font-Manrope text-[2rem] md:text-5xl font-medium leading-[2.4rem] md:leading-[3.6rem] flex flex-col text-center mb-2 md:mb-4"
          >
            80,000+<span
              className="text-gray font-Montserrat text-base md:text-xl font-medium leading-[1.2rem] md:leading-[1.5rem]"
            >Happy clients</span>
          </p>
        </li>
      </ul>
    </>
  )
}

export default Achievements