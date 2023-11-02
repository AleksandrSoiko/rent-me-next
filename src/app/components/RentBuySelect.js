import Image from "next/image"

const RentBuySelect = () => {
    return (
        <section className="flex flex-col items-center mx-4 max-md:py-[1.44rem] md:pb-16">
            <div>
                <button
                    className="font-Comfortaa text-lg font-normal leading-[1.8rem] px-6 py-2 bg-blue rounded text-blue1 mr-2.5 relative md:text-xl md:font-semibold md:leading-[1.5rem] md:px-8 md:py-4"
                >
                    Rent
                    <Image src='/RentBuySelect/arrow.svg' width="27" height="27" alt="arrowLg" className="absolute top-[43px] left-[40px] md:top-[55px] md:left-[46px] md:hidden" />
                    <Image src='/RentBuySelect/arrow.svg' width="25" height="17" alt="arrow" className="absolute top-[43px] left-[40px] md:top-[55px] md:left-[46px] max-md:hidden" />
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
                        htmlFor="location"
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
                            <Image src='/RentBuySelect/Group.svg' width="16" height="19" alt="LocationSvg" />
                        </div>
                    </label>
                    <label
                        htmlFor="property"
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
                            <Image src='/RentBuySelect/Downv.svg' width="16" height="19" alt="PropertySvg" />
                        </div>
                    </label>
                    
                    <label
                        htmlFor="rentRange"
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
                            <Image src='/RentBuySelect/Downv.svg' width="16" height="19" alt="Rent Range svg" />
                        </div>
                    </label>
                </div>
                <div className="flex gap-4 md:gap-[1.12rem] justify-center py-2">
                    <button>
                    <Image src='/RentBuySelect/icon-park_setting-config.svg' width="33" height="32" alt="LocationSvg" />

                    </button>
                    <button
                        className="bg-orange px-6 py-[6px] flex gap-2 rounded-[10px] items-center font-Comfortaa font-bold text-lg height-normal text-white-700 text-center"
                    >
                        <Image src='/RentBuySelect/searchIcon.svg' width="16" height="19" alt="LocationSvg" />

                        <span className="w-[93px] text-center text-[#fff]">Search</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default RentBuySelect