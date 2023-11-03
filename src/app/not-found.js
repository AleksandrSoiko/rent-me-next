"use client";
import Image from "next/image"
import Link from "next/link";

export default function Error() {
    return (
        <div
            className="font-Comfortaa flex justify-center px-4 mx-[auto] h-[22.6rem] w-[22.5rem] lg:w-[73.75rem] relative lg:h-[31.25rem] mt-[1.85rem] lg:flex-row-reverse"
        >
            <div>
                <Image src='/illustration.svg' width="278" height="500" alt="illustration" className=" max-lg:hidden" />
                <Image src='/illustration.svg' width="200" height="360" alt="illustration" className="absolute right-0 lg:hidden" />
            </div>
            <div className="relative">
                <p
                    className="text-[5rem] lg:text-[7.5rem] font-bold leading-[6rem] lg:leading-[9rem] text-blue pt-[3.63rem]"
                >
                    404
                </p>
                <p
                    className="text-2xl leading-[1.8rem] my-2 lg:text-[3.125rem] lg:leading-[3.75rem] font-normal"
                >
                    Ooops...
                </p>
                <p
                    className="text-2xl leading-[1.5rem] font-semibold lg:font-medium mb-6 lg:mb-10 lg:text-[2.5rem] lg:leading-3rem "
                >
                    Something went wrong!
                </p>

                <Link href='/'
                    className="text-base bg-orange px-8 py-4 text-center rounded-[0.625rem] text-[#fff] inline-block"
                >
                    Go to homepage
                </Link>
            </div>

        </div>
    )
}
