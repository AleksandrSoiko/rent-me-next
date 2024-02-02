import Image from 'next/image'
import Link from 'next/link'
import { btnHoverOrange, btnHoverOrangeReverse } from '../../../page'
import { Apartament } from 'types/apartament.types'

const ApratamentReserv: React.FC<{ aparatament: Apartament }> = ({
	aparatament,
}) => {
	return (
		<>
			<div className="flex justify-between">
				<div className="flex gap-[1.2rem]">
					<Link href={`/apartament/${aparatament._id}`}>
						<Image
							src={aparatament.pictures[0]}
							width="75"
							height="79"
							alt="img-Apartament"
							className="h-[79px] lg:w-[136px] lg:h-[136px]"
						/>
					</Link>
					<div className="text-[0.75rem] lg:text-xl text-Manrope flex flex-col justify-between">
						<div>
							<p>{aparatament.title}</p>
							<p className="text-[0.625rem] lg:text-sm text-grayText my-[0.5rem]">
								{aparatament.place}
							</p>
							<p className="text-[0.625rem] lg:text-sm text-grayText">Ispan</p>
						</div>
						<div>£{aparatament.price} pcm</div>
					</div>
				</div>
				<div>
					<button>...</button>
				</div>
			</div>
			<div className="flex gap-[1.25rem] mt-[1.5rem]">
				<button
					className={`${btnHoverOrange} px-2 py-[0.625rem] text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]`}
				>
					Chat
				</button>
				<button
					className={`${btnHoverOrangeReverse} px-2 py-[0.625rem] whitespace-nowrap text-center border-[1px] border-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]`}
				>
					Call
				</button>
			</div>
		</>
	)
}

export default ApratamentReserv
