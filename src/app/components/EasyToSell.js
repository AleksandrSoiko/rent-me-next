const EasyToSell =()=>{
    return (
        <>
        <p
          className="font-Comfortaa text-2xl font-normal leading-[1.8rem] w-[11.875rem] text-center mr-[auto] ml-[auto] md:text-[3.125rem] md:w-[100%]"
        >
          Easy to sell with RealEstate
        </p>
        <p
          className="font-Manrope text-xl font-medium leading-[1.5rem] text-center my-6 md:hidden"
        >
          Add your advertisement to have opportunity to sell your properties
        </p>
        <div
          className="flex items-center max-md:w-[20.5rem] justify-between border-borderBlue border-[1px] rounded-lg px-5 py-4 md:mt-10 lg:mt-[3.75rem] lg:w-[1180px]"
        >
          <svg width="126" height="97" viewBox="0 0 126 97" fill="none">
            <use href="partials/HomePage/sprite.svg#contecnt_block"></use>
          </svg>
          <p
            className="font-Manrope text-xl font-medium leading-[1.5rem] text-center my-6 max-md:hidden px-4"
          >
            Add your advertisement to have opportunity to sell your properties
          </p>
          <svg
            width="84"
            height="53"
            viewBox="0 0 84 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="partials/HomePage/sprite.svg#add"></use>
          </svg>
        </div>
      </>
    )
}
export default EasyToSell