import Image from 'next/image'

export const ContactUser = () => {
	return (
		<div className="bg-blue1 rounded-[0.5rem] px-[1rem] py-[0.62rem] flex justify-between">
			<div className="flex gap-[0.62rem]">
				<Image
					src="/LatestOffers/Avatar.png"
					width="44"
					height="44"
					alt="avatar"
					className="rounded-[100%]"
				/>
				<div className="flex flex-col justify-between">
					<p className="text-sm font-Manrope height-[1.05rem]">Ben Swam</p>
					<p className="text-[0.625rem] font-Manrope height-[0.9rem] text-grayText">
						Hello
					</p>
				</div>
			</div>
			<div className="flex flex-col justify-between">
				<span className="text-[0.75rem] font-Manrope height-[0.9rem] text-grayText">
					11:23
				</span>
				<span className="bg-borderBlue w-[1rem] h-[1rem] text-xs font-medium font-Inter text-center rounded-[100%] ">
					1
				</span>
			</div>
		</div>
	)
}
