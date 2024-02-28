'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import './swiper-styles.css'

import Image from 'next/image'
import { Apartament } from 'types/apartament.types'
import FullScreenImage from './openImgModal'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

import 'toastr/build/toastr.css'
import toastr from 'toastr'

import { useEffect, useState } from 'react'
import { togleBtnFavorite } from './toglleBtnFavorite'
import useProfileGet from 'hooks/useProfile'
import useAxiosPost from 'hooks/useAxios'

interface responseData {
	idApartament: string
	message: string
}

export const dynamic = 'force-dynamic'
const Apartament: React.FC<{ apartament: Apartament }> = ({ apartament }) => {
	const { load, errors, profile } = useProfileGet()
	const { data, loading, error, fetchAxios } = useAxiosPost()
	const [inFavorite, setFavorite] = useState<string[]>([])

	useEffect(() => {
		if (!errors && profile) {
			setFavorite(profile?.favorite.map(({ _id }) => _id))
		}
	}, [errors, profile])

	const paginationForSwiper = {
		clickable: true,
		renderBullet: function (_, className) {
			return `<span class="${className} ownstyle"></span>`
		},
	}

	useEffect(() => {
		if (error) {
			toastr.error(error)
		} else if (data && typeof data === 'object') {
			const responseData = data as responseData
			setFavorite((prevFavorites) => {
				if (prevFavorites.includes(responseData.idApartament)) {
					return prevFavorites.filter(
						(favId) => favId !== responseData.idApartament
					)
				} else {
					return [...prevFavorites, responseData.idApartament]
				}
			})
			toastr.success(responseData.message)
		}
	}, [error, data])

	return (
		<>
			<Swiper
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				loop
				modules={[Pagination, Navigation, Autoplay]}
				pagination={paginationForSwiper}
				slidesPerView={3}
				centeredSlides={true}
				className="mySwiper"
				navigation
			>
				{apartament?.pictures.map((image, index) => (
					<SwiperSlide key={index} virtualIndex={index}>
						<FullScreenImage key={index} imageUrl={image} altText={'image'} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className="lg:flex lg:gap-[7.5rem]">
				<div>
					<div className="flex flex-col gap-8 md:gap-10">
						<div className="flex justify-between md:hidden">
							<div className="flex gap-2">
								<Image
									src="/LatestOffers/map.svg"
									width="24"
									height="24"
									alt="map-svg"
								/>
								<p className="font-Manrope text-lg font-light leading-1.35rem">
									Map
								</p>
							</div>
							<div className="flex gap-[1.12rem]">
								<Image
									src="/header/like.svg"
									width="24"
									height="24"
									alt="like-svg"
								/>
								<button>
									<Image
										src="/LatestOffers/carbon_floorplan.svg"
										width="24"
										height="24"
										alt="like-svg"
									/>
								</button>
							</div>
						</div>
						<div className="text-[#000] mt-6 font-Manrope text-xl md:text-2xl leading-[1.5rem] md:leading-[1.8rem] flex flex-col md-max:gap-2 font-normal md:flex-row justify-between">
							<div className="lg:flex">
								<p>{apartament.title}|</p>
								<p className="flex">
									{apartament.place} |
									<span className="flex gap-2 ml-8 max-md:hidden">
										<Image
											src="/LatestOffers/map.svg"
											width="24"
											height="24"
											alt="map-svg"
										/>
										Map
									</span>
								</p>
							</div>
							<div className="flex gap-[1.12rem] max-md:hidden text-[#000] ">
								{togleBtnFavorite(
									apartament._id,
									profile,
									inFavorite,
									fetchAxios
								)}
								<button>
									<Image
										src="/LatestOffers/carbon_floorplan.svg"
										width="40"
										height="40"
										alt="floorplan"
									/>
								</button>
							</div>
						</div>
						<div className="lg:flex lg:gap-[7.5rem] text-[#000] ">
							<div className="flex text-[#000] flex-col gap-4 lg:w-[36.25rem] font-Comfortaa text-xl md:text-2xl md:font-semibold md:leading-[1.8rem] font-medium leading-[1.5rem]">
								<p className="md:mb-5">£{apartament.price} pcm</p>
								<p className="text-xl md:mb-6">Property description</p>
								<p className="text-base font-light font-Manrope md:text-xl text-[#000]">
									{apartament.description}
								</p>
							</div>
							<div className="lg:w-[30rem]">
								<div className="flex justify-between">
									<p className="font-Comfortaa text-xl font-medium leading-[1.5rem] mb-4 mt-8">
										Agent details
									</p>
									<p className="flex items-center gap-1">
										<Image
											src="/header/star.svg"
											width="18"
											height="18"
											alt="star-svg"
										/>
										<span className="font-Manrope text-xs leading-[1.125rem]">
											4.9
										</span>
									</p>
								</div>
								<div className="font-Manrope text-lg leading-[1.68rem] mb-6">
									<p>
										{apartament.agent[0].firstname} 
										{apartament.agent[0].lastname}
									</p>
									<p className="font-light">Highams Park</p>
									<p className="font-light">{apartament.agent[0].address}</p>
								</div>
							</div>
						</div>
					</div>
					<div className="font-Manrope text-lg leading-[1.68rem] mb-6 text-[#000] ">
						<p>Mcras Property Services</p>
						<p className="font-light">Highams Park</p>
						<p className="font-light">
							18 The Avenue Highams Park, London E4 9LD
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Apartament
