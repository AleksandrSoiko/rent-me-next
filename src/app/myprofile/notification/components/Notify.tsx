import Image from 'next/image'

export const Notify = () => {
	return (
		<li className="p-[1rem] bg-blue1 flex justify-between rounded-[0.675rem] ">
			<div className="flex items-center gap-[1rem]">
				<Image
					src="/LatestOffers/Avatar.png"
					width="40"
					height="40"
					alt="avatar"
					className="rounded-[100%]"
				/>
				<p className="text-sm">
					Thank you for registering! Your account has been successfully created.
					Search for the perfect accommodation with us.
				</p>
			</div>
			<span className="text-xs text-grayText ml-[1rem]">11:23</span>
		</li>
	)
}
