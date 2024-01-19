import RentBuySelect from '../../components/RentBuySelect'
import LatestOffers from '../../components/LatestOffers'

const fetchResultsByHouse = () => {
	return (
		<section className="flex flex-col items-center mx-4 mt-[3.75rem]  max-md:py-[1.44rem] md:pb-16">
			<RentBuySelect />
			<div className="mt-12 mb-6 mx-4 md:mb-16 lg:mb-20 flex flex-col items-center">
				<p className="text-center font-Comfortaa text-2xl font-normal leading-[1.8rem] md:text-[3.125rem] md:leading-[3.75rem]">
					Results
				</p>
				<LatestOffers />
			</div>
		</section>
	)
}

export default fetchResultsByHouse
