import Image from 'next/image'

const EasyToSell = () => {
	return (
		<>
			<p className="font-Comfortaa text-2xl font-normal leading-[1.8rem] w-[11.875rem] text-center mr-[auto] ml-[auto] md:text-[3.125rem] md:w-[100%]">
				Easy to sell with RealEstate
			</p>
			<p className="font-Manrope text-xl font-medium leading-[1.5rem] text-center my-6 md:hidden text-[#000]">
				Add your advertisement to have opportunity to sell your properties
			</p>
			<div className="flex items-center max-md:w-[20.5rem] justify-between border-borderBlue border-[1px] rounded-lg px-5 py-4 md:mt-10 lg:mt-[3.75rem] lg:w-[1180px]">
				<Image
					src="/EasyToSell/image.svg"
					width="126"
					height="97"
					alt="contecnt_block"
				/>
				<p className="font-Manrope text-xl font-medium leading-[1.5rem] text-center my-6 max-md:hidden px-4 text-[#000]">
					Add your advertisement to have opportunity to sell your properties
				</p>
				<Image src="/EasyToSell/add.svg" width="84" height="53" alt="add" />
			</div>
		</>
	)
}
export default EasyToSell
