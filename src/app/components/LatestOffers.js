import properties1 from '../images/mob/home-page/properties2@3.jpg'

const LatestOffers = () => {
    return (
        <>
            <li className="mt-8 md:mt-10">
                <div className="relative flex justify-center">
                    <img
                        src={properties1}
                        // src="images/mob/home-page/properties1@2.jpg"
                        alt="properties1"
                        className="w-[328px] md:w-[336px]" />
                    <div
                        className="absolute bottom-0 bg-grayBg flex w-[20.5rem] md:w-[21rem] py-2 px-[1.12rem]"
                    >
                        <p
                            className="font-Comfortaa text-xl md:font-semibold font-normal leading-[1.5rem] w-[100%] mr-3"
                        >
                            <span>£</span>876 pcm
                        </p>
                        <div className="flex gap-[1.12rem]">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21 1.5H3C2.175 1.5 1.5 2.175 1.5 3V21C1.5 21.825 2.175 22.5 3 22.5H14.25V21C14.25 18.9 15.9 17.25 18 17.25V15.75C15.075 15.75 12.75 18.075 12.75 21H10.5V18H9V21H3V3H9V13.5H10.5V9.75H13.5V8.25H10.5V3H21V8.25H18V9.75H21V21H18V22.5H21C21.825 22.5 22.5 21.825 22.5 21V3C22.5 2.175 21.825 1.5 21 1.5Z"
                                    fill="#0B0B0B" />
                            </svg>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.9999 22.167C11.8029 22.1674 11.6079 22.1288 11.4259 22.0535C11.2439 21.9782 11.0785 21.8677 10.9394 21.7283L3.22039 14.0093C0.793393 11.583 0.384643 7.84201 2.24914 5.11726C3.26089 3.63751 4.71664 2.76976 6.45889 2.60776C8.36239 2.43151 10.3889 3.12676 11.9999 4.48951C13.6109 3.12751 15.6389 2.43151 17.5409 2.60776C19.2831 2.76976 20.7389 3.63751 21.7506 5.11726C23.6151 7.84276 23.2064 11.583 20.7794 14.0093L13.0604 21.7283C12.7679 22.02 12.3839 22.167 11.9999 22.167ZM7.03564 4.08076C6.88943 4.08083 6.74329 4.08733 6.59764 4.10026C5.31439 4.22026 4.23889 4.86376 3.48664 5.96326C2.03014 8.09401 2.36389 11.0318 4.28089 12.948L11.9999 20.6678L19.7189 12.9488C21.6359 11.0318 21.9696 8.09401 20.5131 5.96401C19.7616 4.86451 18.6854 4.22101 17.4029 4.10176C15.7446 3.95101 13.8794 4.68901 12.5309 6.03826C12.4613 6.10797 12.3786 6.16327 12.2877 6.201C12.1967 6.23874 12.0991 6.25816 12.0006 6.25816C11.9021 6.25816 11.8046 6.23874 11.7136 6.201C11.6226 6.16327 11.54 6.10797 11.4704 6.03826C10.2389 4.80601 8.57614 4.08076 7.03564 4.08076Z"
                                    fill="#0B0B0B" />
                                <path
                                    d="M5.87228 12.1081C5.77378 12.1082 5.67622 12.0888 5.58523 12.0511C5.49423 12.0134 5.41158 11.9581 5.34203 11.8883C3.95753 10.5038 3.69278 8.32058 4.72478 6.81008C5.28278 5.99408 6.06128 5.58008 7.03928 5.58008C7.23819 5.58008 7.42896 5.6591 7.56961 5.79975C7.71026 5.9404 7.78928 6.13117 7.78928 6.33008C7.78928 6.52899 7.71026 6.71976 7.56961 6.86041C7.42896 7.00106 7.23819 7.08008 7.03928 7.08008C6.55478 7.08008 6.24278 7.24733 5.96303 7.65683C5.33078 8.58158 5.51903 9.94508 6.40178 10.8278C6.50696 10.9325 6.57867 11.0661 6.60783 11.2116C6.63699 11.3571 6.62227 11.508 6.56555 11.6452C6.50883 11.7823 6.41266 11.8995 6.28923 11.9819C6.16581 12.0644 6.02069 12.1083 5.87228 12.1081Z"
                                    fill="#FFB22C" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div
                    className="pt-4 pb-6 px-4 shadow-[0px_1px_3px_0px_rgba(215,229,255,0.3),0px_3px_6px_0_rgba(215,229,255,0.3)] w-[20.5rem] md:w-[21rem]"
                >
                    <div>
                        <p
                            className="font-Manrope text-lg leading-[1.5rem] font-light flex flex-col mb-4"
                        >
                            <span className="font-semibold">Two bedrooms flat for rent</span>Whitehill Place, Glasgow, G31
                        </p>
                        <p className="text-base font-light leading-[1.2rem] mb-4">
                            This modern two bedroom property will come fully furnished and is
                            suitable for students. The property comprises of a large hall with
                            plenty of storage cupboards. Off the hall the modern...
                            <span className="underline">more</span>
                        </p>
                    </div>
                    <p className="text-blueText text-sm font-normal mb-2">Agent details</p>
                    <a
                        href="partials/accountCustomer/accountCustomer.html"
                        className="flex justify-between items-center font-Manrope text-[0.75rem] leading-[1.125rem] mb-4"
                    >
                        <div className="flex items-center gap-3">
                            <img
                                src="images//mob/home-page/Avatar.png"
                                alt="Avatar"
                                width="36"
                                className="rounded-[100%]" />
                            <p>Mcrae's Property Services</p>
                        </div>
                        <p className="flex gap-1">
                            <span>
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M9 13.7025L13.635 16.5L12.405 11.2275L16.5 7.68L11.1075 7.2225L9 2.25L6.8925 7.2225L1.5 7.68L5.595 11.2275L4.365 16.5L9 13.7025Z"
                                        fill="#FFB22C" /></svg></span>4.9
                        </p>
                    </a>
                    <div className="flex gap-4 justify-center">
                        <button
                            className="px-2 py-[0.625rem] text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]"
                        >
                            Email</button><button
                                className="px-2 py-[0.625rem] whitespace-nowrap text-center border-[1px] border-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]"
                            >
                            Call
                        </button>
                    </div>
                </div>
            </li>
        </>

    )
}

export default LatestOffers