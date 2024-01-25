'use client'
import Image from 'next/image'
import Link from 'next/link'
import { btnHoverOrange, btnHoverOrangeReverse } from '../page'
import { Apartament } from 'types/apartament.types'
import useAxiosPost from 'hooks/useAxios'
import { useEffect } from 'react'
import 'toastr/build/toastr.css'
import toastr from 'toastr'
import { IUser } from 'types/user.types'

interface ApartamentArray {
	apartament: Apartament[]
}
interface LatestOffersProps extends ApartamentArray {
	profile?: IUser
}

const LatestOffers: React.FC<LatestOffersProps> = ({ apartament, profile }) => {
	const { data, loading, error, fetchAxios } = useAxiosPost()

	const togleAddFavotireApartament = async (idApartament: string) => {
		await fetchAxios({
			url: `/users/profile/reservation?idApartament=${idApartament}`,
			method: 'PUT',
			body: {},
		})
	}

	useEffect(() => {
		if (error) {
			toastr.error(error)
		} else if (data) {
			toastr.success(data)
		}
	}, [error, data])

	return (
		apartament &&
		apartament.length > 0 &&
		apartament.map((query) => (
			<li key={query._id} className="mt-8 md:mt-10">
				<div className="relative">
					<Link href={`/apartament/${query._id}`} className="inline-block">
						<Image
							src={query.pictures[0]}
							width="328"
							height="336"
							alt="photo"
						/>
					</Link>
					<div className="absolute bottom-0 bg-grayBg flex w-[20.5rem] md:w-[21rem] py-2 px-[1.12rem]">
						<p className="font-Comfortaa text-xl md:font-semibold font-normal leading-[1.5rem] w-[16.625rem]">
							<span>£</span>
							{query.price} pcm
						</p>
						<div className="flex gap-[1.12rem]">
							<Image
								src="/LatestOffers/carbon_floorplan.svg"
								width="24"
								height="24"
								alt="plan"
							/>
							<button onClick={() => togleAddFavotireApartament(query._id)}>
								{profile?.favorite.length === 0 ? (
									<Image
										src="/header/like.svg"
										width="24"
										height="24"
										alt="like"
									/>
								) : (
									profile?.favorite.map((favoriteItem: Apartament) =>
										favoriteItem._id === query._id ? (
											<Image
												key={favoriteItem._id}
												src="/header/likeUse.svg"
												width="24"
												height="24"
												alt="like"
											/>
										) : (
											<Image
												key={favoriteItem._id}
												src="/header/star.svg"
												width="24"
												height="24"
												alt="like"
											/>
										)
									)
								)}
							</button>
						</div>
					</div>
				</div>
				<div className="pt-4 pb-6 px-4 shadow-[0px_1px_3px_0px_rgba(215,229,255,0.3),0px_3px_6px_0_rgba(215,229,255,0.3)] w-[20.5rem] md:w-[21rem]">
					<div>
						<p className="font-Manrope text-lg leading-[1.5rem] font-light flex flex-col mb-4 text-[#000]">
							<span className="font-semibold">{query.title}</span>
							Whitehill Place, Glasgow, G31
						</p>
						<p className="text-base font-light leading-[1.2rem] mb-4 text-[#000]">
							{query.description.slice(0, 200)}... 
							<Link href={`/apartament/${query._id}`} className="underline">
								more
							</Link>
						</p>
					</div>
					<p className="text-blueText text-sm font-normal mb-2">
						Agent details
					</p>
					<Link
						href={`/agent/${query.agent[0]._id}`}
						className="flex justify-between items-center font-Manrope text-[0.75rem] leading-[1.125rem] mb-4"
					>
						<div className="flex items-center gap-3 text-[#000]">
							<Image
								src={query.agent[0].foto}
								width="36"
								height="36"
								alt="Avatar"
								className="rounded-[100%]"
							/>
							<p>
								{query.agent[0].firstname}-{query.agent[0].lastname}
							</p>
						</div>
						<p className="flex gap-1">
							<span>
								<Image
									src="/header/star.svg"
									width="18"
									height="18"
									alt="starSvg"
									className="rounded-[100%]"
								/>
							</span>
							4.9
						</p>
					</Link>
					<div className="flex gap-4 justify-center">
						<button
							className={`${btnHoverOrange} px-2 py-[0.625rem] text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]`}
						>
							Email
						</button>
						<button
							className={`${btnHoverOrangeReverse} px-2 py-[0.625rem] whitespace-nowrap text-center border-[1px] border-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]`}
						>
							Call
						</button>
					</div>
				</div>
			</li>
		))
	)
}

export default LatestOffers
