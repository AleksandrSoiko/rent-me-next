import Image from 'next/image'
import  Apartament  from './components/Apartament'
import Link from 'next/link'

const CardApartaments = () => {
    return (
        <section
            className="mx-[auto] px-4 md:px-8 pt-12 md:py-16 pb-10 lg:pt-15 lg:pb-20 lg:w-[1180px]"
        >
            <Link
                href="/"
                className="flex items-center mx-4 gap-4 font-Manrope text-xl font-medium leading-[1.5rem] text-center"
            >
                <Image src='/Latestoffers/showMore.svg' width="32" height="32" alt="back" className="origin-center rotate-90 " />
                Back to the search results
            </Link>
            <Apartament />
            <div className="flex gap-4 max-md:justify-center mt-10">
                <button
                    className="px-2 py-[0.625rem] text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]"
                >
                    Email</button>
                <button
                    className="px-2 py-[0.625rem] whitespace-nowrap text-center border-[1px] border-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]"
                >
                    Call
                </button>
            </div>
        </section>
    )
}


export default CardApartaments