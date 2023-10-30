import Image from "next/image"

const HeroSection = () => {
  return (
    <>
      <h2
        className="md:w-[45rem] w-[18rem] mr-[auto] ml-[auto] text-center font-Comfortaa text-2xl font-normal not-italic leading-[1.8rem] mb-2 md:text-[3.75rem] md:leading-[3.75rem] mx-4"
      >
        We know exactly what you are loking for
      </h2>
      <div className="relative w-[400px] h-[179px] md:hidden mr-[auto] ml-[auto]">
        <Image src='/hero/Oval.svg' width="53" height="53" alt="oval" className="absolute bottom-[1.47rem] left-0" />
        <Image src='/hero/Oval.svg' width="36" height="36" alt="oval" className="absolute top-[1.53rem] left-[3.79rem]" />
        <Image src='/hero/Oval.svg' width="106" height="106" alt="oval" className="absolute top-0 right-0" />
        <Image src='/hero/Oval.svg' width="106" height="106" alt="oval" className="absolute top-0 right-0" />
        <Image src='/hero/person.svg' width="169" height="146" alt="oval"  className="absolute bottom-0 left-[1.53rem]"/>
        <Image src='/hero/main-illustration.svg' width="250" height="146" alt="oval"  className="absolute bottom-0 right-0"/>
      </div>
      <div
        className="relative w-[800px] h-[420px] hidden md:block mr-[auto] ml-[auto]"
      >
        <Image src='/hero/Oval.svg' width="120" height="120" alt="oval"    className="absolute bottom-0 left-0"/>
        <Image src='/hero/Oval.svg' width="80" height="80" alt="oval"    className="absolute top-[1.53rem] left-[3.79rem]"/>
        <Image src='/hero/Oval.svg' width="240" height="240" alt="oval"    className="absolute top-0 right-0"/>
        <Image src='/hero/main-illustration.svg' width="567" height="333" alt="oval"     className="absolute bottom-0 right-0"/>
        <Image src='/hero/person.svg' width="384" height="333" alt="oval"       className="absolute bottom-0 left-[1.53rem]"/>
      </div>
    </>
  )
}

export default HeroSection