'use client'
import Image from 'next/image'
import FullScreenImage from 'app/apartament/[slug]/components/openImgModal'
import { btnHoverOrange, btnHoverOrangeReverse } from 'app/page'
import { Apartament } from 'types/apartament.types'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import './Agentstyles.css'

interface ApartamentProps {
	properties: Apartament[]
}

const YourProperties: React.FC<ApartamentProps> = ({ properties }) => {
	const pagination = {
		clickable: true,
		renderBullet: function (_, className) {
			return '<span class="' + className + '">' + '</span>'
		},
	}

	return (
		properties &&
		properties.map((propertie) => (
			<li key={propertie._id}>
				<div className="lg:flex gap-5 my-8">
					<div className="w-[580px] mb-[80px]">
						<Swiper
							autoplay={{
								delay: 5000,
								disableOnInteraction: false,
							}}
							modules={[Pagination, Navigation, Autoplay]}
							loop={true}
							spaceBetween={30}
							// pagination={pagination}
							slidesPerView={1}
							// className="mySwiperAgent"
						>
							{propertie.pictures.map((image, index) => (
								<div key={index}>
									<SwiperSlide
										key={image}
										virtualIndex={index}
										className="w-[580px] h-[395px]"
									>
										<FullScreenImage imageUrl={image} altText={'image'} />
									</SwiperSlide>
								</div>
							))}
						</Swiper>
					</div>
					<div className="flex flex-col gap-8 md:gap-10">
						<div className="font-Manrope text-xl md:text-2xl leading-[1.5rem] md:leading-[1.8rem] flex flex-col md-max:gap-2 font-normal md:flex-row justify-between">
							<div>
								<p>{propertie.title}</p>
								<p className="flex my-2">{propertie.place}</p>
								<p className="flex gap-2">
									<Image
										src="/LatestOffers/map.svg"
										width="24"
										height="24"
										alt="map"
									/>
									Map
								</p>
							</div>
						</div>
						<div>
							<div className="flex flex-col text-[#000] lg:w-[36.25rem] font-Comfortaa text-xl md:text-2xl md:font-semibold md:leading-[1.8rem] font-medium leading-[1.5rem]">
								<p className="md:mb-5 font-semibold">£{propertie.price} pcm</p>
								<p className="text-xl md:mb-6">Property description</p>
								<p className="font-light font-Manrope md:text-xl leading-[1.875rem] text-[#000]">
									{propertie.description.length > 200
										? `${propertie.description.slice(0, 200)}... `
										: propertie.description}
									{propertie.description.length > 200 && (
										<Link
											href={`/apartament/${propertie._id}`}
											className="underline"
										>
											more
										</Link>
									)}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex gap-4 max-md:justify-center">
					<button
						className={`${btnHoverOrange} w-[9.75rem] lg:w-[11.25rem] px-2 py-[0.625rem] text-[#fff] whitespace-nowrap text-center bg-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]`}
					>
						Edit
					</button>
					<button
						className={`${btnHoverOrangeReverse} w-[9.75rem] lg:w-[11.25rem] px-8 py-[0.625rem] lg:py-4 whitespace-nowrap text-center border-[1px] border-orange text-ellipsis font-Comfortaa text-sm font-semibold w-[8.75rem] rounded-[0.625rem]`}
					>
						Delete
					</button>
				</div>
			</li>
		))
	)
}

export default YourProperties
