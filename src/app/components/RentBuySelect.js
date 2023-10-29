const RentBuySelect = () => {
    return (
        <section className="flex flex-col items-center mx-4 max-md:py-[1.44rem] md:pb-16">
            <div>
                <button
                    className="font-Comfortaa text-lg font-normal leading-[1.8rem] px-6 py-2 bg-blue rounded text-blue1 mr-2.5 relative md:text-xl md:font-semibold md:leading-[1.5rem] md:px-8 md:py-4"
                >
                    Rent
                    <svg
                        className="absolute top-[43px] left-[40px] md:top-[55px] md:left-[46px] md:hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="13"
                        viewBox="0 0 18 13"
                        fill="none"
                    >
                        <path
                            d="M9 13L0.339746 0.777779L17.6603 0.77778L9 13Z"
                            fill="#5774CD"
                        />
                    </svg>
                    <svg
                        className="absolute top-[43px] left-[40px] md:top-[55px] md:left-[46px] max-md:hidden"
                        width="25"
                        height="17"
                        viewBox="0 0 25 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.5 17L0.808656 0.5L24.1913 0.500002L12.5 17Z"
                            fill="#5774CD"
                        />
                    </svg>
                </button>
                <button
                    className="font-Comfortaa text-lg px-6 py-2 bg-blue1 rounded text-blue md:text-xl md:font-semibold md:leading-[1.5rem] md:px-8 md:py-4"
                >
                    Buy
                </button>
            </div>
            <div
                className="flex max-lg:flex-col w-[328px] md:w-[704px] lg:w-[1180px] py-6 lg:px-10 md:py-8 gap-4 md:gap-8 rounded-[0.75rem] mt-3 md:mt-4 shadow-[-4px_-4px_8px_0px_rgba(215,229,255,0.4),4px_4px_8px_0_rgba(215,229,255,0.4)]"
            >
                <div
                    className="flex max-md:flex-col lg:gap-[3.75rem] max-md:mr-[auto] max-md:ml-[auto] gap-4 md:gap-6 md:justify-center"
                >
                    <label
                        for="location"
                        className="lg:border-r-[1px] border-light_blue lg:w-[245px] max-md:px-6 max-md:py-2 font-Manrope text-lg max-md:border-b-[1px]  md:text-xl leading-[1.35rem]"
                    >Location
                        <div
                            className="flex items-center w-[232px] max-md:mt-2 mt-4 md:w-[13rem]"
                        >
                            <input
                                className="w-[100%] text-sm font-extralight md:text-lg md:font-light leading-[1.05rem] md:leading-[1.35]"
                                type="text"
                                id="location"
                                placeholder="Enter post code"
                            />
                            <svg
                                width="16"
                                height="19"
                                viewBox="0 0 16 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.06843 19C7.99971 19 7.93098 18.9762 7.87546 18.9289C7.55944 18.6589 0.13623 12.2651 0.13623 7.94898C0.13623 3.56591 3.69457 0 8.06843 0C12.4418 0 16 3.56591 16 7.94898C16 12.2651 8.57728 18.6587 8.2614 18.9289C8.20574 18.9762 8.13701 19 8.06843 19ZM8.06843 0.59375C4.02203 0.59375 0.72998 3.89337 0.72998 7.94898C0.72998 11.6246 6.88984 17.2636 8.06843 18.3084C9.24673 17.2636 15.4063 11.6246 15.4063 7.94898C15.4063 3.89337 12.1145 0.59375 8.06843 0.59375Z"
                                    fill="#0B0B0B"
                                />
                                <path
                                    d="M8.07027 11.7632C5.97077 11.7632 4.2627 10.0522 4.2627 7.94894C4.2627 5.84677 5.97091 4.13647 8.07027 4.13647C10.1675 4.13647 11.8738 5.84662 11.8738 7.94894C11.8738 10.0522 10.1675 11.7632 8.07027 11.7632ZM8.07027 4.73022C6.29822 4.73022 4.85645 6.17408 4.85645 7.94894C4.85645 9.7247 6.29822 11.1694 8.07027 11.1694C9.84023 11.1694 11.2801 9.7247 11.2801 7.94894C11.2801 6.17408 9.84023 4.73022 8.07027 4.73022Z"
                                    fill="#0B0B0B"
                                />
                                <path
                                    d="M2.7002 7.94852H2.10645C2.10645 7.84565 2.10912 7.74338 2.11416 7.64185L2.70717 7.67109C2.70257 7.76297 2.7002 7.85545 2.7002 7.94852Z"
                                    fill="#0B0B0B"
                                />
                                <path
                                    d="M2.75909 7.14797L2.17188 7.06039C2.20082 6.86549 2.24001 6.67 2.28825 6.47896L2.86389 6.62428C2.82055 6.79632 2.78537 6.97252 2.75909 7.14797ZM3.02049 6.11366L2.46222 5.91163C2.52916 5.72638 2.6065 5.54232 2.69185 5.36449L3.22712 5.62129C3.15037 5.78145 3.08076 5.94696 3.02049 6.11366ZM3.48198 5.15178L2.97477 4.84318C3.07734 4.67455 3.18941 4.50934 3.30802 4.3523L3.78183 4.70988C3.6751 4.85134 3.57431 4.99993 3.48198 5.15178ZM4.12442 4.29975L3.68802 3.89719C3.82131 3.75261 3.96352 3.61278 4.11091 3.48186L4.50561 3.92539C4.37276 4.0434 4.24451 4.16942 4.12442 4.29975ZM4.92138 3.59066L4.57255 3.11017C4.73227 2.99424 4.89927 2.88529 5.06908 2.78613L5.36862 3.29884C5.21559 3.38805 5.06522 3.48631 4.92138 3.59066ZM5.84214 3.05288L5.59514 2.51286C5.7743 2.43092 5.95955 2.35715 6.14599 2.29362L6.33763 2.8556C6.16989 2.9129 6.0032 2.97925 5.84214 3.05288ZM6.85077 2.70895L6.71644 2.13063C6.90792 2.0861 7.10416 2.05077 7.2998 2.02539L7.37624 2.61424C7.1999 2.63695 7.02326 2.66887 6.85077 2.70895Z"
                                    fill="#0B0B0B"
                                />
                                <path
                                    d="M7.79425 2.57668L7.76367 1.98367C7.86565 1.97848 7.96807 1.97595 8.07108 1.97595V2.5697C7.97846 2.5697 7.88598 2.57193 7.79425 2.57668Z"
                                    fill="#0B0B0B"
                                />
                            </svg>
                        </div>
                    </label>
                    <label
                        for="property"
                        className="lg:border-r-[1px] border-light_blue lg:w-[245px] max-md:px-6 max-md:py-2 font-Manrope text-lg max-md:border-b-[1px]  md:text-xl leading-[1.35rem]"
                    >Property
                        <div
                            className="flex items-center w-[232px] max-md:mt-2 mt-4 md:w-[13rem]"
                        >
                            <input
                                className="w-[100%] text-sm font-extralight md:text-lg md:font-light leading-[1.05rem] md:leading-[1.35]"
                                type="text"
                                id="property"
                                placeholder="Select property type"
                            />
                            <svg
                                width="16"
                                height="19"
                                viewBox="0 0 16 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.50002 13.6799L1.52002 5.85727L2.05734 5.31995L9.50002 12.6053L16.9427 5.31995L17.48 5.85727L9.50002 13.6799Z"
                                    fill="#0B0B0B"
                                />
                            </svg>
                        </div>
                    </label>
                    <label
                        for="rentRange"
                        className="lg:border-r-[1px] border-light_blue lg:w-[245px] max-md:px-6 max-md:py-2 font-Manrope text-lg max-md:border-b-[1px]  md:text-xl leading-[1.35rem]"
                    >Rent Range
                        <div
                            className="flex items-center w-[232px] max-md:mt-2 mt-4 md:w-[13rem]"
                        >
                            <input
                                className="w-[100%] text-sm font-extralight md:text-lg md:font-light leading-[1.05rem] md:leading-[1.35]"
                                type="text"
                                id="rentRange"
                                placeholder="Select a rent range"
                            />
                            <svg
                                width="16"
                                height="19"
                                viewBox="0 0 16 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.50002 13.6799L1.52002 5.85727L2.05734 5.31995L9.50002 12.6053L16.9427 5.31995L17.48 5.85727L9.50002 13.6799Z"
                                    fill="#0B0B0B"
                                />
                            </svg>
                        </div>
                    </label>
                </div>
                <div className="flex gap-4 md:gap-[1.12rem] justify-center py-2">
                    <button>
                        <svg
                            width="33"
                            height="32"
                            viewBox="0 0 33 32"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <use href="partials/HomePage/sprite.svg#filter-setting"></use>
                        </svg>
                    </button>
                    <button
                        className="bg-orange px-6 py-[6px] flex gap-2 rounded-[10px] items-center font-Comfortaa font-bold text-lg height-normal text-white-700 text-center"
                    >
                        <svg
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.6875 13.75C4.06875 13.75 1.125 10.8062 1.125 7.1875C1.125 3.56875 4.06875 0.625 7.6875 0.625C11.3062 0.625 14.25 3.56875 14.25 7.1875C14.25 10.8062 11.3062 13.75 7.6875 13.75ZM7.6875 1.875C4.75813 1.875 2.375 4.25813 2.375 7.1875C2.375 10.1169 4.75813 12.5 7.6875 12.5C10.6169 12.5 13 10.1169 13 7.1875C13 4.25813 10.6169 1.875 7.6875 1.875Z"
                                fill="white"
                            />
                            <path
                                d="M4.25 7.8125C3.905 7.8125 3.625 7.53312 3.625 7.1875C3.625 4.9475 5.4475 3.125 7.6875 3.125C8.0325 3.125 8.3125 3.40438 8.3125 3.75C8.3125 4.09562 8.0325 4.375 7.6875 4.375C6.13688 4.375 4.875 5.63688 4.875 7.1875C4.875 7.53312 4.595 7.8125 4.25 7.8125Z"
                                fill="#FFB22C"
                            />
                            <path
                                d="M17.9999 19.4812C17.5193 19.4812 17.0399 19.2987 16.6743 18.9331L10.8068 13.0656C10.5624 12.8212 10.5624 12.4262 10.8068 12.1818C11.0512 11.9374 11.4462 11.9374 11.6906 12.1818L17.5581 18.0493C17.8024 18.2937 18.1974 18.2937 18.4418 18.0493L18.5493 17.9418C18.7931 17.6981 18.7931 17.3018 18.5493 17.0581L12.6818 11.1906C12.4374 10.9462 12.4374 10.5512 12.6818 10.3068C12.9262 10.0624 13.3212 10.0624 13.5656 10.3068L19.4331 16.1743C20.1643 16.9056 20.1643 18.0943 19.4331 18.8256L19.3256 18.9331C18.9599 19.2987 18.4806 19.4812 17.9999 19.4812Z"
                                fill="white"
                            />
                        </svg>
                        <span className="w-[93px] text-center text-[#fff]">Search</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default RentBuySelect