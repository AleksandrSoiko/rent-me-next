import MyProfile from '../page'

const MyReservation = async () => {
	return (
		<div className="flex  max-w-[1180px] mx-[auto]">
			<MyProfile activeLabel={'favorite'} />
			<div>
				<p className="lg:hidden text-xl height-[1.8rem] mt-[1.5rem] ml-[1.5rem]">
					My Favorite
				</p>
				<ul className="flex max-lg:justify-center max-lg:flex-wrap gap-[1.5rem] m-[1.5rem] max-w-[72.25rem] lg:w-[75%]">
					{/* <LatestOffers apartament={apartament} /> */}
				</ul>
			</div>
		</div>
	)
}

export default MyReservation
